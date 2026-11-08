import { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  TrendingUp, 
  Gift, 
  Wrench, 
  Play, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  PieChart,
  Shield,
  Briefcase,
  Users,
  Award,
  DollarSign,
  Zap,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { RouteState } from '../utils/navigation.ts';
import { 
  OFFICIAL_LINKS, 
  BROKER_PARTNERS 
} from '../data/hustlerData.ts';
import { ProfilesShowcase } from '../components/ProfilesShowcase.tsx';
import { MotionDepthSection, TiltCard } from '../components/MotionDepthSection.tsx';

interface HomePageProps {
  onNavigate: (route: RouteState) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [timeRange, setTimeRange] = useState('Last 12 Months');

  const testimonials = [
    {
      quote: "Hustler Bachelors gave us clarity, precision risk calculation, and a mathematical plan that actually works. We finally feel in control of our financial trajectory.",
      author: "James T. — Forex & Gold Trader",
      profileLink: OFFICIAL_LINKS.telegramSignals,
      profileLabel: "Bachelor Traders VIP",
    },
    {
      quote: "Tahmid's zero-capital airdrop guides on Monad and Berachain are unmatched. I claimed my first major four-figure allocation without risking a dollar of my savings.",
      author: "Rafiq A. — Web3 Explorer",
      profileLink: OFFICIAL_LINKS.telegramAirdrops,
      profileLabel: "Bachelor Hustle Club",
    },
    {
      quote: "Bachelor Tahmid shows the raw real hustle in Dhaka, while Hustler Bachelors teaches the financial engine to escape the grind. The most authentic creator online.",
      author: "Tanvir K. — Community Member",
      profileLink: OFFICIAL_LINKS.bachelorTahmid,
      profileLabel: "Bachelor Tahmid Fan",
    },
  ];

  return (
    <div className="w-full bg-[#171717] text-zinc-100 overflow-hidden">
      {/* 1. HERO SECTION: Powerful Automotive "Built Differently" Theme with 3D Depth */}
      <MotionDepthSection depthIntensity="deep">
        <section className="relative min-h-[720px] lg:min-h-[800px] pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#171717] via-[#0E1511] to-[#171717] overflow-hidden text-white border-b border-red-950/30">
          {/* Background Mountain Photo with Forest Green & Charcoal Blend */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity scale-105 pointer-events-none"
            style={{ backgroundImage: `url('/assets/mountain_wealth_hero_1794122253031.jpg')` }}
          />
          {/* Deep Forest Green Vignette & Crimson Glows */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/90 via-[#06110C]/80 to-[#171717] pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#A31C18]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#06110C] rounded-full blur-[120px] pointer-events-none" />

          {/* Perspective grid overlay */}
          <div className="absolute inset-0 automotive-grid-bg opacity-30 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Hero Column */}
              <div className="lg:col-span-7 space-y-7">
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-700/40 text-xs font-mono font-bold tracking-widest text-red-400 uppercase shadow-sm">
                  <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                  <span>BUILT DIFFERENTLY • NO LIMITS</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-[66px] font-black tracking-tight text-white leading-[1.06] uppercase">
                  Precision Edge. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-600">
                    Sovereign Wealth.
                  </span> <br />
                  <span>Unfiltered Power.</span>
                </h1>

                {/* Subtitle - Clamped width to prevent stretching */}
                <p className="text-zinc-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                  High-leverage forex execution, zero-capital crypto farming, and automated digital blueprints designed to break you out of the average — guided by Tahmid.
                </p>

                {/* Dual Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={OFFICIAL_LINKS.contactWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="crimson-btn-pill text-sm font-bold tracking-wide cursor-pointer"
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={OFFICIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carbon-btn-outline text-sm font-semibold tracking-wide cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white text-white" />
                    <span>Watch YouTube Breakdown</span>
                  </a>
                </div>

                {/* Three Trust Badges Below */}
                <div className="grid grid-cols-3 gap-3 pt-8 border-t border-white/10 max-w-lg text-zinc-300">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-semibold leading-tight">Institutional Edge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-semibold leading-tight">Zero Gatekeeping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-semibold leading-tight">12,000+ Community</span>
                  </div>
                </div>
              </div>

              {/* Right Hero Dashboard Widget with 3D Interactive Tilt */}
              <div className="lg:col-span-5 relative">
                <TiltCard className="automotive-glass-card p-6 sm:p-7 relative z-10">
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-mono text-zinc-400 block mb-0.5 uppercase tracking-wider">Total Portfolio Value</span>
                      <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                        <span>$482,230</span>
                        <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                          +12.4%
                        </span>
                      </div>
                      <div className="text-xs font-mono text-zinc-400 mt-1">
                        Live Alpha & Yield Accumulation
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-1">
                      <span>{timeRange}</span>
                      <span className="text-[10px]">▾</span>
                    </div>
                  </div>

                  {/* Glowing Smooth Curve SVG Chart (Jan - Dec) in Crimson Glow */}
                  <div className="my-5 relative">
                    <svg className="w-full h-32 overflow-visible" viewBox="0 0 400 120">
                      <defs>
                        <linearGradient id="automotiveChartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#A31C18" stopOpacity="0.5" />
                          <stop offset="70%" stopColor="#06110C" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#171717" stopOpacity="0.0" />
                        </linearGradient>
                        <filter id="crimsonGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#EF4444" floodOpacity="0.7"/>
                        </filter>
                      </defs>
                      {/* Shaded Area */}
                      <path
                        d="M 10 90 Q 60 70, 110 85 T 210 50 T 310 40 T 390 15 L 390 120 L 10 120 Z"
                        fill="url(#automotiveChartGradient)"
                      />
                      {/* Glowing Crimson Line */}
                      <path
                        d="M 10 90 Q 60 70, 110 85 T 210 50 T 310 40 T 390 15"
                        fill="none"
                        stroke="#DC2626"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#crimsonGlow)"
                      />
                      {/* Point Highlight */}
                      <circle cx="390" cy="15" r="5" fill="#FFFFFF" stroke="#DC2626" strokeWidth="3" />
                    </svg>

                    {/* Monthly Labels */}
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-2 px-1">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span>Oct</span>
                      <span>Nov</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  {/* 3 Metric Sub-Pills in Row */}
                  <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10 text-xs">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-red-400 font-bold mb-0.5 text-[11px] font-mono">Wealth Growth</div>
                      <div className="font-mono font-black text-white text-sm">+12.4%</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-red-400 font-bold mb-0.5 text-[11px] font-mono">Diversification</div>
                      <div className="font-black text-white text-sm">Aggressive</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-red-400 font-bold mb-0.5 text-[11px] font-mono">Risk Level</div>
                      <div className="font-black text-white text-sm">1% Rule</div>
                    </div>
                  </div>
                </TiltCard>

                {/* Elegant Script Signature Accent in Crimson */}
                <div className="text-right mt-3 pr-4">
                  <span className="font-handwriting text-2xl sm:text-3xl text-red-400/90 tracking-wide select-none">
                    Built Differently.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionDepthSection>

      {/* 2. OUR PILLARS / 5 HIGH-CONTRAST SERVICE CARDS */}
      <MotionDepthSection depthIntensity="normal">
        <section className="bg-[#141414] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 block mb-2">
                  OUR CAPABILITIES & PILLARS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  Engineered Execution for <br className="hidden sm:inline" />
                  Independent Wealth.
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                  From zero-latency forex execution with Exness & OneRoyal to systematic $0 crypto airdrop farming, discover the exact tools built for results.
                </p>
                <button
                  onClick={() => onNavigate({ page: 'brokers' })}
                  className="px-4 py-2 rounded-full border border-red-800/40 bg-red-950/20 text-xs font-bold text-red-300 hover:border-red-500 hover:text-white transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>Explore Brokers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 5 Automotive Style Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {/* Card 1: Investment Planning */}
              <TiltCard
                onClick={() => onNavigate({ page: 'brokers' })}
                className="automotive-service-card cursor-pointer group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-red-600/15 border border-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    Forex & Commodities
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                    0.0 pip raw spreads and 1:unlimited leverage via Exness & OneRoyal.
                  </p>
                </div>
                <div className="circle-action-btn">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </TiltCard>

              {/* Card 2: Airdrop Harvesting */}
              <TiltCard
                onClick={() => onNavigate({ page: 'airdrops' })}
                className="automotive-service-card cursor-pointer group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-red-600/15 border border-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    Airdrop Harvesting
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                    Earn four-figure tokens through verified testnet farming with $0 upfront capital.
                  </p>
                </div>
                <div className="circle-action-btn">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </TiltCard>

              {/* Card 3: Wealth Protection */}
              <TiltCard
                onClick={() => onNavigate({ page: 'calculators' })}
                className="automotive-service-card cursor-pointer group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-red-600/15 border border-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    Risk Architecture
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                    Mathematical 1% risk lot sizing and cold storage anti-drainer protocols.
                  </p>
                </div>
                <div className="circle-action-btn">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </TiltCard>

              {/* Card 4: Web Applications */}
              <TiltCard
                onClick={() => onNavigate({ page: 'tools' })}
                className="automotive-service-card cursor-pointer group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-red-600/15 border border-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    Web Applications
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                    Proprietary apps: HustlerVault, HustlerDrop, and SignalHustle.
                  </p>
                </div>
                <div className="circle-action-btn">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </TiltCard>

              {/* Card 5: Business Advisory */}
              <TiltCard
                onClick={() => onNavigate({ page: 'hustles' })}
                className="automotive-service-card cursor-pointer group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-red-600/15 border border-red-500/20 text-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    AI Side Hustles
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                    High-yield faceless media blueprints and automated client acquisition systems.
                  </p>
                </div>
                <div className="circle-action-btn">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </TiltCard>
            </div>
          </div>
        </section>
      </MotionDepthSection>

      {/* 3. TAHMID'S OTHER PROFILES SHOWCASE (Fixed: Compact, High-Contrast, No Wide Text) */}
      <MotionDepthSection depthIntensity="normal">
        <section className="bg-[#101512] py-20 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 relative">
          <div className="absolute top-0 right-10 w-80 h-80 bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto space-y-10 relative z-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 block">
                CREATOR ECOSYSTEM • CONNECT WITH TAHMID
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                Explore Tahmid's Other Profiles
              </h2>
              <p className="text-zinc-400 text-sm max-w-lg mx-auto font-normal">
                Follow Tahmid beyond the trading charts — raw Dhaka vlogging with Bachelor Tahmid, and daily competitive gaming on Respawn Tahmid.
              </p>
            </div>

            {/* Render the Clean, Non-Stretched Responsive Profile Switcher */}
            <ProfilesShowcase />
          </div>
        </section>
      </MotionDepthSection>

      {/* 4. FEATURE BANNER: "A Partner in What's Next" + Testimonial Card */}
      <MotionDepthSection depthIntensity="normal">
        <section className="bg-[#171717] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Split Banner with Hiker in Charcoal / Red Tone */}
              <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-gradient-to-r from-[#171717] via-[#0E1712] to-[#171717] text-white relative min-h-[380px] sm:min-h-[420px] flex flex-col justify-between p-8 sm:p-12 shadow-2xl border border-red-950/40">
                {/* Hiker Image Background with Dark Shadow */}
                <div 
                  className="absolute inset-0 bg-cover bg-right sm:bg-center opacity-40 mix-blend-luminosity pointer-events-none"
                  style={{ backgroundImage: `url('/assets/hiker_mountain_lake_1794122275835.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#0E1712]/90 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-md space-y-4">
                  <div className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                    MORE THAN TRADING SIGNALS
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight uppercase">
                    Built for the <br /> Long Run.
                  </h2>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
                    We cut through the noise of fake gurus and empty promises with real, mathematically tested trading systems and transparent execution.
                  </p>
                  <div className="pt-2">
                    <a
                      href={OFFICIAL_LINKS.contactWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="crimson-btn-pill text-xs sm:text-sm font-bold"
                    >
                      <span>Book a Direct Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Tagline */}
                <div className="relative z-10 self-end text-right hidden sm:block">
                  <div className="text-xs font-mono tracking-widest text-red-400 uppercase leading-snug font-bold">
                    HIGHER. <br />
                    FASTER. <br />
                    STRONGER.
                  </div>
                  <div className="w-8 h-1 bg-[#A31C18] ml-auto mt-2 rounded-full" />
                </div>
              </div>

              {/* Right Testimonial & Review Card */}
              <div className="lg:col-span-4 rounded-3xl bg-[#1D1D1D] border border-white/10 p-8 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="text-4xl font-serif text-red-500 font-bold mb-4">
                    “
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed italic mb-6">
                    {testimonials[activeTestimonialIdx].quote}
                  </p>
                  <div>
                    <div className="font-bold text-white text-sm">
                      {testimonials[activeTestimonialIdx].author}
                    </div>
                    <a
                      href={testimonials[activeTestimonialIdx].profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-red-400 hover:text-red-300 font-mono inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>{testimonials[activeTestimonialIdx].profileLabel}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
                  <div className="flex items-center gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonialIdx(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          activeTestimonialIdx === i ? 'bg-red-500 w-6' : 'bg-zinc-700'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:border-red-500 hover:text-white transition-colors cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
                      className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:border-red-500 hover:text-white transition-colors cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionDepthSection>

      {/* 5. STATS ROW: 4-Column Automotive Layout with Dividers */}
      <MotionDepthSection depthIntensity="subtle">
        <section className="bg-[#121212] py-14 px-4 sm:px-6 lg:px-8 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-6 h-6 text-red-500" />
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">12,000+</span>
                </div>
                <span className="text-xs text-zinc-400 font-semibold uppercase font-mono tracking-wider">Members & Traders</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-6 h-6 text-red-500" />
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">4.9 / 5</span>
                </div>
                <span className="text-xs text-zinc-400 font-semibold uppercase font-mono tracking-wider">Satisfaction Rating</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-6 h-6 text-red-500" />
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">$1.4M+</span>
                </div>
                <span className="text-xs text-zinc-400 font-semibold uppercase font-mono tracking-wider">Airdrops & Volume</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-6 h-6 text-red-500" />
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">100%</span>
                </div>
                <span className="text-xs text-zinc-400 font-semibold uppercase font-mono tracking-wider">Negative Balance Guard</span>
              </div>
            </div>
          </div>
        </section>
      </MotionDepthSection>

      {/* 6. PARTNER BROKERS PREVIEW: Exness & OneRoyal */}
      <MotionDepthSection depthIntensity="normal">
        <section className="bg-[#171717] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 block mb-1">
                  VERIFIED BROKER INFRASTRUCTURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
                  Trade With Partner Brokers
                </h2>
              </div>
              <button
                onClick={() => onNavigate({ page: 'brokers' })}
                className="px-5 py-2.5 rounded-full bg-[#202020] border border-white/10 text-xs font-bold text-zinc-200 hover:border-red-500 hover:text-white transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
              >
                <span>Explore All Broker Perks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BROKER_PARTNERS.map((b) => (
                <TiltCard
                  key={b.id}
                  className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#1C1C1C] via-[#141815] to-[#101010] border border-white/10 shadow-xl flex flex-col justify-between hover:border-red-500/50 transition-all space-y-5"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#252525] border border-white/10 p-2.5 flex items-center justify-center shrink-0">
                        <img src={b.logo} alt={b.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-black text-white">{b.name}</h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-300 font-bold border border-red-800/40 uppercase">
                            {b.badge}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-zinc-400 mt-0.5">
                          Spreads from <strong className="text-red-400 font-bold">{b.spreadFrom}</strong> • Leverage {b.leverage}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                      {b.tagline}
                    </p>

                    <div className="p-3 rounded-xl bg-red-950/30 border border-red-700/30 text-xs text-red-200 font-medium">
                      <strong className="text-red-400 uppercase font-mono">Partner Perk: </strong>
                      {b.depositBonus}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onNavigate({ page: 'brokers', subpage: b.id })}
                      className="text-xs font-semibold text-zinc-400 hover:text-red-400 cursor-pointer"
                    >
                      View Account Types & Setup →
                    </button>
                    <a
                      href={b.referralUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="crimson-btn-pill py-2 px-4 text-xs font-bold"
                    >
                      <span>Open Account</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </MotionDepthSection>
    </div>
  );
}
