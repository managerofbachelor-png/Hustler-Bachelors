import { Zap, ShieldCheck, Gift, TrendingUp, ArrowRight, DollarSign, Award, Users } from 'lucide-react';

interface HeroProps {
  onOpenBrokerModal: () => void;
  onOpenAirdropSection: () => void;
}

export function Hero({ onOpenBrokerModal, onOpenAirdropSection }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFC700]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[320px] h-[320px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FFC700] animate-ping" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              ZERO EXCUSES • $0 CAPITAL AIRDROPS • PRO BROKER PERKS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6">
            ESCAPE THE <span className="text-slate-400 line-through">9-TO-5</span>.{' '}
            <br />
            BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC700] via-[#FBBF24] to-[#F59E0B]">
              UNSTOPPABLE CASHFLOW
            </span>.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            For individuals who refuse to settle. Master precision{' '}
            <strong className="text-white font-semibold">Forex & Crypto Trading</strong> with regulated brokers{' '}
            <span className="text-[#FFC700] font-semibold">(Exness & OneRoyal)</span>, claim{' '}
            <strong className="text-white font-semibold">100% Free Airdrops</strong>, and deploy high-leverage{' '}
            <strong className="text-white font-semibold">AI Money Tools</strong> — from absolute scratch.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenBrokerModal}
              className="w-full sm:w-auto gold-btn px-8 py-4 rounded-xl text-sm uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 group cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5 text-black" />
              <span>Claim Partner Broker Bonuses ($500)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#airdrops"
              onClick={onOpenAirdropSection}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm uppercase tracking-wider font-bold premium-btn text-white flex items-center justify-center gap-2 hover:border-[#FFC700]/50 transition-all cursor-pointer"
            >
              <Gift className="w-5 h-5 text-[#FFC700]" />
              <span>Explore Free Airdrop Radar ($0)</span>
            </a>
          </div>

          {/* Trust stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="premium-card p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[#FFC700] mb-1">
                <Users className="w-4 h-4" />
                <span className="font-mono text-xl sm:text-2xl font-black text-white">12,850+</span>
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Active Community Members
              </div>
            </div>

            <div className="premium-card p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
                <DollarSign className="w-4 h-4" />
                <span className="font-mono text-xl sm:text-2xl font-black text-white">$1.4M+</span>
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Verified Airdrop Claims
              </div>
            </div>

            <div className="premium-card p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-blue-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="font-mono text-xl sm:text-2xl font-black text-white">87.4%</span>
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Signal Win-Rate (1:2+ RR)
              </div>
            </div>

            <div className="premium-card p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[#FFC700] mb-1">
                <Award className="w-4 h-4" />
                <span className="font-mono text-xl sm:text-2xl font-black text-white">$0</span>
              </div>
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Required Upfront Capital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
