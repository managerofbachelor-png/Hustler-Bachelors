import { useState, useEffect } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Gift, 
  Bot, 
  Calculator, 
  BookOpen, 
  Mail, 
  Menu, 
  X, 
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onOpenBrokerModal?: () => void;
  onOpenContactModal?: () => void;
}

export function Navbar({ onOpenBrokerModal, onOpenContactModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Brokers', href: '#brokers', icon: ShieldCheck, badge: 'Exness & OneRoyal' },
    { name: 'Airdrops', href: '#airdrops', icon: Gift, badge: '$0 Cost' },
    { name: 'Signals', href: '#signals', icon: TrendingUp, badge: 'Live' },
    { name: 'AI Hustles', href: '#hustles', icon: Bot },
    { name: 'Calculators', href: '#calculators', icon: Calculator },
    { name: 'Academy', href: '#academy', icon: BookOpen },
    { name: 'Reach Out', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'premium-nav py-3 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#FFC700] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFC700] via-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-lg shadow-[#FFC700]/20 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-5 h-5 text-black fill-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white uppercase group-hover:text-[#FFC700] transition-colors leading-tight">
                Hustler <span className="text-[#FFC700]">Bachelors</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                Independent Wealth Hub
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FFC700] transition-colors" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="ml-1 text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#FFC700]/15 text-[#FFC700] border border-[#FFC700]/30 font-bold">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBrokerModal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white premium-btn flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#FFC700]"
              aria-label="Claim Partner Broker Bonuses"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Broker Bonuses</span>
            </button>

            <a
              href="#contact"
              onClick={onOpenContactModal}
              className="gold-btn px-4 py-2 text-xs uppercase tracking-wider rounded-lg flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span>Join VIP Club</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="gold-btn px-3 py-1.5 text-[11px] uppercase tracking-wider rounded-md"
            >
              Join VIP
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg premium-btn focus:outline-none focus:ring-2 focus:ring-[#FFC700]"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden premium-nav border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-[#FFC700]"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#FFC700]" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFC700]/20 text-[#FFC700]">
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrokerModal?.();
              }}
              className="w-full py-2.5 premium-btn text-xs font-semibold text-center text-slate-200 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-[#FFC700]" />
              <span>Claim Exness & OneRoyal Bonus</span>
            </button>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal?.();
              }}
              className="w-full py-2.5 gold-btn text-xs font-bold text-center rounded-lg flex items-center justify-center gap-2"
            >
              <span>Reach Out & Join VIP Community</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
