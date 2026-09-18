import { Sparkles } from "lucide-react";

export function Brand({ inverse = false, ariaLabel = "StudyFlow AI, back to top", locale }: { inverse?: boolean; ariaLabel?: string; locale?: "en" | "vi" }) {
  return (
    <a className={"brand" + (inverse ? " brand-inverse" : "")} href="#top" aria-label={locale === "vi" ? "StudyFlow AI, về đầu trang" : ariaLabel}>
      <span className="brand-mark" aria-hidden="true"><Sparkles size={18} strokeWidth={2.4} /></span>
      <span>studyflow<span className="brand-ai">.ai</span></span>
    </a>
  );
}
