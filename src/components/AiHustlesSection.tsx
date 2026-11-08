import { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Flame, 
  Laptop, 
  Terminal 
} from 'lucide-react';
import { SIDE_HUSTLE_VAULT, SideHustleBlueprint } from '../data/hustlerData.ts';

export function AiHustlesSection() {
  const [activeHustleId, setActiveHustleId] = useState<string>(SIDE_HUSTLE_VAULT[0].id);
  const [copiedPromptIdx, setCopiedPromptIdx] = useState<number | null>(null);

  const activeHustle = SIDE_HUSTLE_VAULT.find((h) => h.id === activeHustleId) || SIDE_HUSTLE_VAULT[0];

  const handleCopyPrompt = (prompt: string, idx: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPromptIdx(idx);
    setTimeout(() => setCopiedPromptIdx(null), 2500);
  };

  return (
    <section id="hustles" className="py-20 bg-[#0B0B11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Bot className="w-4 h-4" />
            <span>HIGH-LEVERAGE CASHFLOW SYSTEMS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            AI SIDE HUSTLE <span className="text-[#FFC700]">VAULT</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Stop scrolling TikTok for entertainment. Learn how to weaponize generative AI tools to build automated digital businesses with $0 upfront investment.
          </p>
        </div>

        {/* Hustle Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {SIDE_HUSTLE_VAULT.map((hustle) => {
            const isSelected = hustle.id === activeHustle.id;

            return (
              <div
                key={hustle.id}
                onClick={() => setActiveHustleId(hustle.id)}
                className={`p-5 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#13131E] border-[#FFC700] shadow-xl shadow-[#FFC700]/15'
                    : 'premium-card hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">
                    {hustle.monthlyPotential}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {hustle.capitalNeeded}
                  </span>
                </div>
                <h3 className="font-display text-lg font-black text-white uppercase tracking-wide mb-1">
                  {hustle.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {hustle.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Hustle Detailed Blueprint */}
        <div className="premium-card p-6 sm:p-10 border-[#FFC700]/30 relative">
          {/* Top Banner Meta */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#FFC700] text-black font-extrabold uppercase">
                  MASTER BLUEPRINT
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Setup Time: <strong className="text-white">{activeHustle.setupTime}</strong>
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-wide mb-2">
                {activeHustle.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                {activeHustle.overview}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
              <div className="p-3 rounded-lg bg-[#13131E] border border-white/10 w-full sm:w-auto text-left lg:text-right">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Estimated Earning Potential</span>
                <span className="font-mono text-xl font-black text-[#FFC700]">{activeHustle.monthlyPotential}</span>
              </div>
            </div>
          </div>

          {/* Tools Required Pill Strip */}
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
              FREE AI TOOLS REQUIRED:
            </span>
            <div className="flex flex-wrap gap-2">
              {activeHustle.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#13131E] border border-white/10 text-xs font-mono font-semibold text-slate-200 flex items-center gap-1.5"
                >
                  <Laptop className="w-3.5 h-3.5 text-[#FFC700]" />
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Step-by-Step Implementation Flow */}
          <div className="space-y-6 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
              EXECUTION ROADMAP:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeHustle.steps.map((step, idx) => (
                <div
                  key={step.stepNumber}
                  className="p-4 rounded-xl bg-[#0E0E15] border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-md bg-[#FFC700]/20 text-[#FFC700] font-mono font-black text-xs flex items-center justify-center">
                        {step.stepNumber}
                      </span>
                      <h4 className="font-display font-bold text-base text-white uppercase tracking-wide">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {step.action}
                    </p>
                  </div>

                  {step.promptTemplate && (
                    <div className="mt-2 p-3 rounded-lg bg-[#13131E] border border-white/5">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono font-bold text-[#FFC700] uppercase flex items-center gap-1">
                          <Terminal className="w-3 h-3" />
                          <span>Ready AI Prompt</span>
                        </span>
                        <button
                          onClick={() => handleCopyPrompt(step.promptTemplate!, idx)}
                          className="text-[10px] font-mono text-slate-400 hover:text-white flex items-center gap-1 bg-white/5 px-2 py-1 rounded"
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
                      <p className="text-[11px] font-mono text-slate-400 line-clamp-3 italic">
                        "{step.promptTemplate}"
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Monetization & Pro Tip Footer */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-[#FFC700]/5 to-transparent border border-[#FFC700]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs">
              <strong className="text-[#FFC700] uppercase font-mono block mb-1">
                Monetization Architecture:
              </strong>
              <span className="text-slate-300">{activeHustle.monetization}</span>
            </div>
            <div className="text-xs bg-black/40 p-3 rounded-lg border border-white/10 max-w-md shrink-0">
              <strong className="text-emerald-400 font-mono block mb-0.5">💡 Insider Pro-Tip:</strong>
              <span className="text-slate-400">{activeHustle.proTip}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
