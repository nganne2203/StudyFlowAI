import { BookOpen, Code2, GraduationCap, FlaskConical, PenLine } from "lucide-react";
import type { SiteCopy } from "@/data/i18n";

export function SocialProof({ copy }: { copy: SiteCopy["social"] }) {
  return (
    <section className="social-proof" aria-label={copy.aria}>
      <div className="container social-inner">
        <div className="social-label">{copy.lead1}<br />{copy.lead2}</div>
        <div className="subject-list">
          <span><Code2 size={18} /> {copy.subjects[0]}</span>
          <span><FlaskConical size={18} /> {copy.subjects[1]}</span>
          <span><BookOpen size={18} /> {copy.subjects[2]}</span>
          <span><PenLine size={18} /> {copy.subjects[3]}</span>
          <span><GraduationCap size={18} /> {copy.subjects[4]}</span>
        </div>
        <small>{copy.foot}</small>
      </div>
    </section>
  );
}
