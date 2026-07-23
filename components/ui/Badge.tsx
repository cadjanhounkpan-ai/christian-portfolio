import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Tone = "primary" | "accent" | "neutral";

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary-50 text-primary-700",
  accent: "bg-accent-50 text-accent-700",
  neutral: "bg-slate-100 text-slate-600",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-medium tracking-tight",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
