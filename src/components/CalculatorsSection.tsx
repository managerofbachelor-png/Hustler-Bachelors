import { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Percent, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { calculateLotSize, calculateCompoundGrowth } from '../utils/calculators.ts';

export function CalculatorsSection() {
  const [activeTab, setActiveTab] = useState<'lotsize' | 'compound'>('lotsize');

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

  // Pip value adjustment (e.g. Gold standard lot is $10 per 0.1 pip or $100 per $1 move)
  const pipValue = instrument === 'XAUUSD' ? 10 : 10;
  const lotResult = calculateLotSize({
    accountBalance: balance,
    riskPercentage: riskPct,
    stopLossPips: stopLossPips,
    pipValuePerStandardLot: pipValue,
  });

  const compoundResult = calculateCompoundGrowth(
    initialCapital,
    monthlyReturn,
    months,
    monthlyAddition
  );

  return (
    <section id="calculators" className="py-20 bg-[#08080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4" />
            <span>INSTITUTIONAL RISK & MATHEMATICS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            HUSTLER RISK & GROWTH <span className="text-[#FFC700]">CALCULATORS</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Amateurs guess their trade size; professionals calculate their dollar risk down to the cent. Never blow an account again.
          </p>

          {/* Toggle Tab Buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('lotsize')}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'lotsize'
                  ? 'bg-[#FFC700] text-black shadow-lg shadow-[#FFC700]/25'
                  : 'premium-btn text-slate-300 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Forex & Gold Lot Size Calculator</span>
            </button>
            <button
              onClick={() => setActiveTab('compound')}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'compound'
                  ? 'bg-[#FFC700] text-black shadow-lg shadow-[#FFC700]/25'
                  : 'premium-btn text-slate-300 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Compound Wealth Simulator</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Lot Size Calculator */}
        {activeTab === 'lotsize' && (
          <div className="max-w-4xl mx-auto premium-card p-6 sm:p-10 border-[#FFC700]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Inputs */}
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Trading Account Equity ($ USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-slate-400">$</span>
                    <input
                      type="number"
                      min="10"
                      max="1000000"
                      step="50"
                      value={balance}
                      onChange={(e) => setBalance(parseFloat(e.target.value) || 0)}
                      className="w-full bg-[#13131E] border border-white/10 rounded-xl pl-8 pr-4 py-3 font-mono text-white text-base focus:border-[#FFC700] focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[250, 500, 1000, 5000, 10000].map((val) => (
                      <button
                        key={val}
                        onClick={() => setBalance(val)}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                      >
                        ${val.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Risk Per Trade (%)
                    </label>
                    <span className="font-mono text-xs font-bold text-[#FFC700]">
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
                    className="w-full accent-[#FFC700] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                    <span>0.5% (Safe)</span>
                    <span>1.0% (Standard)</span>
                    <span>2.0% (Prop Firm)</span>
                    <span>5.0% (Aggressive)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Stop Loss Distance (Pips / Points)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={stopLossPips}
                    onChange={(e) => setStopLossPips(parseFloat(e.target.value) || 1)}
                    className="w-full bg-[#13131E] border border-white/10 rounded-xl px-4 py-3 font-mono text-white text-base focus:border-[#FFC700] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Instrument Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['XAUUSD', 'EURUSD', 'GBPUSD', 'CRYPTO'] as const).map((inst) => (
                      <button
                        key={inst}
                        onClick={() => setInstrument(inst)}
                        className={`p-2 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                          instrument === inst
                            ? 'bg-[#FFC700]/20 text-[#FFC700] border border-[#FFC700]'
                            : 'bg-[#13131E] text-slate-400 border border-white/10 hover:text-white'
                        }`}
                      >
                        {inst === 'XAUUSD' ? 'Gold (XAU/USD)' : inst}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Calculated Results Card */}
              <div className="bg-[#13131E] border border-[#FFC700]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                      RECOMMENDED POSITION
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      Calculated 100% Math
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-mono text-slate-400 block mb-1">Standard Lot Size (MT4 / MT5)</span>
                    <div className="font-mono text-4xl sm:text-5xl font-black text-[#FFC700]">
                      {lotResult.lotSize} <span className="text-lg text-slate-400 font-normal">Lots</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Exact Risk Amount:</span>
                      <span className="text-rose-400 font-bold">${lotResult.riskAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Mini Lots (0.1x):</span>
                      <span className="text-white font-bold">{lotResult.miniLots} mini</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Micro Lots (0.01x):</span>
                      <span className="text-white font-bold">{lotResult.microLots} micro</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href="#brokers"
                    className="w-full gold-btn py-3 text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 font-bold"
                  >
                    <span>Execute on Exness / OneRoyal</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Compound Wealth Simulator */}
        {activeTab === 'compound' && (
          <div className="max-w-4xl mx-auto premium-card p-6 sm:p-10 border-[#FFC700]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              {/* Inputs */}
              <div className="space-y-5">
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Initial Deposit / Trading Capital ($)
                  </label>
                  <input
                    type="number"
                    min="50"
                    step="100"
                    value={initialCapital}
                    onChange={(e) => setInitialCapital(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#13131E] border border-white/10 rounded-xl px-4 py-3 font-mono text-white text-base focus:border-[#FFC700] focus:outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Target Monthly Growth Rate (%)
                    </label>
                    <span className="font-mono text-xs font-bold text-[#FFC700]">{monthlyReturn}% / mo</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="25"
                    step="1"
                    value={monthlyReturn}
                    onChange={(e) => setMonthlyReturn(parseFloat(e.target.value))}
                    className="w-full accent-[#FFC700] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                    <span>5% (Conservative)</span>
                    <span>12% (Hustler Target)</span>
                    <span>20%+ (Aggressive)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Timeframe (Months)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[6, 12, 24, 36].map((m) => (
                      <button
                        key={m}
                        onClick={() => setMonths(m)}
                        className={`p-2 rounded-lg text-xs font-mono font-bold transition-all ${
                          months === m
                            ? 'bg-[#FFC700] text-black'
                            : 'bg-[#13131E] text-slate-300 hover:text-white border border-white/10'
                        }`}
                      >
                        {m} Mos
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Monthly Additional Savings / Airdrop Inflow ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="50"
                    value={monthlyAddition}
                    onChange={(e) => setMonthlyAddition(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#13131E] border border-white/10 rounded-xl px-4 py-3 font-mono text-white text-base focus:border-[#FFC700] focus:outline-none"
                  />
                </div>
              </div>

              {/* Compound Summary Card */}
              <div className="bg-[#13131E] border border-[#FFC700]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                      PROJECTED PORTFOLIO VALUE
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFC700]/20 text-[#FFC700] font-bold">
                      {months} Months Compounding
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-mono text-slate-400 block mb-1">Final Balance</span>
                    <div className="font-mono text-3xl sm:text-4xl font-black text-emerald-400">
                      ${compoundResult.finalBalance.toLocaleString()}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Total Capital Contributed:</span>
                      <span className="text-white font-bold">${compoundResult.totalContributions.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">Pure Compound Interest Profit:</span>
                      <span className="text-[#FFC700] font-bold">+${compoundResult.totalProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Milestone alerts */}
                {compoundResult.milestonesReached.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block mb-2">
                      MILESTONES UNLOCKED:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {compoundResult.milestonesReached.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-[#FFC700]/15 border border-[#FFC700]/30 text-[10px] font-mono text-[#FFC700] font-bold flex items-center gap-1"
                        >
                          <Award className="w-3 h-3" />
                          <span>${item.milestone.toLocaleString()} by Month {item.month}</span>
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
    </section>
  );
}
