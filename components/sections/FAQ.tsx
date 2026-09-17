"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <SectionHeading eyebrow="Good to know" title={<>A few good <em>questions.</em></>} description="Here are the details behind the idea. Still curious? Try the interactive preview above." />
          <a className="text-link" href="#demo">Explore the demo →</a>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div className={"faq-item" + (open ? " open" : "")} key={item.question}>
                <h3>
                  <button type="button" id={"faq-trigger-" + index} aria-expanded={open} aria-controls={"faq-panel-" + index} onClick={() => setOpenIndex(open ? null : index)}>
                    <span>{item.question}</span><span className="faq-control">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
                  </button>
                </h3>
                <div id={"faq-panel-" + index} role="region" aria-labelledby={"faq-trigger-" + index} hidden={!open}><p>{item.answer}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
