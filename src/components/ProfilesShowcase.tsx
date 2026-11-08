import { useState } from 'react';
import { ExternalLink, Video, Gamepad2, Compass, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/hustlerData.ts';

export function ProfilesShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'bachelor' | 'respawn'>('all');

  const profiles = [
    {
      id: 'bachelor',
      name: 'Bachelor Tahmid',
      realName: 'Thafazzal Islam Thamed',
      badge: 'Vlogging & Street Hustle',
      icon: Video,
      accentBorder: 'border-blue-500/40 hover:border-blue-400',
      glowColor: 'rgba(59, 130, 246, 0.25)',
      tagline: 'Raw Dhaka Vlogs • Real Bachelor Life • Mirpur-12',
      summary: 'Unfiltered daily life, authentic street food hunts, budget survival challenges, and real stories showing the ground hustle in Dhaka.',
      tags: ['📍 Mirpur-12, Dhaka', '🎥 Real Daily Vlogs', '🍲 Street Food Hunts', '🔥 100% Authentic'],
      websiteUrl: OFFICIAL_LINKS.bachelorTahmid,
      websiteLabel: 'bachelortahmid.netlify.app',
      secondaryLink: OFFICIAL_LINKS.instagram,
      secondaryLabel: 'Personal Instagram',
    },
    {
      id: 'respawn',
      name: 'Respawn Tahmid',
      realName: 'Gaming & Livestreams Hub',
      badge: 'Esports & Daily Streams',
      icon: Gamepad2,
      accentBorder: 'border-red-600/50 hover:border-red-500',
      glowColor: 'rgba(239, 68, 68, 0.3)',
      tagline: 'High-Octane Gaming • Daily Streams • Community Matches',
      summary: 'Daily gaming livestreams, high-energy tactical matches, clutch moments, and community tournaments across YouTube and Twitch.',
      tags: ['🎮 Daily Livestreams', '🏆 Esports & Highlights', '💬 Community Hub', '⚡ High Energy'],
      websiteUrl: OFFICIAL_LINKS.respawnTahmid,
      websiteLabel: 'respawntahmid.netlify.app',
      secondaryLink: OFFICIAL_LINKS.contactTelegram,
      secondaryLabel: 'Join Game Hub',
    },
  ];

  const visibleProfiles = activeTab === 'all' 
    ? profiles 
    : profiles.filter(p => p.id === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Mobile-Friendly Profile Selector Tabs */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#111111] border border-white/10 shadow-lg gap-1 max-w-full overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-[#A31C18] text-white shadow-md shadow-red-900/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Profiles
          </button>
          <button
            onClick={() => setActiveTab('bachelor')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'bachelor'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Bachelor Tahmid</span>
          </button>
          <button
            onClick={() => setActiveTab('respawn')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'respawn'
                ? 'bg-[#A31C18] text-white shadow-md shadow-red-900/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Respawn Tahmid</span>
          </button>
        </div>
      </div>

      {/* Tightly Scoped, Non-Stretched Responsive Grid */}
      <div className={`grid gap-6 ${activeTab === 'all' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
        {visibleProfiles.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className={`rounded-2xl bg-gradient-to-br from-[#1C1C1C] via-[#141815] to-[#0D120F] border ${p.accentBorder} p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 relative overflow-hidden group`}
              style={{
                boxShadow: `0 15px 35px -10px rgba(0,0,0,0.8), 0 0 25px ${p.glowColor}`,
              }}
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A31C18] to-transparent opacity-80" />

              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#222222] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                        {p.name}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-400 block">
                        {p.realName}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 shrink-0">
                    {p.badge}
                  </span>
                </div>

                {/* Tagline */}
                <div className="text-xs sm:text-sm font-semibold text-red-300/90 leading-snug">
                  {p.tagline}
                </div>

                {/* Readable paragraph - clamped width so text never stretches wide */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {p.summary}
                </p>

                {/* Compact tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#252525] text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Action Link Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={p.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crimson-btn-pill py-2.5 px-4 text-xs font-bold justify-center flex-1"
                >
                  <span>Visit {p.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={p.secondaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carbon-btn-outline py-2.5 px-4 text-xs font-semibold justify-center"
                >
                  <span>{p.secondaryLabel}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
