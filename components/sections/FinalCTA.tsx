import { Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="final-cta-section" id="final-cta">
      <div className="container">
        <Reveal className="final-cta-card">
          <span className="final-orb one" aria-hidden="true" /><span className="final-orb two" aria-hidden="true" />
          <span className="final-eyebrow"><Sparkles size={15} /> YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Ready to make<br /><em>it click?</em></h2>
          <p>Bring the question. We&apos;ll help you find the next step.</p>
          <ButtonLink href="#demo" variant="light" arrow>Start learning free</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
