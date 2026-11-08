import { useState } from 'react';
import { BookOpen, Clock, ArrowLeft, CheckCircle2, ChevronRight, Flame } from 'lucide-react';
import { RouteState } from '../utils/navigation.ts';
import { FIELD_GUIDES } from '../data/hustlerData.ts';

interface AcademyPageProps {
  subpage?: string;
  onNavigate: (route: RouteState) => void;
}

export function AcademyPage({ subpage, onNavigate }: AcademyPageProps) {
  const selectedGuide = FIELD_GUIDES.find((g) => g.id === subpage);

  if (selectedGuide) {
    return (
      <div className="space-y-8 py-8 max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate({ page: 'academy' })}
          className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-red-400 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Field Guides</span>
        </button>

        <div className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#101010] p-6 sm:p-10 border border-red-950/40 space-y-6 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 rounded bg-red-950/60 text-red-300 font-bold border border-red-800/40 uppercase">
              {selectedGuide.category}
            </span>
            <span className="text-zinc-400 flex items-center gap-1 font-semibold">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              {selectedGuide.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase">
            {selectedGuide.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl font-normal">
            {selectedGuide.summary}
          </p>

          <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
            <span className="text-xs font-mono text-red-400 uppercase font-bold block">
              TACTICAL SUMMARY:
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {selectedGuide.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span className="font-normal">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <h2 className="text-base font-bold text-white uppercase">Core Action Protocols:</h2>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {selectedGuide.fullGuideContent.map((point, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#121212] border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-red-950/60 text-red-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-red-800/40">
                    {i + 1}
                  </span>
                  <span className="font-normal">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-8 max-w-6xl mx-auto">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-700/40 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
          <BookOpen className="w-3.5 h-3.5" />
          <span>TACTICAL FIELD MANUAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
          The Bachelor's Field Guides
        </h1>
        <p className="text-zinc-300 text-sm max-w-2xl leading-relaxed font-normal">
          Zero guru fluff. Straightforward, highly actionable operational manuals on wallet security, prop firm risk management, and sybil resistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FIELD_GUIDES.map((guide) => (
          <div
            key={guide.id}
            className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#101010] border border-white/10 p-6 flex flex-col justify-between hover:border-red-500/40 transition-all space-y-6 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300 font-bold uppercase">
                  {guide.category}
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-red-400" />
                  {guide.readTime}
                </span>
              </div>

              <h2 className="text-lg font-black text-white mb-2 leading-snug uppercase">
                {guide.title}
              </h2>

              <p className="text-xs text-zinc-300 leading-relaxed mb-4 font-normal">
                {guide.summary}
              </p>

              <div className="space-y-1.5 text-[11px] text-zinc-400 font-normal">
                {guide.highlights.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-red-400">•</span>
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigate({ page: 'academy', subpage: guide.id })}
              className="w-full carbon-btn-outline py-2.5 text-xs font-bold justify-center hover:text-white"
            >
              <span>Read Full Guide</span>
              <ChevronRight className="w-3.5 h-3.5 text-red-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
