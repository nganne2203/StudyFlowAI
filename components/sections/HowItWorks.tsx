import { ArrowRight, BookOpenText, MessageSquareText, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { icon: BookOpenText, title: "Bring what you're learning", text: "Choose a topic, paste notes, or explore a sample document." },
  { icon: MessageSquareText, title: "Make the ideas click", text: "Ask questions, get a summary, or turn the topic into a quiz." },
  { icon: Trophy, title: "Practice with purpose", text: "Follow a simple plan and see the progress you're making." },
];

export function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <Reveal><SectionHeading eyebrow="How it works" title={<>From messy notes to <em>momentum.</em></>} description="A simple flow that meets you wherever you are in the learning process." centered /></Reveal>
        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
