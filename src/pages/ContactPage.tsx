import { useState, FormEvent } from 'react';
import { 
  MessageCircle, 
  Send, 
  Mail, 
  Check, 
  Copy, 
  ExternalLink, 
  CheckCircle2, 
  Phone,
  Sparkles,
  ArrowRight,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RouteState } from '../utils/navigation.ts';
import { OFFICIAL_LINKS } from '../data/hustlerData.ts';

interface ContactPageProps {
  onNavigate: (route: RouteState) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Crypto Airdrops ($0 Capital)',
    handle: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(OFFICIAL_LINKS.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const t = `HB-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(t);
    setFormSubmitted(true);

    confetti({
      particleCount: 85,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#A31C18', '#DC2626', '#10B981'],
    });
  };

  return (
    <div className="space-y-12 py-8 max-w-6xl mx-auto">
      {/* Visual Intake Banner - Clamped width, responsive typography, no stretched text */}
      <div className="rounded-2xl overflow-hidden border border-red-900/40 bg-gradient-to-r from-[#1E1E1E] via-[#141A16] to-[#121212] p-6 sm:p-8 shadow-2xl relative">
        <div className="absolute top-0 right-0 w-80 h-full bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-xl space-y-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-red-400 uppercase flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>DIRECT FOUNDER ACCESS • NO GATEKEEPING</span>
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug uppercase">
              Ready to trade, claim airdrops, and build independent income streams? Reach out directly to the team.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-zinc-300 hover:text-white flex items-center justify-center gap-2 cursor-pointer transition-colors"
              title="Copy official email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-red-400" />}
              <span>{copiedEmail ? 'Email Copied!' : OFFICIAL_LINKS.contactEmail}</span>
            </button>

            <a
              href={OFFICIAL_LINKS.contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="crimson-btn-pill py-2.5 px-5 text-xs font-bold justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Direct Instant Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* WhatsApp Card */}
        <a
          href={OFFICIAL_LINKS.contactWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#111111] border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex flex-col justify-between group shadow-xl"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold block">
                Primary Instant Messenger
              </span>
              <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors">
                Direct WhatsApp
              </h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              Reach Tahmid directly for broker onboarding, account approval, and VIP swap privileges.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
            <span>+880 1904-771432</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>

        {/* Telegram Card */}
        <a
          href={OFFICIAL_LINKS.contactTelegram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-gradient-to-br from-[#1C1C1C] via-[#14181E] to-[#111111] border border-red-500/30 hover:border-red-500/60 transition-all flex flex-col justify-between group shadow-xl"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-red-400 uppercase font-semibold block">
                Inner Circle Telegram
              </span>
              <h3 className="text-lg font-black text-white group-hover:text-red-400 transition-colors">
                Personal DM Handle
              </h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              Direct Telegram handle for serious collaborations, high-volume traders, and VIP Inner Circle.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-red-500/15 flex items-center justify-between text-xs font-mono text-red-400 font-bold">
            <span>@ChallengeKing</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </a>

        {/* Email Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1C1C1C] via-[#191512] to-[#111111] border border-amber-500/30 flex flex-col justify-between shadow-xl">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold block">
                Official Business Inquiries
              </span>
              <h3 className="text-lg font-black text-white">
                Direct Email
              </h3>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              Guaranteed reply within 24 hours for official partnerships, sponsorships, and inquiries.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-amber-500/15 flex items-center justify-between gap-2">
            <span className="text-xs font-mono text-amber-300 truncate font-semibold">
              {OFFICIAL_LINKS.contactEmail}
            </span>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded bg-white/10 text-zinc-300 hover:text-white cursor-pointer"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Intake Application Form & Community Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form */}
        <div className="lg:col-span-7 rounded-2xl bg-[#1C1C1C] border border-red-950/40 p-6 sm:p-8 shadow-xl">
          {formSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase">
                Inquiry Logged!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-normal">
                Thank you for reaching out. Your priority intake ticket is <strong className="text-red-400 font-mono">{ticketId}</strong>. Tahmid will reply shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="carbon-btn-outline px-5 py-2 text-xs"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-white/10 pb-4 mb-4">
                <h3 className="text-xl font-black text-white uppercase">
                  Direct VIP Intake
                </h3>
                <p className="text-xs text-zinc-400 font-normal">
                  Send your question or broker onboarding request directly to Tahmid.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-white focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-white focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Topic of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-white focus:border-red-500 focus:outline-none"
                  >
                    <option>Crypto Airdrops ($0 Capital)</option>
                    <option>Exness Account & VIP Swap</option>
                    <option>OneRoyal 100% Deposit Bonus</option>
                    <option>Signals & Copy Trading</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    WhatsApp or Telegram Handle
                  </label>
                  <input
                    type="text"
                    placeholder="@handle or phone number"
                    value={formData.handle}
                    onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-white focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                  Message / Goal
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell Tahmid what you want to achieve or what you need help with..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl p-3 font-mono text-xs sm:text-sm text-white focus:border-red-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full crimson-btn-pill py-3 rounded-xl text-xs font-bold justify-center"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Send Message Directly</span>
              </button>
            </form>
          )}
        </div>

        {/* Community Channels Sidebar */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl bg-[#1C1C1C] border border-white/10 p-6 space-y-4 shadow-xl">
            <h3 className="font-black text-white text-base uppercase">Official Channels</h3>
            <div className="space-y-2 text-xs">
              <a
                href={OFFICIAL_LINKS.telegramSignals}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-red-500/50 transition-all text-zinc-300 hover:text-white"
              >
                <div>
                  <strong className="text-white block font-bold">Bachelor Traders</strong>
                  <span className="text-[11px] font-mono text-zinc-400">Telegram Trade Signals</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-red-400" />
              </a>

              <a
                href={OFFICIAL_LINKS.telegramAirdrops}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-red-500/50 transition-all text-zinc-300 hover:text-white"
              >
                <div>
                  <strong className="text-white block font-bold">Bachelor Hustle Club</strong>
                  <span className="text-[11px] font-mono text-zinc-400">Telegram $0 Airdrops</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-red-400" />
              </a>

              <a
                href={OFFICIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-red-500/50 transition-all text-zinc-300 hover:text-white"
              >
                <div>
                  <strong className="text-white block font-bold">YouTube (@HustlerBachelors)</strong>
                  <span className="text-[11px] font-mono text-zinc-400">Video Guides & Breakdowns</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-red-400" />
              </a>

              <a
                href={OFFICIAL_LINKS.bachelorTahmid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-blue-500/30 hover:border-blue-400 transition-all text-zinc-300 hover:text-white"
              >
                <div>
                  <strong className="text-white block font-bold">Bachelor Tahmid</strong>
                  <span className="text-[11px] font-mono text-blue-400">Dhaka Vlogs Website</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>

              <a
                href={OFFICIAL_LINKS.respawnTahmid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-red-500/30 hover:border-red-400 transition-all text-zinc-300 hover:text-white"
              >
                <div>
                  <strong className="text-white block font-bold">Respawn Tahmid</strong>
                  <span className="text-[11px] font-mono text-red-400">Gaming & Livestreams</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-red-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
