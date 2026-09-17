import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: ButtonLinkProps) {
  return (
    <a className={"button-link button-" + variant + " " + className} href={href}>
      {children}
      {arrow && <ArrowUpRight size={18} aria-hidden="true" />}
    </a>
  );
}
