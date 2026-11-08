import { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  Copy, 
  Check, 
  Star, 
  Zap, 
  Sparkles, 
  ArrowLeft,
  ChevronRight,
  Info,
  DollarSign,
  Clock,
  Layers,
  Flame
} from 'lucide-react';
import { RouteState } from '../utils/navigation.ts';
import { BROKER_PARTNERS, OFFICIAL_LINKS } from '../data/hustlerData.ts';

interface BrokersPageProps {
  subpage?: string;
  onNavigate: (route: RouteState) => void;
}

export function BrokersPage({ subpage, onNavigate }: BrokersPageProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const selectedBroker = BROKER_PARTNERS.find((b) => b.id === subpage);

  // If a specific broker subpage is chosen (exness or oneroyal)
  if (selectedBroker) {
    const isCopied = copiedCode === selectedBroker.referralCode;

    return (
      <div className="space-y-8 py-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate({ page: 'brokers' })}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-red-400 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Brokers</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate({ page: 'brokers', subpage: selectedBroker.id === 'exness' ? 'oneroyal' : 'exness' })}
              className="text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
            >
              Switch to {selectedBroker.id === 'exness' ? 'OneRoyal' : 'Exness'} →
            </button>
          </div>
        </div>

        {/* Dedicated Broker Deep-Dive Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#111111] border border-red-950/40 p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#252525] border border-white/10 p-2.5 flex items-center justify-center shrink-0">
                <img src={selectedBroker.logo} alt={selectedBroker.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-white">{selectedBroker.name}</h1>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-300 font-bold border border-red-800/40 uppercase">
                    {selectedBroker.badge}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 mt-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-white">{selectedBroker.rating}</span>
                  <span className="text-zinc-400">({selectedBroker.reviewsCount.toLocaleString()} verified traders)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <a
                href={selectedBroker.referralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crimson-btn-pill px-6 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>Register with VIP Partner Link</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
              <span className="text-[11px] font-mono text-zinc-400">Official Partner ID: {selectedBroker.referralCode}</span>
            </div>
          </div>

          {/* Tagline & Core Offer */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Platform Overview</h2>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-3xl font-normal">
              {selectedBroker.tagline}. Designed for scalpers and algorithmic traders who require 0.0 pip raw spreads, zero overnight fee swaps on gold, and negative balance protection.
            </p>
          </div>

          {/* Key Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5">
              <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">Spreads From</span>
              <span className="font-mono text-base font-bold text-red-400">{selectedBroker.spreadFrom}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5">
              <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">Max Leverage</span>
              <span className="font-mono text-base font-bold text-white">{selectedBroker.leverage}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5">
              <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">Minimum Deposit</span>
              <span className="font-mono text-base font-bold text-emerald-400">{selectedBroker.minDeposit}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5">
              <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">Licenses</span>
              <span className="font-mono text-xs font-bold text-sky-400 truncate block">{selectedBroker.licenses.join(', ')}</span>
            </div>
          </div>

          {/* Special Bonus Box */}
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-700/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Flame className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <strong className="text-white text-xs sm:text-sm block uppercase font-mono">Special Partner Benefit:</strong>
                <span className="text-zinc-300 text-xs font-normal">{selectedBroker.depositBonus}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg border border-white/10 text-xs font-mono">
              <span className="text-zinc-400">Partner Code:</span>
              <span className="text-red-400 font-bold">{selectedBroker.referralCode}</span>
              <button
                onClick={() => handleCopyCode(selectedBroker.referralCode)}
                className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                title="Copy code"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Account Types Breakdown */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase">Available Account Tiers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {selectedBroker.accountTypes.map((acc, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#121212] border border-white/5 space-y-2">
                  <h4 className="font-bold text-white text-sm">{acc.type}</h4>
                  <div className="text-xs font-mono space-y-1 text-zinc-300">
                    <div>Spread: <span className="text-red-400">{acc.spread}</span></div>
                    <div>Commission: <span className="text-zinc-200">{acc.commission}</span></div>
                    <div>Min Deposit: <span className="text-emerald-400">{acc.minDeposit}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Setup Guide */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase">Step-by-Step Registration Guide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedBroker.setupGuide.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-[#121212] border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold">
                    <span>Step {step.step}:</span>
                    <span className="text-white">{step.title}</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    {step.instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-400 font-normal">
              Need assistance setting up your {selectedBroker.name} account? Reach out to Tahmid directly on WhatsApp (+880 1904-771432).
            </p>
            <a
              href={selectedBroker.referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="crimson-btn-pill px-6 py-2.5 text-xs font-bold flex items-center gap-1.5 shrink-0"
            >
              <span>Go to {selectedBroker.name} Registration</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // General Brokers Hub Overview
  return (
    <div className="space-y-12 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block">
          OFFICIAL BROKER PARTNERS • BUILT DIFFERENTLY
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
          Vetted Trading Infrastructure
        </h1>
        <p className="text-zinc-300 text-sm max-w-3xl leading-relaxed font-normal">
          Never risk capital on unregulated platforms. Tahmid has officially partnered with <strong className="text-white">Exness</strong> and <strong className="text-white">OneRoyal</strong> to provide our community with true raw spreads, instant withdrawals, zero overnight swaps on gold, and up to a 100% deposit match bonus.
        </p>
      </div>

      {/* Navigation Sub-Pills */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-4">
        <button
          onClick={() => onNavigate({ page: 'brokers' })}
          className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-red-950/60 text-red-300 border border-red-700/40 cursor-pointer"
        >
          All Partners
        </button>
        <button
          onClick={() => onNavigate({ page: 'brokers', subpage: 'exness' })}
          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer"
        >
          Exness Deep-Dive
        </button>
        <button
          onClick={() => onNavigate({ page: 'brokers', subpage: 'oneroyal' })}
          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 cursor-pointer"
        >
          OneRoyal 100% Bonus Deep-Dive
        </button>
      </div>

      {/* Broker Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {BROKER_PARTNERS.map((broker) => {
          const isCopied = copiedCode === broker.referralCode;

          return (
            <div
              key={broker.id}
              className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#111111] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/50 transition-all space-y-6 shadow-2xl"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-[#252525] border border-white/10 p-2 flex items-center justify-center shrink-0">
                      <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-black text-white">{broker.name}</h2>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-300 font-bold border border-red-800/40 uppercase">
                          {broker.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-red-400 font-mono mt-0.5">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="font-bold text-white">{broker.rating}</span>
                        <span className="text-zinc-400">({broker.reviewsCount.toLocaleString()})</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/20">
                    Min {broker.minDeposit}
                  </span>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                  {broker.tagline}
                </p>

                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/50 border border-white/5 text-center mb-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase block">Raw Spread</span>
                    <strong className="text-red-400">{broker.spreadFrom}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase block">Leverage</span>
                    <strong className="text-white">{broker.leverage}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase block">License</span>
                    <strong className="text-sky-400 truncate block">{broker.licenses[0]}</strong>
                  </div>
                </div>

                <div className="space-y-1.5 mb-4 text-xs text-zinc-300">
                  <span className="text-[11px] font-mono font-bold uppercase text-red-400 block mb-1">
                    Hustler Community Perks:
                  </span>
                  {broker.perks.slice(0, 3).map((perk, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-normal">{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-red-950/30 border border-red-700/30 text-xs text-red-200 mb-4">
                  <strong className="text-red-400 font-mono uppercase">Partner Bonus: </strong> {broker.depositBonus}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-[9px] text-zinc-400 uppercase block">Official Promo Code</span>
                    <span className="text-red-400 font-bold">{broker.referralCode}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(broker.referralCode)}
                    className="p-1.5 text-zinc-400 hover:text-white rounded bg-white/5 cursor-pointer"
                    title="Copy code"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onNavigate({ page: 'brokers', subpage: broker.id })}
                    className="carbon-btn-outline py-2.5 text-xs font-bold justify-center"
                  >
                    Read Guide & Specs
                  </button>
                  <a
                    href={broker.referralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="crimson-btn-pill py-2.5 text-xs font-bold justify-center"
                  >
                    <span>Register Now</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
