import { ArrowRight, BookOpenText, Check, CircleHelp, Sparkles, WandSparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <span className="hero-badge"><Sparkles size={14} aria-hidden="true" /> Your study space, reimagined <span className="badge-arrow">↗</span></span>
          <h1 id="hero-title">A little clarity<br /><span>changes everything.</span></h1>
          <p>Meet your AI study partner for clearer answers, better practice, and a plan that actually fits your week.</p>
          <div className="hero-actions">
            <ButtonLink href="#demo" arrow>Start learning free</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">See how it works <ArrowRight size={16} aria-hidden="true" /></ButtonLink>
          </div>
          <div className="hero-note"><span className="hero-note-icon"><Check size={13} /></span> No sign-up needed for this interactive preview</div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.16}>
          <div className="hero-halo" aria-hidden="true" />
          <div className="floating-card floating-card-left">
            <div className="floating-icon green"><BookOpenText size={17} /></div>
            <div><strong>Notes, simplified</strong><span>Key ideas in seconds</span></div>
          </div>
          <div className="hero-chat">
            <div className="hero-chat-top">
              <div className="mini-brand"><span><Sparkles size={14} /></span><strong>StudyFlow AI</strong></div>
              <span className="status-pill"><i /> AI tutor</span>
            </div>
            <div className="hero-chat-content">
              <div className="chat-date">TODAY&apos;S LEARNING SESSION</div>
              <div className="hero-user-message">Explain React useEffect in simple terms.</div>
              <div className="hero-answer">
                <span className="answer-avatar"><Sparkles size={15} /></span>
                <div>
                  <span className="answer-name">StudyFlow AI</span>
                  <p>Think of <strong>useEffect</strong> as a note to React: “After you show this screen, do this extra task.”</p>
                  <p>For example, after a page appears, you might fetch your study notes or update its title.</p>
                  <div className="answer-chips"><span>✦ Give an example</span><span>✦ Quiz me</span></div>
                </div>
              </div>
            </div>
            <div className="hero-chat-input"><span>Ask your next question...</span><span className="send-circle"><ArrowRight size={16} /></span></div>
          </div>
          <div className="floating-card floating-card-right">
            <div className="floating-icon purple"><CircleHelp size={17} /></div>
            <div><strong>You&apos;ve got this!</strong><span>3 topics mastered this week</span></div>
            <WandSparkles className="float-spark" size={17} aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
