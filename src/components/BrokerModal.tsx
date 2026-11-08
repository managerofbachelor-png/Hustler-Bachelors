import { useState } from 'react';
import { X, ShieldCheck, Check, Copy, ExternalLink, Sparkles, Star } from 'lucide-react';
import { BROKER_PARTNERS } from '../data/hustlerData.ts';

interface BrokerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BrokerModal({ isOpen, onClose }: BrokerModalProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="broker-modal-title"
    >
      <div className="bg-[#0E0E15] border border-white/20 rounded-2xl max-w-3xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg premium-btn focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC700]/10 border border-[#FFC700]/30 text-[#FFC700] text-xs font-mono font-bold uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            <span>OFFICIAL PARTNER BROKER REWARDS</span>
          </div>
          <h3 id="broker-modal-title" className="font-display text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            CLAIM YOUR VIP BROKER <span className="text-[#FFC700]">BONUSES</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Get 0.0 pip raw spreads, 0% overnight swap on Gold, and up to $500 in deposit match bonuses with our official partner accounts.
          </p>
        </div>

        {/* Both Brokers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {BROKER_PARTNERS.map((broker) => {
            const isCopied = copiedCode === broker.referralCode;

            return (
              <div
                key={broker.id}
                className="bg-[#13131E] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#FFC700]/40 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0 overflow-hidden">
                      <img
                        src={broker.logo}
                        alt={`${broker.name} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display text-xl font-black text-white uppercase">
                          {broker.name}
                        </h4>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#FFC700]/20 text-[#FFC700] font-bold">
                          {broker.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-amber-400 font-mono">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="font-bold text-white">{broker.rating}</span>
                        <span className="text-slate-400">({broker.reviewsCount.toLocaleString()})</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {broker.tagline}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {broker.perks.slice(0, 3).map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/10 text-xs font-mono">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase block">Partner Promo Code:</span>
                      <span className="text-[#FFC700] font-bold">{broker.referralCode}</span>
                    </div>
                    <button
                      onClick={() => handleCopyCode(broker.referralCode)}
                      className="p-1.5 text-slate-300 hover:text-white rounded bg-white/5"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <a
                    href={broker.referralUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full gold-btn py-2.5 text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-1.5 font-bold"
                  >
                    <span>Register on {broker.name}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Walkthrough */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
          <strong className="text-white uppercase font-mono block mb-1">How to Activate VIP Perks:</strong>
          <ol className="list-decimal list-inside space-y-1 text-slate-400">
            <li>Click "Register" on either Exness or OneRoyal.</li>
            <li>Ensure the Partner Code is applied at signup.</li>
            <li>Complete KYC verification (Passport or ID).</li>
            <li>Deposit as little as $10 (Exness) or $50 (OneRoyal) to unlock raw 0.0 spreads and zero overnight swap.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
