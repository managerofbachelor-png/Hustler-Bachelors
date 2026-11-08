import { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  Copy, 
  Check, 
  Star, 
  Zap, 
  Award, 
  ArrowUpRight,
  Sparkles,
  Info
} from 'lucide-react';
import { BROKER_PARTNERS, BrokerPartner } from '../data/hustlerData.ts';

interface BrokerSectionProps {
  onSelectBroker?: (broker: BrokerPartner) => void;
}

export function BrokerSection({ onSelectBroker }: BrokerSectionProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="brokers" className="py-20 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/30 text-[#FFC700] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>OFFICIALLY VETTED PARTNER BROKERS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            TRADE WITH <span className="text-[#FFC700]">ZERO COMPROMISE</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Never risk money with unlicenced bucket shops. We only partner with tier-1 multi-regulated brokers offering true ECN execution, raw 0.0 pip spreads, and instant zero-hassle withdrawals.
          </p>
        </div>

        {/* Broker Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {BROKER_PARTNERS.map((broker) => {
            const isCopied = copiedCode === broker.referralCode;

            return (
              <div
                key={broker.id}
                className="premium-card p-6 sm:p-8 flex flex-col justify-between relative group hover:border-[#FFC700]/40"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={broker.logo}
                        alt={`${broker.name} Logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-black font-display text-white uppercase tracking-wide">
                          {broker.name}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFC700]/15 text-[#FFC700] font-bold border border-[#FFC700]/30">
                          {broker.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono mt-0.5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="font-bold text-white ml-1">{broker.rating}</span>
                        <span className="text-slate-400">({broker.reviewsCount.toLocaleString()} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block text-right">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Min Deposit</span>
                    <span className="text-lg font-mono font-black text-emerald-400">{broker.minDeposit}</span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {broker.tagline}
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-3 gap-2.5 mb-6 text-center">
                  <div className="bg-[#13131E] border border-white/10 rounded-lg p-2.5">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Spreads From</span>
                    <span className="font-mono font-bold text-sm text-[#FFC700]">{broker.spreadFrom}</span>
                  </div>
                  <div className="bg-[#13131E] border border-white/10 rounded-lg p-2.5">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Max Leverage</span>
                    <span className="font-mono font-bold text-sm text-white">{broker.leverage}</span>
                  </div>
                  <div className="bg-[#13131E] border border-white/10 rounded-lg p-2.5">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Regulation</span>
                    <span className="font-mono font-bold text-xs text-blue-400 truncate block">
                      {broker.licenses[0]}
                    </span>
                  </div>
                </div>

                {/* Perks Checklist */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    EXCLUSIVE HUSTLER BENEFITS:
                  </span>
                  {broker.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus highlight box */}
                <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-[#FFC700]/10 via-amber-500/5 to-transparent border border-[#FFC700]/25 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#FFC700] shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-[#FFC700] uppercase font-mono">Special Perk: </span>
                    <span className="text-slate-200">{broker.depositBonus}</span>
                  </div>
                </div>

                {/* Referral Code & Action Button */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-full sm:w-auto flex-1 flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#13131E] border border-white/10">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-mono text-slate-400">Partner Promo Code</span>
                      <span className="font-mono font-extrabold text-sm text-[#FFC700]">{broker.referralCode}</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(broker.referralCode)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                      title="Copy promo code"
                      aria-label={`Copy ${broker.name} promo code`}
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <a
                    href={broker.referralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto gold-btn px-6 py-2.5 text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>Open Account</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Guarantee note */}
        <div className="premium-card-static p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-emerald-500/20 bg-emerald-950/10">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                100% Negative Balance Protection Guaranteed
              </h4>
              <p className="text-xs text-slate-400">
                You can never lose more than your initial deposit. Funds are held in segregated Tier-1 banking accounts.
              </p>
            </div>
          </div>
          <a
            href="#calculators"
            className="text-xs font-mono font-bold text-[#FFC700] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Calculate Lot Size First</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
