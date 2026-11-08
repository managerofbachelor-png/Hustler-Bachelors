import { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Copy, 
  Check, 
  ExternalLink,
  Send,
  Zap,
  Flame
} from 'lucide-react';
import { RouteState } from '../utils/navigation.ts';
import { LIVE_TRADE_SIGNALS, TradeSignal, OFFICIAL_LINKS } from '../data/hustlerData.ts';
import { TiltCard } from '../components/MotionDepthSection.tsx';

interface SignalsPageProps {
  subpage?: string;
  onNavigate: (route: RouteState) => void;
}

export function SignalsPage({ subpage, onNavigate }: SignalsPageProps) {
  const [selectedMarket, setSelectedMarket] = useState<'All' | 'Commodities' | 'Crypto' | 'Forex'>('All');
  const [copiedSignalId, setCopiedSignalId] = useState<string | null>(null);

  const filteredSignals = LIVE_TRADE_SIGNALS.filter((sig) => {
    if (selectedMarket === 'All') return true;
    return sig.market === selectedMarket;
  });

  const handleCopySetup = (signal: TradeSignal) => {
    const text = `🔥 HUSTLER BACHELORS VIP SIGNAL BY TAHMID
Asset: ${signal.asset} (${signal.market})
Direction: ${signal.direction}
Entry Zone: ${signal.entryZone}
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
    <div className="space-y-12 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-700/40 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>INSTITUTIONAL PRICE ACTION & ORDERFLOW</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
            Daily Trade Signals & Setups
          </h1>
          <p className="text-zinc-300 text-sm max-w-2xl leading-relaxed font-normal">
            Every setup is analyzed using institutional orderblocks, liquidity sweeps, and mathematical 1:2+ risk/reward structures.
          </p>
        </div>

        {/* Real Channel Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={OFFICIAL_LINKS.telegramSignals}
            target="_blank"
            rel="noopener noreferrer"
            className="crimson-btn-pill px-4 py-2.5 text-xs font-bold flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5 text-white" />
            <span>Join Bachelor Traders Telegram</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>

          <a
            href={OFFICIAL_LINKS.signalHustle}
            target="_blank"
            rel="noopener noreferrer"
            className="carbon-btn-outline px-4 py-2.5 text-xs font-semibold flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 text-red-400" />
            <span>Open SignalHustle App</span>
          </a>
        </div>
      </div>

      {/* Market Filters */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        {(['All', 'Commodities', 'Crypto', 'Forex'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setSelectedMarket(m)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              selectedMarket === m
                ? 'bg-red-950/60 text-red-300 border border-red-700/40 shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {m === 'Commodities' ? 'Gold (XAU/USD)' : m}
          </button>
        ))}
      </div>

      {/* Signals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSignals.map((sig) => {
          const isLong = sig.direction === 'LONG';
          const isCopied = copiedSignalId === sig.id;

          return (
            <TiltCard
              key={sig.id}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#141815] to-[#101010] border border-white/10 flex flex-col justify-between hover:border-red-500/40 transition-all space-y-6 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isLong ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30' : 'bg-red-950/80 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {isLong ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-black text-white">{sig.asset}</h2>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-black uppercase ${
                            isLong ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/20' : 'bg-red-950/60 text-red-400 border border-red-500/20'
                          }`}
                        >
                          {sig.direction}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-zinc-400">
                        {sig.market} • Timeframe: {sig.timeframe}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-red-400 font-bold border border-white/5 block">
                      {sig.status}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 block mt-1">
                      {sig.timestamp}
                    </span>
                  </div>
                </div>

                {/* Entry / SL / RR */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/50 border border-white/5 mb-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-400 block">Entry Zone</span>
                    <strong className="text-white">{sig.entryZone}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-red-400 block">Stop Loss</span>
                    <strong className="text-red-300">{sig.stopLoss}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-400 block">Risk/Reward</span>
                    <strong className="text-amber-400">{sig.riskReward}</strong>
                  </div>
                </div>

                {/* Take-Profit Targets */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-mono uppercase text-zinc-400 block font-bold">
                    Take Profit Targets:
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-[10px] text-zinc-400 block">TP 1</span>
                      <strong className="text-emerald-400 font-bold">{sig.takeProfit1}</strong>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-[10px] text-zinc-400 block">TP 2</span>
                      <strong className="text-emerald-400 font-bold">{sig.takeProfit2}</strong>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-[10px] text-zinc-400 block">TP 3</span>
                      <strong className="text-emerald-400 font-bold">{sig.takeProfit3}</strong>
                    </div>
                  </div>
                </div>

                {/* Rationale */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-4 font-normal">
                  <strong className="text-white font-bold">Analysis:</strong> {sig.analysis}
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopySetup(sig)}
                  className="flex-1 carbon-btn-outline py-2 text-xs font-bold justify-center"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Setup Copied!' : 'Copy Setup'}</span>
                </button>

                <button
                  onClick={() => onNavigate({ page: 'brokers', subpage: 'exness' })}
                  className="crimson-btn-pill px-4 py-2 text-xs font-bold"
                >
                  <span>Trade on Exness</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </div>
  );
}
