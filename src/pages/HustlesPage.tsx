import { useState } from 'react';
import { Bot, Sparkles, Copy, Check, ExternalLink, Laptop, Terminal, Zap, ArrowRight, Flame } from 'lucide-react';
import { RouteState } from '../utils/navigation.ts';
import { SIDE_HUSTLE_VAULT, OFFICIAL_LINKS } from '../data/hustlerData.ts';

interface HustlesPageProps {
  subpage?: string;
  onNavigate: (route: RouteState) => void;
}

export function HustlesPage({ subpage, onNavigate }: HustlesPageProps) {
  const [activeHustleId, setActiveHustleId] = useState<string>(
    subpage || SIDE_HUSTLE_VAULT[0].id
  );
  const [copiedPromptIdx, setCopiedPromptIdx] = useState<number | null>(null);

  const activeHustle =
    SIDE_HUSTLE_VAULT.find((h) => h.id === activeHustleId) || SIDE_HUSTLE_VAULT[0];

  const handleCopyPrompt = (prompt: string, idx: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPromptIdx(idx);
    setTimeout(() => setCopiedPromptIdx(null), 2500);
  };

  return (
    <div className="space-y-12 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-700/40 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>AI CASHFLOW ARCHITECTURE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
            AI Side Hustle Blueprints
          </h1>
          <p className="text-zinc-300 text-sm max-w-2xl leading-relaxed font-normal">
            Weaponize modern LLMs and automations into recurring income streams. Battle-tested blueprints with zero physical overhead.
          </p>
        </div>

        <a
          href={OFFICIAL_LINKS.hustlerVault}
          target="_blank"
          rel="noopener noreferrer"
          className="crimson-btn-pill px-5 py-2.5 text-xs font-bold flex items-center gap-2 shrink-0"
        >
          <Zap className="w-4 h-4 text-white" />
          <span>Open HustlerVault App</span>
          <ExternalLink className="w-3.5 h-3.5 text-white" />
        </a>
      </div>

      {/* Hustle Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SIDE_HUSTLE_VAULT.map((hustle) => {
          const isSelected = hustle.id === activeHustle.id;

          return (
            <div
              key={hustle.id}
              onClick={() => onNavigate({ page: 'hustles', subpage: hustle.id })}
              className={`p-5 rounded-2xl cursor-pointer transition-all border shadow-lg ${
                isSelected
                  ? 'bg-gradient-to-br from-[#242424] to-[#151D18] border-red-500 shadow-red-950/40'
                  : 'bg-gradient-to-br from-[#1C1C1C] to-[#121212] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 font-bold border border-emerald-500/20">
                  {hustle.monthlyPotential}
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  {hustle.capitalNeeded}
                </span>
              </div>
              <h2 className="text-base font-black text-white mb-1 uppercase">
                {hustle.title}
              </h2>
              <p className="text-xs text-zinc-400 line-clamp-2 font-normal">
                {hustle.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      {/* Active Blueprint Deep Dive */}
      <div className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#101010] p-6 sm:p-10 border border-red-950/40 space-y-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#A31C18] text-white font-bold uppercase">
                COMPLETE BLUEPRINT
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Setup: <strong className="text-white">{activeHustle.setupTime}</strong>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase">
              {activeHustle.title}
            </h2>
            <p className="text-sm text-zinc-300 max-w-3xl leading-relaxed font-normal">
              {activeHustle.overview}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/50 border border-white/10 shrink-0 text-left lg:text-right">
            <span className="text-[10px] uppercase font-mono text-zinc-400 block font-bold">Monthly Target Potential</span>
            <span className="font-mono text-xl font-black text-red-400">{activeHustle.monthlyPotential}</span>
          </div>
        </div>

        {/* Free AI Tools Strip */}
        <div>
          <span className="text-xs font-mono font-bold uppercase text-red-400 block mb-2.5">
            REQUIRED FREE AI TOOLS:
          </span>
          <div className="flex flex-wrap gap-2">
            {activeHustle.toolsUsed.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-zinc-200 flex items-center gap-1.5"
              >
                <Laptop className="w-3.5 h-3.5 text-red-400" />
                <span>{tool}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold uppercase text-red-400 block">
            IMPLEMENTATION ROADMAP:
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeHustle.steps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="p-5 rounded-2xl bg-[#121212] border border-white/10 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-md bg-red-950/60 text-red-400 font-mono font-bold text-xs flex items-center justify-center border border-red-700/30">
                      {step.stepNumber}
                    </span>
                    <h3 className="font-bold text-sm text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {step.action}
                  </p>
                </div>

                {step.promptTemplate && (
                  <div className="p-3 rounded-lg bg-black/60 border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-red-400 uppercase font-bold flex items-center gap-1">
                        <Terminal className="w-3 h-3" />
                        <span>Ready Prompt</span>
                      </span>
                      <button
                        onClick={() => handleCopyPrompt(step.promptTemplate!, idx)}
                        className="text-[10px] font-mono text-zinc-400 hover:text-white flex items-center gap-1 bg-white/5 px-2 py-1 rounded cursor-pointer"
                      >
                        {copiedPromptIdx === idx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] font-mono text-zinc-400 italic line-clamp-3 font-normal">
                      "{step.promptTemplate}"
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip */}
        <div className="p-4 rounded-xl bg-red-950/30 border border-red-700/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div>
            <strong className="text-red-400 font-mono uppercase block mb-0.5">Monetization:</strong>
            <span className="text-zinc-200 font-normal">{activeHustle.monetization}</span>
          </div>
          <div className="bg-black/60 p-3 rounded-lg border border-white/10 shrink-0 max-w-sm">
            <strong className="text-emerald-400 font-mono uppercase block mb-0.5">💡 Insider Tip:</strong>
            <span className="text-zinc-300 font-normal">{activeHustle.proTip}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
