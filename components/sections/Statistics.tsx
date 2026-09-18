import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteCopy } from "@/data/i18n";

const metrics = [
  { number: "10K+", tone: "purple" },
  { number: "500K+", tone: "mint" },
  { number: "50K+", tone: "peach" },
  { number: "4.9/5", tone: "blue" },
];

export function Statistics({ copy }: { copy: SiteCopy["stats"] }) {
  return (
    <section className="section stats-section">
      <div className="container">
        <Reveal className="stats-intro"><SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title1} <em>{copy.title2}</em></>} description={copy.description} /><span className="stats-disclosure">{copy.disclosure}</span></Reveal>
        <div className="stats-grid">
          {metrics.map((item, index) => <Reveal className={"stat-card stat-" + item.tone} key={item.tone} delay={index * 0.06}><ArrowUpRight size={18} aria-hidden="true" /><strong>{item.number}</strong><span>{copy.labels[index]}</span></Reveal>)}
        </div>
      </div>
    </section>
  );
}
