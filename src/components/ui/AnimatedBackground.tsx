import { useEffect, useRef } from "react";
import { Mesh, Program, Renderer, Triangle } from "ogl";

const vertex = `
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p *= 2.02;
    amplitude *= 0.5;
  }
  return value;
}

float waveSheet(vec2 uv, float base, float thickness, float scale, float speed, float offset, float side) {
  float x = uv.x;
  float t = uTime * speed;
  float curve =
    sin(x * scale + t + offset) * 0.115 +
    sin(x * scale * 0.56 - t * 0.7 + offset * 1.5) * 0.085 +
    sin(x * scale * 1.62 + t * 0.45 + offset * 0.8) * 0.035;

  float center = base + curve;
  float width = thickness + sin(x * 4.2 + t * 0.65 + offset) * 0.035;
  float dist = abs(uv.y - center);

  float body = smoothstep(width, 0.0, dist);
  float crest = smoothstep(0.030, 0.0, abs(uv.y - (center + width * 0.58)));
  float under = smoothstep(0.060, 0.0, abs(uv.y - (center - width * 0.45))) * 0.38;
  float texture = mix(0.45, 1.05, fbm(vec2(x * 3.1 + t * 0.15, uv.y * 6.0 - t * 0.11)));

  float sideMask = side > 0.0
    ? smoothstep(0.28, 0.82, uv.x)
    : smoothstep(0.84, 0.20, uv.x);

  return (body * 0.52 + crest * 0.72 + under * 0.22) * texture * sideMask;
}

void main() {
  vec2 uv = vUv;
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

  float vignette = smoothstep(1.18, 0.18, length(p));

  vec2 flowUv = uv;
  flowUv.x = uv.x * 1.18 - 0.09;
  flowUv.x += sin(uv.y * 3.2 + uTime * 0.075) * 0.030;
  flowUv.y += sin(uv.x * 4.1 - uTime * 0.060) * 0.026;

  float lowerLeft = waveSheet(flowUv + vec2(-0.10, -0.10), 0.34, 0.155, 7.2, 0.16, 0.1, -1.0);
  float lowerRight = waveSheet(flowUv + vec2(0.18, -0.03), 0.38, 0.175, 6.0, -0.12, 2.3, 1.0);
  float upperRight = waveSheet(flowUv + vec2(0.12, 0.19), 0.56, 0.150, 5.2, 0.11, 4.6, 1.0);

  float surface = lowerLeft * 0.72 + lowerRight * 0.64 + upperRight * 0.52;
  surface *= smoothstep(0.04, 0.25, uv.y) * smoothstep(1.0, 0.42, uv.y) * vignette;

  float faintMist = fbm(flowUv * vec2(2.0, 4.0) + vec2(uTime * 0.035, -uTime * 0.02));
  surface += faintMist * 0.035 * smoothstep(0.0, 0.50, uv.y) * smoothstep(0.95, 0.28, uv.y);

  vec3 color = vec3(surface);
  color = pow(color, vec3(1.08));
  color *= 1.0 - smoothstep(0.74, 1.18, length(p)) * 0.62;

  gl_FragColor = vec4(color, 1.0);
}
`;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AnimatedBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) {
      return;
    }

    const renderer = new Renderer({
      alpha: false,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio, 1.5),
    });
    const { gl } = renderer;
    gl.canvas.className = "animated-waves-canvas";
    root.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    let frame = 0;
    let rafId = 0;

    const resize = () => {
      const width = root.clientWidth;
      const height = root.clientHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width, height];
    };

    const render = (time: number) => {
      frame += 1;
      if (frame % 2 === 0) {
        program.uniforms.uTime.value = time * 0.001;
        renderer.render({ scene: mesh });
      }
      rafId = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      gl.canvas.remove();
      renderer.gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden bg-black">
      <div className="animated-waves-fallback" />
      <div className="wave-vignette" />
      <div className="wave-bottom-fade" />
      <div className="noise-overlay" />
    </div>
  );
}
