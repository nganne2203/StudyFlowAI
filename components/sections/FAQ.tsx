"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SiteCopy } from "@/data/i18n";

export function FAQ({ copy }: { copy: SiteCopy["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <SectionHeading eyebrow={copy.eyebrow} title={<>{copy.title1} <em>{copy.title2}</em></>} description={copy.description} />
          <a className="text-link" href="#demo">{copy.link}</a>
        </div>
        <div className="faq-list">
          {copy.items.map((item, index) => {
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
