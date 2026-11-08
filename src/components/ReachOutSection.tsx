import { useState, FormEvent } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  Users,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ReachOutSection() {
  const teamEmail = 'managerofbachelor@gmail.com';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [vipTicketId, setVipTicketId] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Crypto Airdrops ($0 Capital)',
    experience: 'Complete Beginner (Starting from $0)',
    handle: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(teamEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ticket = `HB-${Math.floor(100000 + Math.random() * 900000)}`;
    setVipTicketId(ticket);
    setFormSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFC700', '#10B981', '#F59E0B', '#3B82F6'],
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual Banner from attached asset */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-white/10 bg-[#0E0E15] relative group">
          <div className="p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#FFC700] uppercase block mb-2">
                DIRECT FOUNDER ACCESS • NO GATEKEEPING
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                Ready to trade, claim airdrops, and build independent income streams? Reach out directly to the team.
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl premium-btn text-xs font-mono font-bold text-slate-200 hover:text-white flex items-center gap-2 cursor-pointer"
                title="Copy official email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#FFC700]" />}
                <span>{copiedEmail ? 'Email Copied!' : teamEmail}</span>
              </button>

              <a
                href={`mailto:${teamEmail}?subject=Hustler%20Bachelors%20VIP%20Access`}
                className="gold-btn px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-extrabold flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Contact & Community Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Community & Channel Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="premium-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFC700] to-amber-600 flex items-center justify-center text-black font-black">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-black text-white uppercase tracking-wide">
                    Hustler Bachelors VIP Inner Circle
                  </h4>
                  <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>12,850+ Active Members</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Connect directly with experienced market operators, airdrop farmers, and agency founders. Free daily trade breakdowns, early testnet alpha alerts, and 24/7 community support.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-lg bg-[#13131E] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Direct Inquiries:</span>
                  <a
                    href={`mailto:${teamEmail}`}
                    className="text-[#FFC700] font-bold hover:underline"
                  >
                    {teamEmail}
                  </a>
                </div>
                <div className="p-3 rounded-lg bg-[#13131E] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Guaranteed Response:</span>
                  <span className="text-white font-bold">&lt; 24 Hours</span>
                </div>
                <div className="p-3 rounded-lg bg-[#13131E] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Membership Fee:</span>
                  <span className="text-emerald-400 font-bold">$0 Free Entry</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFC700]/10 to-transparent border border-[#FFC700]/25">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#FFC700]" />
                  <span className="text-xs font-mono font-bold text-[#FFC700] uppercase">
                    Partner Broker VIP Upgrade
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Register on Exness or OneRoyal using our official partner codes to get upgraded to our exclusive 0-Latency Alpha VIP Discord and private mentorship streams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Reach-out Form */}
          <div className="lg:col-span-7 premium-card p-6 sm:p-8 border-[#FFC700]/30">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                  Application Received!
                </h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Welcome to Hustler Bachelors. Your VIP intake ticket{' '}
                  <strong className="text-[#FFC700] font-mono">{vipTicketId}</strong> has been logged. Our leadership team will reach out to you via email or Telegram shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        interest: 'Crypto Airdrops ($0 Capital)',
                        experience: 'Complete Beginner (Starting from $0)',
                        handle: '',
                        message: '',
                      });
                    }}
                    className="premium-btn px-6 py-2.5 text-xs font-mono font-bold text-white rounded-lg"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h4 className="font-display text-2xl font-black text-white uppercase tracking-wide">
                    Direct VIP Intake & Inquiry
                  </h4>
                  <p className="text-xs text-slate-400">
                    Tell us what you are aiming to build, and we'll point you to the highest ROI resources.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#13131E] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-white focus:border-[#FFC700] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#13131E] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-white focus:border-[#FFC700] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Primary Focus
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#13131E] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-white focus:border-[#FFC700] focus:outline-none"
                    >
                      <option>Crypto Airdrops ($0 Capital)</option>
                      <option>Forex & Gold Trading (Exness / OneRoyal)</option>
                      <option>AI Side Hustle Blueprints</option>
                      <option>Full Suite (All Streams)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Telegram / WhatsApp / Discord
                    </label>
                    <input
                      type="text"
                      placeholder="@hustler_handle"
                      value={formData.handle}
                      onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                      className="w-full bg-[#13131E] border border-white/10 rounded-xl px-4 py-2.5 font-mono text-xs sm:text-sm text-white focus:border-[#FFC700] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                    Your Current Goals & Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your current capital, challenges, or which broker bonuses you want to claim..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#13131E] border border-white/10 rounded-xl p-3 font-mono text-xs sm:text-sm text-white focus:border-[#FFC700] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-btn py-3.5 rounded-xl text-xs uppercase tracking-wider font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#FFC700]/20"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Submit Application to Founders</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
