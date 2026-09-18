import { ArrowRight, BookMarked, CalendarDays, ChartNoAxesColumnIncreasing, CircleHelp, FileText, ListChecks, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SiteCopy } from "@/data/i18n";

const icons = [CircleHelp, FileText, ListChecks, CalendarDays, BookMarked, ChartNoAxesColumnIncreasing];

function FeatureVisual({ id, copy }: { id: string; copy: SiteCopy["features"]["visual"] }) {
  if (id === "ask") return <div className="feature-visual visual-ask"><span className="visual-question">{copy.question}</span><span className="visual-answer"><Sparkles size={14} /> {copy.answer}</span></div>;
  if (id === "summaries") return <div className="feature-visual visual-summary"><span className="skeleton-line wide" /><span className="skeleton-line" /><span className="summary-tag">{copy.takeaways}</span></div>;
  if (id === "quizzes") return <div className="feature-visual visual-quiz"><span>01 / 05</span><strong>{copy.check}</strong><span className="quiz-option"><i /> {copy.optionA}</span><span className="quiz-option selected"><i /> {copy.optionB} <span>✓</span></span></div>;
  if (id === "plans") return <div className="feature-visual visual-plan">{copy.days.map((day, index) => <span key={day}><b>{day}</b> {copy.tasks[index]} <i>{index === 0 ? "✓" : "○"}</i></span>)}</div>;
  if (id === "materials") return <div className="feature-visual visual-material"><span className="file-icon"><FileText size={20} /></span><span><strong>{copy.file}</strong><small>{copy.ready}</small></span><span className="file-check">✓</span></div>;
  return <div className="feature-visual visual-progress"><div><span>{copy.focus}</span><strong>{copy.time}</strong></div><div className="tiny-bars">{[36, 55, 43, 78, 63, 87, 54].map((height, index) => <i key={index} style={{ height: height + "%" }} />)}</div></div>;
}

export function Features({ copy }: { copy: SiteCopy["features"] }) {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <Reveal className="features-intro"><SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title1} <em>{copy.title2}</em></>} description={copy.description} /></Reveal>
        <div className="features-grid">
          {copy.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Reveal className={"feature-card feature-" + feature.id} key={feature.id} delay={(index % 3) * 0.06}>
                <div className="feature-top"><span className="feature-icon"><Icon size={22} strokeWidth={1.8} /></span><span className="feature-number">0{index + 1}</span></div>
                <div className="feature-body"><h3>{feature.title}</h3><p>{feature.description}</p></div>
                <FeatureVisual id={feature.id} copy={copy.visual} />
                <span className="feature-bottom">{feature.detail} <ArrowRight size={16} aria-hidden="true" /></span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
