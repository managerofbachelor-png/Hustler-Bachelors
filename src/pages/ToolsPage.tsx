import { useState } from 'react';
import { Wrench, ExternalLink, CheckCircle2, ArrowRight, Zap, Flame } from 'lucide-react';
import { RouteState } from '../utils/navigation.ts';
import { TAHMID_WEB_TOOLS } from '../data/hustlerData.ts';
import { TiltCard } from '../components/MotionDepthSection.tsx';

interface ToolsPageProps {
  subpage?: string;
  onNavigate: (route: RouteState) => void;
}

export function ToolsPage({ subpage, onNavigate }: ToolsPageProps) {
  const [activeToolId, setActiveToolId] = useState<string>(
    subpage || TAHMID_WEB_TOOLS[0].id
  );

  const activeTool =
    TAHMID_WEB_TOOLS.find((t) => t.id === activeToolId) || TAHMID_WEB_TOOLS[0];

  return (
    <div className="space-y-12 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-700/40 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
          <Wrench className="w-3.5 h-3.5" />
          <span>PROPRIETARY SOFTWARE SUITE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
          Tahmid's Web Applications
        </h1>
        <p className="text-zinc-300 text-sm max-w-3xl leading-relaxed font-normal">
          I don't just teach theory — I build real software to give our community an unfair execution advantage. All 3 tools are hosted, active, and free to use.
        </p>
      </div>

      {/* Top 3 App Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TAHMID_WEB_TOOLS.map((tool) => {
          const isSelected = tool.id === activeTool.id;

          return (
            <TiltCard
              key={tool.id}
              onClick={() => setActiveToolId(tool.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between shadow-xl ${
                isSelected
                  ? 'bg-gradient-to-br from-[#222222] to-[#141A16] border-red-500 shadow-red-950/50'
                  : 'bg-gradient-to-br from-[#1C1C1C] to-[#121212] border-white/10 hover:border-red-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 font-bold border border-emerald-500/30">
                    {tool.status}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">
                    {tool.badge}
                  </span>
                </div>

                <h2 className="text-xl font-black text-white mb-1 uppercase">
                  {tool.name}
                </h2>
                <span className="text-xs font-mono text-red-400 font-bold block mb-3">
                  {tool.category}
                </span>

                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  {isSelected ? 'Currently Viewing' : 'Click to inspect'}
                </span>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="crimson-btn-pill py-1.5 px-3.5 text-xs font-bold"
                >
                  <span>Launch</span>
                  <ExternalLink className="w-3 h-3 text-white" />
                </a>
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Panel for Active Tool */}
      <div className="rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#101010] p-6 sm:p-10 space-y-8 border border-red-950/40 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-300 font-bold border border-red-700/40 uppercase">
                {activeTool.category}
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                ● {activeTool.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
              {activeTool.name}
            </h2>
            <p className="text-sm text-zinc-400 mt-1 font-normal">
              {activeTool.tagline}
            </p>
          </div>

          <a
            href={activeTool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="crimson-btn-pill px-6 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shrink-0"
          >
            <span>Open {activeTool.name} Live Web App</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Detailed Description & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-white uppercase">Why Tahmid Built {activeTool.name}</h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-normal">
              {activeTool.description}
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed font-normal">
              Instead of relying on scattered bookmarks or chaotic spreadsheets, {activeTool.name} gives you a centralized operational cockpit that saves you hours every week.
            </p>
          </div>

          <div className="lg:col-span-5 p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase text-red-400 font-bold block">
              CORE CAPABILITIES:
            </span>
            <ul className="space-y-2 text-xs text-zinc-300">
              {activeTool.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="font-normal">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Direct Link Banner */}
        <div className="p-4 rounded-xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-zinc-300">
            <Zap className="w-4 h-4 text-red-400" />
            <span>Official Web Link:</span>
            <a href={activeTool.url} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline font-bold">
              {activeTool.url}
            </a>
          </div>
          <a
            href={activeTool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="carbon-btn-outline px-4 py-2 text-xs font-bold flex items-center gap-1.5"
          >
            <span>Visit App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
