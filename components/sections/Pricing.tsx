import { Check } from "lucide-react";
import { plans } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <Reveal className="pricing-heading"><SectionHeading eyebrow="Simple pricing" title={<>A plan for the way <em>you study.</em></>} description="Start with the essentials, then choose more support when you need it." centered /></Reveal>
        <div className="pricing-grid">
          {plans.map((plan, index) => <Reveal className={"pricing-card" + (plan.featured ? " featured" : "")} key={plan.name} delay={index * 0.06}>
            {plan.featured && <span className="popular-badge">✦ MOST POPULAR</span>}
            <div className="plan-name">{plan.name}</div>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-price"><strong>{plan.price}</strong><span>/ month</span></div>
            <ButtonLink href="#demo" variant={plan.featured ? "primary" : "secondary"} arrow>{plan.cta}</ButtonLink>
            <div className="plan-divider" />
            <span className="plan-includes">WHAT&apos;S INCLUDED</span>
            <ul>{plan.features.map((feature) => <li key={feature}><span><Check size={14} /></span>{feature}</li>)}</ul>
          </Reveal>)}
        </div>
        <p className="pricing-note">Illustrative pricing for a concept product. No checkout or subscription is available in this demo.</p>
      </div>
    </section>
  );
}
