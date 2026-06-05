/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#000000",
          900: "#050505",
          800: "#0C0C0E",
          700: "#171719"
        },
        text: {
          primary: "#F5F5F5",
          secondary: "rgba(255, 255, 255, 0.62)",
          muted: "rgba(255, 255, 255, 0.42)"
        }
      },
      fontFamily: {
        sans: [
          "Geist",
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        heading: [
          "Space Grotesk",
          "Geist",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      },
      boxShadow: {
        glass: "0 22px 70px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.10)",
        glow: "0 0 45px rgba(255, 255, 255, 0.10)"
      },
      backgroundImage: {
        "radial-soft": "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 32%)"
      }
    }
  },
  plugins: []
};
