import * as React from "react";

import { cn } from "../../utils/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]",
        variant === "default" && "border-[color-mix(in_srgb,var(--gold)_35%,var(--line))] bg-[color-mix(in_srgb,var(--gold)_16%,var(--surface))] text-(--text)",
        variant === "outline" && "border-(--line) bg-(--surface) text-(--muted)",
        className
      )}
      {...props}
    />
  );
}
