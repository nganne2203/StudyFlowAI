"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, Check, CircleHelp, CornerDownLeft, RotateCcw, Sparkles, WandSparkles } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { demoPrompts } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

function getAnswer(prompt: string): string {
  const value = prompt.toLowerCase();
  if (value.includes("photosynthesis")) {
    return "Photosynthesis is how plants make food. They use sunlight to turn water and carbon dioxide into sugar for energy, and release oxygen along the way. Think of a leaf as a tiny solar-powered kitchen.";
  }
  if (value.includes("quiz")) {
    return "Let's try active recall. Question 1: What does a React effect let a component do after it renders? A) Change its props  B) Synchronize with something outside React  C) Skip rendering. Pick an answer, then explain why you chose it.";
  }
  if (value.includes("plan") || value.includes("schedule")) {
    return "Here's a gentle three-day plan: Day 1, review the core idea for 25 minutes. Day 2, make five practice questions and answer them without notes. Day 3, revisit anything you missed and teach the topic back in your own words.";
  }
  if (value.includes("summar") || value.includes("notes")) {
    return "Here's the short version: 1) Start with the main idea. 2) Keep only the facts that support it. 3) Add one example in your own words. In a full product, you could bring your notes here; this demo uses a sample response.";
  }
  if (value.includes("simpler")) {
    return "Imagine you finish setting up your desk, then remember a task you need to do. React renders the screen first; useEffect handles that extra task afterward. It's often used for things like fetching data or connecting to another system.";
  }
  if (value.includes("example") || value.includes("useeffect") || value.includes("react")) {
    return "useEffect tells React to do something after a component appears or updates. For example, a course page can load your saved notes after it renders. Think: show the page first, then do the extra task.";
  }
  return "This interactive preview has a small set of sample answers, so I can't explain every topic yet. Try one of the suggested prompts, or ask about React useEffect or photosynthesis to see how a clear, step-by-step answer could work.";
}

export function AIDemo() {
  const [input, setInput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "typing" | "ready">("idle");
  const [requestId, setRequestId] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (requestId === 0) return;
    const answer = getAnswer(prompt);
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
  }, [requestId, prompt, reduceMotion]);

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
            eyebrow="Interactive preview"
            title={<>Go ahead. Ask <em>the question.</em></>}
            description="Try a sample prompt and see how StudyFlow helps you get from a question to a clearer next step."
          />
          <div className="demo-suggestions">
            <span>NEED A STARTING POINT?</span>
            <div>
              {demoPrompts.map((item) => <button key={item} type="button" onClick={() => submit(item)} disabled={status === "loading" || status === "typing"}>{item}<ArrowRight size={15} aria-hidden="true" /></button>)}
            </div>
          </div>
          <div className="demo-disclaimer"><Check size={15} aria-hidden="true" /> Sample responses run locally. No AI service or account required.</div>
        </div>
        <div className="demo-window">
          <div className="demo-window-top">
            <div><span className="demo-mark"><Sparkles size={17} /></span><strong>StudyFlow AI</strong><span className="demo-window-label">Tutor</span></div>
            <span className="demo-live"><i /> Preview mode</span>
          </div>
          <div className="demo-conversation">
            {status === "idle" ? (
              <div className="demo-empty">
                <span className="demo-empty-icon"><WandSparkles size={27} strokeWidth={1.7} /></span>
                <h3>What would you like to learn today?</h3>
                <p>No question is too small. Start with a topic above or ask your own.</p>
                <div className="demo-empty-guide"><CircleHelp size={16} /><span>Try “Explain React useEffect simply”</span></div>
              </div>
            ) : (
              <div className="demo-messages">
                <div className="demo-user"><span>You</span><p>{prompt}</p></div>
                <div className="demo-ai">
                  <span className="demo-ai-avatar"><Sparkles size={16} /></span>
                  <div>
                    <span className="demo-ai-name">StudyFlow AI</span>
                    {status === "loading" ? <div className="typing-indicator" aria-label="StudyFlow is thinking"><i /><i /><i /></div> : <p>{response}{status === "typing" && <span className="typing-cursor" aria-hidden="true" />}</p>}
                    {status === "ready" && (
                      <div className="demo-followups">
                        <button type="button" onClick={() => submit("Give me an example of React useEffect")}>Give an example</button>
                        <button type="button" onClick={() => submit("Quiz me on this topic")}>Quiz me</button>
                        <button type="button" onClick={() => submit("Explain it even simpler")}>Explain simpler</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <span className="sr-only" role="status">
            {status === "loading" ? "StudyFlow is thinking." : status === "ready" ? response : ""}
          </span>
          <div className="demo-bottom">
            {status !== "idle" && <button className="demo-reset" type="button" onClick={reset}><RotateCcw size={14} /> Reset conversation</button>}
            <form className="demo-form" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="demo-question">Ask StudyFlow a question</label>
              <input id="demo-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask StudyFlow anything..." disabled={status === "loading" || status === "typing"} />
              <span className="input-enter" aria-hidden="true"><CornerDownLeft size={15} /></span>
              <button type="submit" aria-label="Send question" disabled={!input.trim() || status === "loading" || status === "typing"}><ArrowRight size={19} /></button>
            </form>
            <small>StudyFlow can make mistakes. Check important information with your course material.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
