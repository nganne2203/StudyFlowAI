import { ArrowRight, BookOpenText, Check, CircleHelp, Sparkles, WandSparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteCopy } from "@/data/i18n";

export function Hero({ copy }: { copy: SiteCopy["hero"] }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <span className="hero-badge"><Sparkles size={14} aria-hidden="true" /> {copy.badge} <span className="badge-arrow">↗</span></span>
          <h1 id="hero-title">{copy.title1}<br /><span>{copy.title2}</span></h1>
          <p>{copy.description}</p>
          <div className="hero-actions">
            <ButtonLink href="#demo" arrow>{copy.cta}</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">{copy.secondary} <ArrowRight size={16} aria-hidden="true" /></ButtonLink>
          </div>
          <div className="hero-note"><span className="hero-note-icon"><Check size={13} /></span> {copy.note}</div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.16}>
          <div className="hero-halo" aria-hidden="true" />
          <div className="floating-card floating-card-left">
            <div className="floating-icon green"><BookOpenText size={17} /></div>
            <div><strong>{copy.notes}</strong><span>{copy.keyIdeas}</span></div>
          </div>
          <div className="hero-chat">
            <div className="hero-chat-top">
              <div className="mini-brand"><span><Sparkles size={14} /></span><strong>StudyFlow AI</strong></div>
              <span className="status-pill"><i /> {copy.tutor}</span>
            </div>
            <div className="hero-chat-content">
              <div className="chat-date">{copy.session}</div>
              <div className="hero-user-message">{copy.question}</div>
              <div className="hero-answer">
                <span className="answer-avatar"><Sparkles size={15} /></span>
                <div>
                  <span className="answer-name">StudyFlow AI</span>
                  <p>{copy.answer1} <strong>useEffect</strong> {copy.answer1Rest}</p>
                  <p>{copy.answer2}</p>
                  <div className="answer-chips"><span>✦ {copy.example}</span><span>✦ {copy.quiz}</span></div>
                </div>
              </div>
            </div>
            <div className="hero-chat-input"><span>{copy.next}</span><span className="send-circle"><ArrowRight size={16} /></span></div>
          </div>
          <div className="floating-card floating-card-right">
            <div className="floating-icon purple"><CircleHelp size={17} /></div>
            <div><strong>{copy.encouragement}</strong><span>{copy.mastered}</span></div>
            <WandSparkles className="float-spark" size={17} aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
