import { ArrowRight, BookMarked, CalendarDays, ChartNoAxesColumnIncreasing, CircleHelp, FileText, ListChecks, Sparkles } from "lucide-react";
import { features } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [CircleHelp, FileText, ListChecks, CalendarDays, BookMarked, ChartNoAxesColumnIncreasing];

function FeatureVisual({ id }: { id: string }) {
  if (id === "ask") return <div className="feature-visual visual-ask"><span className="visual-question">What is photosynthesis, really?</span><span className="visual-answer"><Sparkles size={14} /> It&apos;s how plants turn sunlight into the energy they need to grow.</span></div>;
  if (id === "summaries") return <div className="feature-visual visual-summary"><span className="skeleton-line wide" /><span className="skeleton-line" /><span className="summary-tag">✦ 3 key takeaways</span></div>;
  if (id === "quizzes") return <div className="feature-visual visual-quiz"><span>01 / 05</span><strong>Check your understanding</strong><span className="quiz-option"><i /> Option A</span><span className="quiz-option selected"><i /> Option B <span>✓</span></span></div>;
  if (id === "plans") return <div className="feature-visual visual-plan"><span><b>MON</b> Review chapter 4 <i>✓</i></span><span><b>TUE</b> Practice quiz <i>○</i></span><span><b>WED</b> Recap & revise <i>○</i></span></div>;
  if (id === "materials") return <div className="feature-visual visual-material"><span className="file-icon"><FileText size={20} /></span><span><strong>Biology notes.pdf</strong><small>Ready to explore</small></span><span className="file-check">✓</span></div>;
  return <div className="feature-visual visual-progress"><div><span>Weekly focus</span><strong>8h 45m</strong></div><div className="tiny-bars">{[36, 55, 43, 78, 63, 87, 54].map((height, index) => <i key={index} style={{ height: height + "%" }} />)}</div></div>;
}

export function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <Reveal className="features-intro"><SectionHeading eyebrow="The toolkit" title={<>Everything you need to <em>get unstuck.</em></>} description="One thoughtful space for the questions, notes, practice, and plans that move learning forward." /></Reveal>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Reveal className={"feature-card feature-" + feature.id} key={feature.id} delay={(index % 3) * 0.06}>
                <div className="feature-top"><span className="feature-icon"><Icon size={22} strokeWidth={1.8} /></span><span className="feature-number">0{index + 1}</span></div>
                <div className="feature-body"><h3>{feature.title}</h3><p>{feature.description}</p></div>
                <FeatureVisual id={feature.id} />
                <span className="feature-bottom">{feature.detail} <ArrowRight size={16} aria-hidden="true" /></span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
