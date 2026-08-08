import Link from "next/link";
import type { ReactNode } from "react";

export type BtnVariant = "primary" | "ghost" | "iron" | "blood";

export default function BrutalButton({
  children,
  href,
  type = "button",
  variant = "primary",
  block,
  arrow,
  className = "",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: BtnVariant;
  block?: boolean;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const variantClass = `btn--${variant}`;
  const blockClass = block ? "btn--block" : "";
  const cls = `btn ${variantClass} ${blockClass} ${className}`.trim();

  const inner = (
    <>
      {children}
      {arrow && <span className="ar">→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}