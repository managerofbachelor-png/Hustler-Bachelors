import { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Copy, 
  Check, 
  Clock, 
  ShieldAlert, 
  SlidersHorizontal,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { LIVE_TRADE_SIGNALS, TradeSignal } from '../data/hustlerData.ts';

export function SignalsSection() {
  const [selectedMarket, setSelectedMarket] = useState<'All' | 'Forex' | 'Crypto' | 'Commodities'>('All');
  const [copiedSignalId, setCopiedSignalId] = useState<string | null>(null);

  const filteredSignals = LIVE_TRADE_SIGNALS.filter((sig) => {
    if (selectedMarket === 'All') return true;
    return sig.market === selectedMarket;
  });

  const handleCopySetup = (signal: TradeSignal) => {
    const text = `🔥 HUSTLER BACHELORS VIP SIGNAL
Asset: ${signal.asset} (${signal.market})
Direction: ${signal.direction}
Entry: ${signal.entryZone}
Stop Loss: ${signal.stopLoss}
Take Profit 1: ${signal.takeProfit1}
Take Profit 2: ${signal.takeProfit2}
Take Profit 3: ${signal.takeProfit3}
Risk/Reward: ${signal.riskReward}
Analysis: ${signal.analysis}`;

    navigator.clipboard.writeText(text);
    setCopiedSignalId(signal.id);
    setTimeout(() => setCopiedSignalId(null), 2500);
  };

  return (
    <section id="signals" className="py-20 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>INSTITUTIONAL ORDERFLOW & PRICE ACTION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">
              LIVE <span className="text-[#FFC700]">MARKET SIGNALS</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              High-probability swing and intraday trade setups with transparent invalidation levels and asymmetric 1:2+ risk-to-reward ratios.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Commodities', 'Crypto', 'Forex'] as const).map((market) => (
              <button
                key={market}
                onClick={() => setSelectedMarket(market)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  selectedMarket === market
                    ? 'bg-[#FFC700] text-black font-extrabold shadow-lg shadow-[#FFC700]/20'
                    : 'premium-btn text-slate-300 hover:text-white'
                }`}
              >
                {market}
              </button>
            ))}
          </div>
        </div>

        {/* Signals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredSignals.map((sig) => {
            const isLong = sig.direction === 'LONG';
            const isCopied = copiedSignalId === sig.id;

            return (
              <div
                key={sig.id}
                className="premium-card p-6 flex flex-col justify-between border-white/10 hover:border-[#FFC700]/40 transition-all"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                          isLong ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {isLong ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-xl font-black text-white uppercase tracking-wide">
                            {sig.asset}
                          </h3>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded font-black ${
                              isLong ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
                            }`}
                          >
                            {sig.direction}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {sig.market} • {sig.timeframe}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#FFC700] font-bold">
                        {sig.status}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 mt-1 justify-end">
                        <Clock className="w-3 h-3" />
                        <span>{sig.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  {/* Execution Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-[#13131E] border border-white/10 mb-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Entry Zone</span>
                      <span className="font-mono font-bold text-xs sm:text-sm text-white">{sig.entryZone}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-rose-400 block">Stop Loss (Invalidation)</span>
                      <span className="font-mono font-bold text-xs sm:text-sm text-rose-300">{sig.stopLoss}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#FFC700] block">Risk / Reward</span>
                      <span className="font-mono font-extrabold text-xs sm:text-sm text-[#FFC700]">{sig.riskReward}</span>
                    </div>
                  </div>

                  {/* Take Profit Target Ladder */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      TARGET TAKE-PROFITS:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded bg-white/5 border border-white/5">
                        <span className="text-[9px] uppercase font-mono text-slate-400 block">TP 1</span>
                        <span className="font-mono text-xs font-bold text-emerald-400">{sig.takeProfit1}</span>
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/5">
                        <span className="text-[9px] uppercase font-mono text-slate-400 block">TP 2</span>
                        <span className="font-mono text-xs font-bold text-emerald-400">{sig.takeProfit2}</span>
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/5">
                        <span className="text-[9px] uppercase font-mono text-slate-400 block">TP 3</span>
                        <span className="font-mono text-xs font-bold text-emerald-400">{sig.takeProfit3}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Analysis Note */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    <strong className="text-white font-mono">Rationale:</strong> {sig.analysis}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleCopySetup(sig)}
                    className="flex-1 py-2 px-3 text-xs font-mono font-bold premium-btn text-slate-200 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Setup Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#FFC700]" />
                        <span>Copy Setup</span>
                      </>
                    )}
                  </button>

                  <a
                    href="#brokers"
                    className="py-2 px-3 text-xs font-mono font-bold gold-btn rounded-lg flex items-center justify-center gap-1 shrink-0"
                  >
                    <span>Trade on Exness</span>
                    <ChevronRight className="w-3 h-3 text-black" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Strip */}
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-4 h-4 text-[#FFC700] shrink-0" />
          <span>
            <strong>Trading Disclaimer:</strong> Signals are provided for financial educational purposes and mathematical trade analysis. Always strictly manage your risk with maximum 1-2% account exposure per position.
          </span>
        </div>
      </div>
    </section>
  );
}
