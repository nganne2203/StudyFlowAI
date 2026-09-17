import { BookOpen, Code2, GraduationCap, FlaskConical, PenLine } from "lucide-react";

export function SocialProof() {
  return (
    <section className="social-proof" aria-label="Example study topics">
      <div className="container social-inner">
        <div className="social-label">Made for all the ways<br />you learn</div>
        <div className="subject-list">
          <span><Code2 size={18} /> Coding</span>
          <span><FlaskConical size={18} /> Science</span>
          <span><BookOpen size={18} /> Humanities</span>
          <span><PenLine size={18} /> Exam prep</span>
          <span><GraduationCap size={18} /> And beyond</span>
        </div>
        <small>Concept project · sample experience</small>
      </div>
    </section>
  );
}
