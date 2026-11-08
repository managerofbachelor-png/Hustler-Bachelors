import { ArrowUp, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';
import { RouteState } from '../utils/navigation.ts';
import { OFFICIAL_LINKS } from '../data/hustlerData.ts';

interface FooterProps {
  onNavigate: (route: RouteState) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] border-t border-red-950/40 pt-16 pb-24 lg:pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo & Advisory tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A31C18] to-[#600F0D] flex items-center justify-center text-white shadow-lg shadow-red-900/30 border border-red-500/30">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L1 21h22L12 2zm0 5.1L18.8 19H5.2L12 7.1z" />
              </svg>
            </div>
            <div>
              <span className="font-black text-base sm:text-lg text-white tracking-tight block leading-tight uppercase">
                Hustler Bachelors
              </span>
              <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase font-semibold">
                Built Differently • High Contrast
              </span>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-zinc-300">
            <button onClick={() => onNavigate({ page: 'home' })} className="hover:text-red-400 transition-colors">
              Home
            </button>
            <button onClick={() => onNavigate({ page: 'brokers' })} className="hover:text-red-400 transition-colors">
              Brokers
            </button>
            <button onClick={() => onNavigate({ page: 'signals' })} className="hover:text-red-400 transition-colors">
              Signals
            </button>
            <button onClick={() => onNavigate({ page: 'airdrops' })} className="hover:text-red-400 transition-colors">
              Airdrops
            </button>
            <button onClick={() => onNavigate({ page: 'tools' })} className="hover:text-red-400 transition-colors">
              Resources & Tools
            </button>
            <button onClick={() => onNavigate({ page: 'contact' })} className="hover:text-red-400 transition-colors">
              Contact
            </button>
          </div>

          {/* Right Socials & Brand Motto */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <div className="flex items-center gap-3 text-zinc-300">
              <a 
                href={OFFICIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#1C1C1C] border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-400 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={OFFICIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#1C1C1C] border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={OFFICIAL_LINKS.contactWhatsApp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#1C1C1C] border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-400 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href={OFFICIAL_LINKS.contactTelegram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-[#1C1C1C] border border-white/10 flex items-center justify-center hover:border-red-500 hover:text-red-400 transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
              BUILT DIFFERENTLY • NO EXCUSES.
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Hustler Bachelors by Tahmid. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate({ page: 'academy' })} className="hover:text-red-400 transition-colors">
              Field Manual
            </button>
            <button onClick={() => onNavigate({ page: 'calculators' })} className="hover:text-red-400 transition-colors">
              Risk Management
            </button>
            <button onClick={scrollToTop} className="hover:text-red-400 transition-colors flex items-center gap-1 font-semibold">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
