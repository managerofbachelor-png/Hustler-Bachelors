import { useState } from 'react';
import { Calculator, TrendingUp, ShieldCheck, ArrowRight, Award, Flame } from 'lucide-react';
import { RouteState } from '../utils/navigation.ts';
import { calculateLotSize, calculateCompoundGrowth } from '../utils/calculators.ts';

interface CalculatorsPageProps {
  subpage?: string;
  onNavigate: (route: RouteState) => void;
}

export function CalculatorsPage({ subpage, onNavigate }: CalculatorsPageProps) {
  const [activeTab, setActiveTab] = useState<'lotsize' | 'compound'>(
    subpage === 'compound' ? 'compound' : 'lotsize'
  );

  // Lot size state
  const [balance, setBalance] = useState<number>(1000);
  const [riskPct, setRiskPct] = useState<number>(2);
  const [stopLossPips, setStopLossPips] = useState<number>(25);
  const [instrument, setInstrument] = useState<'EURUSD' | 'XAUUSD' | 'GBPUSD' | 'CRYPTO'>('XAUUSD');

  // Compound state
  const [initialCapital, setInitialCapital] = useState<number>(500);
  const [monthlyReturn, setMonthlyReturn] = useState<number>(12);
  const [months, setMonths] = useState<number>(12);
  const [monthlyAddition, setMonthlyAddition] = useState<number>(100);

  const lotResult = calculateLotSize({
    accountBalance: balance,
    riskPercentage: riskPct,
    stopLossPips: stopLossPips,
    pipValuePerStandardLot: 10,
  });

  const compoundResult = calculateCompoundGrowth(
    initialCapital,
    monthlyReturn,
    months,
    monthlyAddition
  );

  return (
    <div className="space-y-12 py-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-700/40 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
          <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
          <span>MATHEMATICAL RISK ARCHITECTURE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
          Hustler Risk & Compounding Engine
        </h1>
        <p className="text-zinc-300 text-sm max-w-2xl leading-relaxed font-normal">
          Amateurs guess position sizes based on emotion. Professional traders calculate the exact dollar risk down to the cent before placing an order on Exness or OneRoyal.
        </p>

        {/* Tab Toggle */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <button
            onClick={() => {
              setActiveTab('lotsize');
              onNavigate({ page: 'calculators', subpage: 'lotsize' });
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'lotsize'
                ? 'crimson-btn-pill'
                : 'carbon-btn-outline'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Forex & Gold Lot Sizer</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('compound');
              onNavigate({ page: 'calculators', subpage: 'compound' });
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'compound'
                ? 'crimson-btn-pill'
                : 'carbon-btn-outline'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Compound Growth Simulator</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Lot Size Calculator */}
      {activeTab === 'lotsize' && (
        <div className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#111111] border border-red-950/40 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  Trading Account Equity ($ USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-zinc-400">$</span>
                  <input
                    type="number"
                    min="10"
                    max="1000000"
                    step="50"
                    value={balance}
                    onChange={(e) => setBalance(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl pl-8 pr-4 py-3 font-mono text-white text-base focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  {[250, 500, 1000, 5000, 10000].map((val) => (
                    <button
                      key={val}
                      onClick={() => setBalance(val)}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 hover:text-white cursor-pointer"
                    >
                      ${val.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                    Risk Per Trade (%)
                  </label>
                  <span className="font-mono text-xs font-bold text-red-400">
                    {riskPct}% ({balance ? `$${((balance * riskPct) / 100).toFixed(2)}` : '$0'})
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={riskPct}
                  onChange={(e) => setRiskPct(parseFloat(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
                  <span>0.5% (Conservative)</span>
                  <span>1.0% (Standard)</span>
                  <span>2.0% (Prop Firm Limit)</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  Stop Loss Distance (Pips / Points)
                </label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={stopLossPips}
                  onChange={(e) => setStopLossPips(parseFloat(e.target.value) || 1)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 font-mono text-white text-base focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  Instrument
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['XAUUSD', 'EURUSD', 'GBPUSD', 'CRYPTO'] as const).map((inst) => (
                    <button
                      key={inst}
                      onClick={() => setInstrument(inst)}
                      className={`p-2 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                        instrument === inst
                          ? 'bg-red-950/60 text-red-300 border border-red-700/50'
                          : 'bg-black/50 text-zinc-400 border border-white/5 hover:text-white'
                      }`}
                    >
                      {inst === 'XAUUSD' ? 'Gold (XAU/USD)' : inst}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Output */}
            <div className="bg-[#121212] border border-red-950/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 shadow-inner">
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1 font-bold">
                  Calculated Position Size
                </span>
                <div className="font-mono text-4xl sm:text-5xl font-black text-red-400 mb-4">
                  {lotResult.lotSize} <span className="text-base text-zinc-400 font-normal">Lots</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Total Dollar Risk:</span>
                    <strong className="text-red-400 font-bold">${lotResult.riskAmount.toFixed(2)}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Mini Lots (0.1x):</span>
                    <strong className="text-white">{lotResult.miniLots} mini</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Micro Lots (0.01x):</span>
                    <strong className="text-white">{lotResult.microLots} micro</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onNavigate({ page: 'brokers', subpage: 'exness' })}
                  className="w-full crimson-btn-pill py-3 rounded-xl text-xs font-bold justify-center"
                >
                  <span>Trade This Size on Exness</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Compound Wealth Growth Simulator */}
      {activeTab === 'compound' && (
        <div className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#111111] border border-red-950/40 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-5">
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  Initial Capital ($ USD)
                </label>
                <input
                  type="number"
                  min="50"
                  step="100"
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 font-mono text-white text-base focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                    Target Monthly Return (%)
                  </label>
                  <span className="font-mono text-xs font-bold text-red-400">{monthlyReturn}% / mo</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="25"
                  step="1"
                  value={monthlyReturn}
                  onChange={(e) => setMonthlyReturn(parseFloat(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
                  <span>5% (Conservative)</span>
                  <span>12% (Hustler Target)</span>
                  <span>20% (High Growth)</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  Compounding Period (Months)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[6, 12, 24, 36].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`p-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        months === m
                          ? 'bg-[#A31C18] text-white shadow-md'
                          : 'bg-black/50 text-zinc-300 hover:text-white border border-white/5'
                      }`}
                    >
                      {m} Mos
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  Monthly Additional Deposit ($ USD)
                </label>
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={monthlyAddition}
                  onChange={(e) => setMonthlyAddition(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 font-mono text-white text-base focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-[#121212] border border-red-950/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 shadow-inner">
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-1 font-bold">
                  Projected Portfolio Value After {months} Months
                </span>
                <div className="font-mono text-3xl sm:text-4xl font-black text-emerald-400 mb-4">
                  ${compoundResult.finalBalance.toLocaleString()}
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Total Capital Contributed:</span>
                    <strong className="text-white">${compoundResult.totalContributions.toLocaleString()}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Pure Compound Profit:</span>
                    <strong className="text-red-400 font-bold">+${compoundResult.totalProfit.toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              {compoundResult.milestonesReached.length > 0 && (
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase font-mono text-zinc-400 block mb-2 font-bold">
                    Milestones Passed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {compoundResult.milestonesReached.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-red-950/40 border border-red-700/30 text-[10px] font-mono text-red-300 font-bold flex items-center gap-1"
                      >
                        <Award className="w-3 h-3 text-red-400" />
                        <span>${item.milestone.toLocaleString()} in Month {item.month}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
