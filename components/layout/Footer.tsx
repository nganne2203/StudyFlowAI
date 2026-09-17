import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/ui/Brand";

const groups = [
  { title: "Product", links: [["Features", "#features"], ["AI Tutor", "#demo"], ["Study Planner", "#how-it-works"], ["Pricing", "#pricing"]] },
  { title: "Resources", links: [["Blog (demo)", "#final-cta"], ["Study Guides (demo)", "#how-it-works"], ["Help Center (demo)", "#faq"]] },
  { title: "Company", links: [["About", "#why-studyflow"], ["Contact (demo)", "#final-cta"], ["Careers (demo)", "#final-cta"]] },
  { title: "Legal", links: [["Privacy (demo)", "#faq"], ["Terms (demo)", "#faq"]] },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Brand />
          <p>A clearer way to learn, one question at a time.</p>
          <span className="footer-demo">An independent frontend concept project.</span>
        </div>
        <div className="footer-links">
          {groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 StudyFlow AI. Demo project.</span>
        <a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
