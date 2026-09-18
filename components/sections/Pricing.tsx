import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteCopy } from "@/data/i18n";

export function Pricing({ copy }: { copy: SiteCopy["pricing"] }) {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <Reveal className="pricing-heading"><SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title1} <em>{copy.title2}</em></>} description={copy.description} centered /></Reveal>
        <div className="pricing-grid">
          {copy.plans.map((plan, index) => <Reveal className={"pricing-card" + (plan.featured ? " featured" : "")} key={plan.name} delay={index * 0.06}>
            {plan.featured && <span className="popular-badge">{copy.popular}</span>}
            <div className="plan-name">{plan.name}</div>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-price"><strong>{plan.price}</strong><span>{copy.month}</span></div>
            <ButtonLink href="#demo" variant={plan.featured ? "primary" : "secondary"} arrow>{plan.cta}</ButtonLink>
            <div className="plan-divider" />
            <span className="plan-includes">{copy.includes}</span>
            <ul>{plan.features.map((feature) => <li key={feature}><span><Check size={14} /></span>{feature}</li>)}</ul>
          </Reveal>)}
        </div>
        <p className="pricing-note">{copy.note}</p>
      </div>
    </section>
  );
}
