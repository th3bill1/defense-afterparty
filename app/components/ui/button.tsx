import * as React from "react";

import { cn } from "../../utils/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "default", size = "default", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        base,
        variant === "default" && "border border-transparent bg-(--brand) text-(--brand-contrast) hover:brightness-110",
        variant === "outline" && "border border-(--line) bg-(--surface) text-(--text) hover:bg-(--surface-soft)",
        variant === "ghost" && "border border-transparent bg-transparent text-(--text) hover:bg-(--surface-soft)",
        size === "default" && "px-5 py-2.5 text-sm",
        size === "sm" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-3 text-base",
        className
      )}
      {...props}
    />
  );
});
