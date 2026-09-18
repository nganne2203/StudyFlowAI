import { Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteCopy } from "@/data/i18n";

export function FinalCTA({ copy }: { copy: SiteCopy["final"] }) {
  return (
    <section className="final-cta-section" id="final-cta">
      <div className="container">
        <Reveal className="final-cta-card">
          <span className="final-orb one" aria-hidden="true" /><span className="final-orb two" aria-hidden="true" />
          <span className="final-eyebrow"><Sparkles size={15} /> {copy.eyebrow}</span>
          <h2>{copy.title1}<br /><em>{copy.title2}</em></h2>
          <p>{copy.description}</p>
          <ButtonLink href="#demo" variant="light" arrow>{copy.cta}</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
