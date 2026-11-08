import { useState, useEffect } from 'react';
import { 
  Home, 
  ShieldCheck, 
  TrendingUp, 
  Gift, 
  Wrench, 
  Bot, 
  Calculator, 
  BookOpen, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  ExternalLink,
  Search,
  ArrowLeft
} from 'lucide-react';
import { RouteState, getBreadcrumbs } from '../utils/navigation.ts';
import { OFFICIAL_LINKS } from '../data/hustlerData.ts';

interface NavigationProps {
  currentRoute: RouteState;
  onNavigate: (route: RouteState) => void;
}

export function Navigation({ currentRoute, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const breadcrumbs = getBreadcrumbs(currentRoute);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { page: 'home' as const, label: 'Home' },
    { page: 'brokers' as const, label: 'Brokers' },
    { page: 'signals' as const, label: 'Signals' },
    { page: 'airdrops' as const, label: 'Airdrops' },
    { page: 'tools' as const, label: 'Resources & Tools' },
    { page: 'calculators' as const, label: 'Calculators' },
    { page: 'academy' as const, label: 'Academy' },
    { page: 'contact' as const, label: 'Contact' },
  ];

  const mobileDockItems = [
    { page: 'home' as const, label: 'Home', icon: Home },
    { page: 'brokers' as const, label: 'Brokers', icon: ShieldCheck },
    { page: 'signals' as const, label: 'Signals', icon: TrendingUp },
    { page: 'airdrops' as const, label: 'Airdrops', icon: Gift },
    { page: 'tools' as const, label: 'Tools', icon: Wrench },
    { page: 'contact' as const, label: 'Contact', icon: MessageCircle },
  ];

  const isHome = currentRoute.page === 'home';

  return (
    <>
      {/* Top Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/95 backdrop-blur-md shadow-2xl py-3 border-b border-red-950/40'
            : isHome
            ? 'bg-gradient-to-b from-[#171717]/90 via-[#171717]/50 to-transparent py-5'
            : 'bg-[#171717] py-4 border-b border-red-950/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Geometric Delta Mountain Brand Logo */}
            <button
              onClick={() => onNavigate({ page: 'home' })}
              className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A31C18] to-[#68100D] flex items-center justify-center text-white font-black shadow-lg shadow-red-900/40 group-hover:scale-105 group-hover:shadow-red-700/60 transition-all border border-red-500/30">
                {/* Clean geometric Delta mountain icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2zm0 5.1L18.8 19H5.2L12 7.1z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-base sm:text-lg text-white tracking-tight uppercase">
                  Hustler Bachelors
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-red-400 font-semibold">
                  Built Differently • High Performance
                </span>
              </div>
            </button>

            {/* Desktop Center Links */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = currentRoute.page === item.page;

                return (
                  <button
                    key={item.page}
                    onClick={() => onNavigate({ page: item.page })}
                    className={`text-xs sm:text-sm font-semibold transition-all relative py-1 cursor-pointer ${
                      isActive
                        ? 'text-red-400 font-bold'
                        : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A31C18] shadow-[0_0_8px_#A31C18] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Buttons: Search & Pill CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onNavigate({ page: 'tools' })}
                className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
                title="Search Tools & Guides"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href={OFFICIAL_LINKS.contactWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="crimson-btn-pill text-xs sm:text-sm tracking-wide"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Drawer Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={OFFICIAL_LINKS.contactWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="crimson-btn-pill py-2 px-3 text-xs"
              >
                <span>Book Call</span>
              </a>
              <button
                onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
                className="p-2 text-zinc-300 hover:text-white rounded-lg bg-white/10 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Breadcrumbs Bar */}
        {breadcrumbs.length > 1 && (
          <div className="border-t border-white/10 bg-[#121212]/95 px-4 sm:px-6 lg:px-8 py-2 mt-2">
            <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-zinc-300 overflow-x-auto whitespace-nowrap">
              <button
                onClick={() => onNavigate({ page: 'home' })}
                className="text-zinc-400 hover:text-red-400 flex items-center gap-1 font-mono"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Back</span>
              </button>
              <span className="text-zinc-600">|</span>
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <div key={crumb.hash} className="flex items-center gap-1.5">
                    {idx > 0 && <ChevronRight className="w-3 h-3 text-zinc-600" />}
                    <button
                      onClick={() => {
                        const parts = crumb.hash.replace(/^#\/?/, '').split('/');
                        onNavigate({
                          page: (parts[0] || 'home') as RouteState['page'],
                          subpage: parts[1],
                        });
                      }}
                      className={`${
                        isLast
                          ? 'text-red-400 font-bold'
                          : 'text-zinc-300 hover:text-white'
                      } transition-colors`}
                    >
                      {crumb.label}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile Slide-down Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden bg-[#171717] border-b border-red-900/30 px-4 pt-3 pb-6 space-y-1 mt-1 shadow-2xl">
            <div className="text-[10px] font-mono uppercase tracking-wider text-red-400 px-3 py-1 font-bold">
              NAVIGATION
            </div>
            {navLinks.map((item) => {
              const isActive = currentRoute.page === item.page;

              return (
                <button
                  key={item.page}
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onNavigate({ page: item.page });
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#A31C18]/25 text-red-300 font-bold border border-red-500/30'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </button>
              );
            })}

            {/* Quick External Profiles */}
            <div className="pt-3 border-t border-white/10 space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-3 py-1 font-bold">
                TAHMID'S SHOWCASES
              </div>
              <a
                href={OFFICIAL_LINKS.bachelorTahmid}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-zinc-300 hover:text-white"
              >
                <span className="font-semibold">Bachelor Tahmid (Dhaka Vlogs)</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <a
                href={OFFICIAL_LINKS.respawnTahmid}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-3 py-2 text-xs text-zinc-300 hover:text-white"
              >
                <span className="font-semibold">Respawn Tahmid (Gaming Livestreams)</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Floating Bottom Dock */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 automotive-mobile-dock px-2 py-2">
        <div className="grid grid-cols-6 gap-1 max-w-md mx-auto">
          {mobileDockItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentRoute.page === item.page;

            return (
              <button
                key={item.page}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onNavigate({ page: item.page });
                }}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                  isActive
                    ? 'text-red-400 font-bold bg-[#A31C18]/25 border border-red-500/20'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-red-400' : 'text-zinc-400'}`} />
                <span className="text-[10px] tracking-tight">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
