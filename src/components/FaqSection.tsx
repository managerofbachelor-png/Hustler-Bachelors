import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { COMMUNITY_FAQS } from '../data/hustlerData.ts';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#0B0B11] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-[#FFC700]" />
            <span>CLARITY & HONESTY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">
            FREQUENTLY ASKED <span className="text-[#FFC700]">QUESTIONS</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know before executing your first trade or airdrop task.
          </p>
        </div>

        <div className="space-y-3">
          {COMMUNITY_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="premium-card overflow-hidden border-white/10 transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-[#FFC700]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
