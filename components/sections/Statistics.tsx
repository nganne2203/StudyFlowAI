import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { number: "10K+", label: "students learning", tone: "purple" },
  { number: "500K+", label: "questions answered", tone: "mint" },
  { number: "50K+", label: "quizzes created", tone: "peach" },
  { number: "4.9/5", label: "student rating", tone: "blue" },
];

export function Statistics() {
  return (
    <section className="section stats-section">
      <div className="container">
        <Reveal className="stats-intro"><SectionHeading eyebrow="Learning in motion" title={<>Small steps <em>add up.</em></>} description="A glimpse of what a more focused study routine could make possible." /><span className="stats-disclosure">Illustrative demo metrics</span></Reveal>
        <div className="stats-grid">
          {metrics.map((item, index) => <Reveal className={"stat-card stat-" + item.tone} key={item.label} delay={index * 0.06}><ArrowUpRight size={18} aria-hidden="true" /><strong>{item.number}</strong><span>{item.label}</span></Reveal>)}
        </div>
      </div>
    </section>
  );
}
