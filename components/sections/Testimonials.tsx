import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteCopy } from "@/data/i18n";

export function Testimonials({ copy }: { copy: SiteCopy["testimonials"] }) {
  return (
    <section className="section testimonials-section" id="stories">
      <div className="container">
        <Reveal className="testimonials-heading"><SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title1} <em>{copy.title2}</em></>} description={copy.description} centered /></Reveal>
        <div className="testimonials-grid">
          {copy.items.map((person, index) => <Reveal className="testimonial-card" key={person.name} delay={index * 0.06}>
            <div className="quote-mark">“</div>
            <div className="stars" aria-label={copy.stars}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={15} fill="currentColor" />)}</div>
            <blockquote>{person.quote}</blockquote>
            <div className="testimonial-person"><span className={"person-avatar avatar-" + person.color}>{person.initials}</span><span><strong>{person.name}</strong><small>{person.field}</small></span></div>
          </Reveal>)}
        </div>
        <p className="fiction-disclosure">{copy.disclosure}</p>
      </div>
    </section>
  );
}
