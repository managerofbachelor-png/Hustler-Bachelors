import { useState } from 'react';
import { BookOpen, Clock, ArrowRight, ShieldCheck, CheckCircle, X } from 'lucide-react';
import { FIELD_GUIDES, GuideManual } from '../data/hustlerData.ts';

export function AcademySection() {
  const [activeGuide, setActiveGuide] = useState<GuideManual | null>(null);

  return (
    <section id="academy" className="py-20 bg-[#0B0B11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            <span>THE BACHELOR'S FIELD MANUAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            FREE KNOWLEDGE <span className="text-[#FFC700]">VAULT</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Gurús charge $997 for generic trading courses. We believe core financial survival skills and security playbooks should be 100% accessible to every hustler.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FIELD_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="premium-card p-6 flex flex-col justify-between hover:border-[#FFC700]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 font-bold uppercase">
                    {guide.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-[#FFC700]" />
                    <span>{guide.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-black text-white uppercase tracking-wide mb-3 leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {guide.summary}
                </p>

                <div className="space-y-2 mb-6">
                  {guide.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FFC700] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveGuide(guide)}
                className="w-full py-2.5 px-4 text-xs font-mono font-bold premium-btn text-white hover:border-[#FFC700]/50 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Read Full Tactical Field Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFC700]" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal for full guide reading */}
        {activeGuide && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-title"
          >
            <div className="bg-[#0E0E15] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl">
              <button
                onClick={() => setActiveGuide(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg premium-btn"
                aria-label="Close guide dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#FFC700]/20 text-[#FFC700] font-bold uppercase">
                  {activeGuide.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeGuide.readTime}
                </span>
              </div>

              <h3 id="guide-title" className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-4">
                {activeGuide.title}
              </h3>

              <div className="prose prose-invert max-w-none space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
                <p className="text-base text-slate-200 font-medium">
                  {activeGuide.summary}
                </p>

                <div className="p-4 rounded-xl bg-[#13131E] border border-white/10 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFC700] block">
                    Core Tenets & Protocols:
                  </span>
                  {activeGuide.fullGuideContent.map((para, i) => (
                    <p key={i} className="text-xs sm:text-sm text-slate-300">
                      • {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveGuide(null)}
                  className="gold-btn px-6 py-2.5 rounded-lg text-xs uppercase font-bold tracking-wider"
                >
                  Understood & Saved
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
