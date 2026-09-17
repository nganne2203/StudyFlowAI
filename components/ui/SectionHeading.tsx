import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={"section-heading" + (centered ? " centered" : "") + (light ? " light" : "")}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
