import type { ReactNode } from "react";

const styles = {
  iron: "bg-iron text-caution",
  caution: "bg-caution text-iron",
  blood: "bg-blood text-chalk",
} as const;

export type LabelVariant = keyof typeof styles;

export default function LabelTag({
  children,
  variant = "iron",
  className = "",
}: {
  children: ReactNode;
  variant?: LabelVariant;
  className?: string;
}) {
  return (
    <span
      className={`inline-block -rotate-2 px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}