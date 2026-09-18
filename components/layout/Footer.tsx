import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/ui/Brand";
import type { SiteCopy } from "@/data/i18n";

const groupHrefs = [
  ["#features", "#demo", "#how-it-works", "#pricing"],
  ["#final-cta", "#how-it-works", "#faq"],
  ["#why-studyflow", "#final-cta", "#final-cta"],
  ["#faq", "#faq"],
];

export function Footer({ copy }: { copy: SiteCopy["footer"] }) {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Brand ariaLabel={copy.brandAria} />
          <p>{copy.description}</p>
          <span className="footer-demo">{copy.disclaimer}</span>
        </div>
        <div className="footer-links">
          {copy.groups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((label, index) => <a href={groupHrefs[groupIndex][index]} key={label}>{label}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{copy.copyright}</span>
        <a href="#top">{copy.top} <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
