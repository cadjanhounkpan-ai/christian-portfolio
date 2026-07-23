import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({ className, hoverable = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 ease-out-soft",
        hoverable && "hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
      {...props}
    />
  );
}
