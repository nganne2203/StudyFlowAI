import { Sparkles } from "lucide-react";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={"brand" + (inverse ? " brand-inverse" : "")} href="#top" aria-label="StudyFlow AI, back to top">
      <span className="brand-mark" aria-hidden="true"><Sparkles size={18} strokeWidth={2.4} /></span>
      <span>studyflow<span className="brand-ai">.ai</span></span>
    </a>
  );
}
