"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, Check, CircleHelp, CornerDownLeft, RotateCcw, Sparkles, WandSparkles } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale, SiteCopy } from "@/data/i18n";

function getAnswer(prompt: string, copy: SiteCopy["demo"]): string {
  const value = prompt.toLowerCase();
  if (value.includes("photosynthesis") || value.includes("quang hợp")) return copy.answers.photosynthesis;
  if (value.includes("quiz") || value.includes("kiểm tra") || value.includes("đố")) return copy.answers.quiz;
  if (value.includes("plan") || value.includes("schedule") || value.includes("kế hoạch")) return copy.answers.plan;
  if (value.includes("summar") || value.includes("notes") || value.includes("tóm tắt") || value.includes("ghi chú")) return copy.answers.summary;
  if (value.includes("simpler") || value.includes("đơn giản hơn")) return copy.answers.simpler;
  if (value.includes("example") || value.includes("ví dụ") || value.includes("useeffect") || value.includes("react")) return copy.answers.react;
  return copy.answers.fallback;
}

export function AIDemo({ locale, copy }: { locale: Locale; copy: SiteCopy["demo"] }) {
  const [input, setInput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "typing" | "ready">("idle");
  const [requestId, setRequestId] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (requestId === 0) return;
    const answer = getAnswer(prompt, copy);
    let interval: number | undefined;
    const delay = window.setTimeout(() => {
      if (reduceMotion) {
        setResponse(answer);
        setStatus("ready");
        return;
      }
      setStatus("typing");
      let cursor = 0;
      interval = window.setInterval(() => {
        cursor = Math.min(cursor + 3, answer.length);
        setResponse(answer.slice(0, cursor));
        if (cursor >= answer.length) {
          window.clearInterval(interval);
          setStatus("ready");
        }
      }, 12);
    }, reduceMotion ? 150 : 550);
    return () => {
      window.clearTimeout(delay);
      if (interval) window.clearInterval(interval);
    };
  }, [requestId, prompt, reduceMotion, copy]);

  function submit(nextPrompt: string) {
    const clean = nextPrompt.trim();
    if (!clean || status === "loading" || status === "typing") return;
    setPrompt(clean);
    setInput("");
    setResponse("");
    setStatus("loading");
    setRequestId((id) => id + 1);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(input);
  }

  function reset() {
    setRequestId(0);
    setPrompt("");
    setInput("");
    setResponse("");
    setStatus("idle");
  }

  return (
    <section className="section demo-section" id="demo">
      <div className="container demo-grid">
        <div className="demo-copy">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={<>{copy.title1} <em>{copy.title2}</em></>}
            description={copy.description}
          />
          <div className="demo-suggestions">
            <span>{copy.suggestion}</span>
            <div>
              {copy.prompts.map((item) => <button key={item} type="button" onClick={() => submit(item)} disabled={status === "loading" || status === "typing"}>{item}<ArrowRight size={15} aria-hidden="true" /></button>)}
            </div>
          </div>
          <div className="demo-disclaimer"><Check size={15} aria-hidden="true" /> {copy.disclaimer}</div>
        </div>
        <div className="demo-window">
          <div className="demo-window-top">
            <div><span className="demo-mark"><Sparkles size={17} /></span><strong>StudyFlow AI</strong><span className="demo-window-label">{copy.tutor}</span></div>
            <span className="demo-live"><i /> {copy.preview}</span>
          </div>
          <div className="demo-conversation">
            {status === "idle" ? (
              <div className="demo-empty">
                <span className="demo-empty-icon"><WandSparkles size={27} strokeWidth={1.7} /></span>
                <h3>{copy.emptyTitle}</h3>
                <p>{copy.emptyText}</p>
                <div className="demo-empty-guide"><CircleHelp size={16} /><span>{copy.emptyGuide}</span></div>
              </div>
            ) : (
              <div className="demo-messages">
                <div className="demo-user"><span>{copy.you}</span><p>{prompt}</p></div>
                <div className="demo-ai">
                  <span className="demo-ai-avatar"><Sparkles size={16} /></span>
                  <div>
                    <span className="demo-ai-name">StudyFlow AI</span>
                    {status === "loading" ? <div className="typing-indicator" aria-label={copy.thinking}><i /><i /><i /></div> : <p>{response}{status === "typing" && <span className="typing-cursor" aria-hidden="true" />}</p>}
                    {status === "ready" && (
                      <div className="demo-followups">
                        {copy.followups.map((label, index) => <button type="button" key={label} onClick={() => submit(copy.followupPrompts[index])}>{label}</button>)}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <span className="sr-only" role="status">
            {status === "loading" ? copy.thinking + "." : status === "ready" ? response : ""}
          </span>
          <div className="demo-bottom">
            {status !== "idle" && <button className="demo-reset" type="button" onClick={reset}><RotateCcw size={14} /> {copy.reset}</button>}
            <form className="demo-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="demo-question">{copy.ask}</label>
              <input id="demo-question" lang={locale} value={input} onChange={(event) => setInput(event.target.value)} placeholder={copy.placeholder} disabled={status === "loading" || status === "typing"} />
              <span className="input-enter" aria-hidden="true"><CornerDownLeft size={15} /></span>
              <button type="submit" aria-label={copy.send} disabled={!input.trim() || status === "loading" || status === "typing"}><ArrowRight size={19} /></button>
            </form>
            <small>{copy.caution}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
