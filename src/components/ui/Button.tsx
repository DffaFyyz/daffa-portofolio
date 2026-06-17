import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
};

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
    href?: never;
  };

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
    href?: never;
  };

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: never;
  };

const variants = {
  primary:
    "border border-white/18 bg-[linear-gradient(180deg,#111111_0%,#050505_100%)] text-text-primary shadow-[0_0_32px_rgba(255,255,255,0.12),0_18px_42px_rgba(0,0,0,0.72),inset_0_1px_0_rgba(255,255,255,0.18)] hover:border-white/28 hover:bg-[linear-gradient(180deg,#161616_0%,#050505_100%)]",
  secondary:
    "border border-white/12 bg-black/55 text-text-primary shadow-[0_12px_28px_rgba(0,0,0,0.56),inset_0_1px_0_rgba(255,255,255,0.10)] hover:border-white/20 hover:bg-black/70",
  ghost: "border border-white/12 bg-black/40 text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-black/65",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

export function Button(props: ButtonProps | LinkButtonProps | AnchorButtonProps) {
  const { children, variant = "secondary", icon, className, ...rest } = props;
  const content = (
    <>
      <span>{children}</span>
      {icon ?? <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if ("to" in props && props.to) {
    return (
      <Link className={cn(base, variants[variant], className)} to={props.to}>
        {content}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a className={cn(base, variants[variant], className)} {...(rest as AnchorButtonProps)} href={props.href}>
        {content}
      </a>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...(rest as ButtonProps)}>
      {content}
    </button>
  );
}
