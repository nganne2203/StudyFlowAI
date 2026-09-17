import { ArrowUpRight, Layers3, Lightbulb, ListTodo } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const problems = [
  { icon: Layers3, title: "Too much to sort through", text: "Find the point in your notes without losing the context." },
  { icon: Lightbulb, title: "Still not quite clicking", text: "Ask the follow-up question and get a fresh explanation." },
  { icon: ListTodo, title: "No clear next step", text: "Turn a big goal into a study session you can start today." },
];

export function Problem() {
  return (
    <section className="section problem-section" id="why-studyflow">
      <div className="container problem-grid">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title={<>Studying shouldn&apos;t feel like <em>starting over.</em></>}
            description="You have the notes. You have the questions. What you need is a way to connect the dots and keep moving."
          />
          <a className="text-link" href="#features">See what StudyFlow can do <ArrowUpRight size={18} aria-hidden="true" /></a>
        </Reveal>
        <div className="problem-list">
          {problems.map((item, index) => {
            const Icon = item.icon;
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
