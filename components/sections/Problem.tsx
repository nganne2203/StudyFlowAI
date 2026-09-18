import { ArrowUpRight, Layers3, Lightbulb, ListTodo } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteCopy } from "@/data/i18n";

const icons = [Layers3, Lightbulb, ListTodo];

export function Problem({ copy }: { copy: SiteCopy["problem"] }) {
  return (
    <section className="section problem-section" id="why-studyflow">
      <div className="container problem-grid">
        <Reveal>
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={<>{copy.title1} <em>{copy.title2}</em></>}
            description={copy.description}
          />
          <a className="text-link" href="#features">{copy.link} <ArrowUpRight size={18} aria-hidden="true" /></a>
        </Reveal>
        <div className="problem-list">
          {copy.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal className="problem-row" key={item.title} delay={index * 0.07}>
                <span className="problem-icon"><Icon size={21} strokeWidth={1.8} /></span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <span className="problem-index">0{index + 1}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
