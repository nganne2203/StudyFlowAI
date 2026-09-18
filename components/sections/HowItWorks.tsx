import { ArrowRight, BookOpenText, MessageSquareText, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteCopy } from "@/data/i18n";

const icons = [BookOpenText, MessageSquareText, Trophy];

export function HowItWorks({ copy }: { copy: SiteCopy["how"] }) {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <Reveal><SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title1} <em>{copy.title2}</em></>} description={copy.description} centered /></Reveal>
        <div className="steps-grid">
          {copy.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Reveal className="step-card" key={step.title} delay={index * 0.1}>
                <span className="step-number">0{index + 1}</span>
                <div className="step-icon"><Icon size={26} strokeWidth={1.7} /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < 2 && <ArrowRight className="step-arrow" size={23} aria-hidden="true" />}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
