import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, Flame, ShieldAlert } from 'lucide-react';

interface TickerItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  signalTag: string;
}

const INITIAL_TICKERS: TickerItem[] = [
  { symbol: 'BTC/USD', name: 'Bitcoin', price: '$88,420.50', change: '+4.82%', isPositive: true, signalTag: '🟢 Strong Buy' },
  { symbol: 'XAU/USD', name: 'Gold', price: '$2,654.80', change: '+1.14%', isPositive: true, signalTag: '🟢 Long Setup' },
  { symbol: 'SOL/USD', name: 'Solana', price: '$198.60', change: '+8.90%', isPositive: true, signalTag: '🔥 Target 1 Hit' },
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0892', change: '-0.24%', isPositive: false, signalTag: '🟡 Short Watch' },
  { symbol: 'ETH/USD', name: 'Ethereum', price: '$3,142.10', change: '+3.45%', isPositive: true, signalTag: '🟢 Accumulating' },
  { symbol: 'GBP/USD', name: 'British Pound', price: '1.2985', change: '+0.12%', isPositive: true, signalTag: '⚪ Consolidation' },
  { symbol: 'US30', name: 'Dow Jones Index', price: '43,890.00', change: '+0.68%', isPositive: true, signalTag: '🟢 Trend Up' },
  { symbol: 'GRASS/SOL', name: 'Grass DePIN', price: '$2.85', change: '+14.2%', isPositive: true, signalTag: '🪂 Airdrop Claimed' },
];

export function LiveTicker() {
  const [tickers, setTickers] = useState<TickerItem[]>(INITIAL_TICKERS);

  // Micro-fluctuations effect to simulate live streaming quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setTickers((prev) =>
        prev.map((item) => {
          // randomly tweak one price slightly every 4 seconds
          if (Math.random() > 0.45) {
            return item;
          }
          const numPrice = parseFloat(item.price.replace(/[$,]/g, ''));
          if (isNaN(numPrice)) return item;
          const deltaPct = (Math.random() * 0.08 - 0.038); // -0.038% to +0.042%
          const newPriceVal = numPrice * (1 + deltaPct / 100);
          const formatted = item.price.startsWith('$')
            ? `$${newPriceVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : newPriceVal.toFixed(4);

          return {
            ...item,
            price: formatted,
          };
        })
      );
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0E0E15] border-y border-white/10 py-2.5 overflow-hidden select-none relative z-20">
      <div className="flex items-center">
        {/* Fixed Pill Label */}
        <div className="hidden sm:flex items-center gap-2 pl-4 pr-3 py-1 bg-[#13131E] border-r border-white/10 z-10 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-300">
            MARKET PULSE
          </span>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee flex items-center gap-6 sm:gap-8">
            {tickers.concat(tickers).map((item, index) => (
              <div
                key={`${item.symbol}-${index}`}
                className="flex items-center gap-2.5 shrink-0 hover:bg-white/5 px-2.5 py-1 rounded transition-colors cursor-pointer"
              >
                <span className="font-mono font-bold text-xs text-white">
                  {item.symbol}
                </span>
                <span className="font-mono text-xs text-slate-300 font-medium">
                  {item.price}
                </span>
                <div
                  className={`flex items-center text-[11px] font-mono font-semibold ${
                    item.isPositive ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {item.isPositive ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  <span>{item.change}</span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-slate-400">
                  {item.signalTag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
