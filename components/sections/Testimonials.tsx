import { Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="section testimonials-section" id="stories">
      <div className="container">
        <Reveal className="testimonials-heading"><SectionHeading eyebrow="Student stories" title={<>A better rhythm for <em>every kind of learner.</em></>} description="A few imagined moments from the StudyFlow experience." centered /></Reveal>
        <div className="testimonials-grid">
          {testimonials.map((person, index) => <Reveal className="testimonial-card" key={person.name} delay={index * 0.06}>
            <div className="quote-mark">“</div>
            <div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={15} fill="currentColor" />)}</div>
            <blockquote>{person.quote}</blockquote>
            <div className="testimonial-person"><span className={"person-avatar avatar-" + person.color}>{person.initials}</span><span><strong>{person.name}</strong><small>{person.field}</small></span></div>
          </Reveal>)}
        </div>
        <p className="fiction-disclosure">Fictional student stories created for this demo.</p>
      </div>
    </section>
  );
}
