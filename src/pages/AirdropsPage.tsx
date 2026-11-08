import { useState, useEffect } from 'react';
import { 
  Gift, 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Calendar, 
  Send, 
  Zap, 
  Flame 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RouteState } from '../utils/navigation.ts';
import { AIRDROP_LIST, OFFICIAL_LINKS } from '../data/hustlerData.ts';
import { estimateAirdropReward } from '../utils/calculators.ts';

interface AirdropsPageProps {
  subpage?: string;
  onNavigate: (route: RouteState) => void;
}

export function AirdropsPage({ subpage, onNavigate }: AirdropsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<'All' | '100% Free ($0)' | 'Layer 1' | 'DePIN'>('All');
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('hustler_completed_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hustler_completed_tasks', JSON.stringify(completedTasks));
    } catch {
      // storage unavailable
    }
  }, [completedTasks]);

  const activeProject =
    AIRDROP_LIST.find((p) => p.id === subpage) ||
    AIRDROP_LIST.find((p) => p.id === 'monad') ||
    AIRDROP_LIST[0];

  const toggleTask = (taskId: string, projectId: string) => {
    setCompletedTasks((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      const project = AIRDROP_LIST.find((p) => p.id === projectId);
      if (project) {
        const allDone = project.tasks.every((t) => (t.id === taskId ? !prev[taskId] : prev[t.id]));
        if (allDone) {
          confetti({
            particleCount: 75,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#A31C18', '#DC2626', '#10B981'],
          });
        }
      }
      return next;
    });
  };

  const filteredProjects = AIRDROP_LIST.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === '100% Free ($0)') return item.cost === '100% Free ($0)';
    if (selectedFilter === 'Layer 1') return item.category === 'Layer 1';
    if (selectedFilter === 'DePIN') return item.category === 'DePIN';
    return true;
  });

  const tasksForActive = activeProject.tasks;
  const completedCountForActive = tasksForActive.filter((t) => completedTasks[t.id]).length;
  const rewardEstimate = estimateAirdropReward({
    tasksCompleted: completedCountForActive,
    totalTasks: tasksForActive.length,
    estimatedTier: activeProject.potential.includes('Tier 1')
      ? 'Tier 1 (Massive)'
      : activeProject.potential.includes('Tier 2')
      ? 'Tier 2 (High)'
      : 'Tier 3 (Moderate)',
    requiresGas: activeProject.cost !== '100% Free ($0)',
  });

  return (
    <div className="space-y-12 py-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-700/40 text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Gift className="w-3.5 h-3.5" />
            <span>ZERO CAPITAL CRYPTO ALLOCATIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase">
            Free Airdrop Radar & Farming Portal
          </h1>
          <p className="text-zinc-300 text-sm max-w-2xl leading-relaxed font-normal">
            Leading venture-backed blockchains reward early testnet users with free tokens before public token launches. Zero credit card or deposit needed.
          </p>
        </div>

        {/* Real Channel Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={OFFICIAL_LINKS.telegramAirdrops}
            target="_blank"
            rel="noopener noreferrer"
            className="crimson-btn-pill px-4 py-2.5 text-xs font-bold flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5 text-white" />
            <span>Bachelor Hustle Club Telegram</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>

          <a
            href={OFFICIAL_LINKS.hustlerDrop}
            target="_blank"
            rel="noopener noreferrer"
            className="carbon-btn-outline px-4 py-2.5 text-xs font-semibold flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 text-red-400" />
            <span>Launch HustlerDrop App</span>
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        {(['All', '100% Free ($0)', 'Layer 1', 'DePIN'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedFilter(tab)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              selectedFilter === tab
                ? 'bg-red-950/60 text-red-300 border border-red-700/40'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 2-Column Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Project Selector */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono uppercase text-zinc-400 font-bold block mb-1">
            SELECT AIRDROP CAMPAIGN:
          </span>
          {filteredProjects.map((project) => {
            const isSelected = project.id === activeProject.id;
            const completedTotal = project.tasks.filter((t) => completedTasks[t.id]).length;
            const isFinished = completedTotal === project.tasks.length && project.tasks.length > 0;

            return (
              <div
                key={project.id}
                onClick={() => onNavigate({ page: 'airdrops', subpage: project.id })}
                className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#242424] to-[#161D18] border-red-500 shadow-lg shadow-red-950/40'
                    : 'bg-gradient-to-br from-[#1C1C1C] to-[#121212] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-black text-white uppercase">
                        {project.name}
                      </h2>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                        ${project.tickerOrSymbol}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 font-mono">
                      {project.category} • {project.cost}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-300 font-bold border border-red-800/40 block">
                      {project.potential.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono block mt-1">
                      {project.stage}
                    </span>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="text-zinc-400">Progress</span>
                    <span className={isFinished ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                      {completedTotal} / {project.tasks.length} Done
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-emerald-400 transition-all duration-300"
                      style={{
                        width: `${(completedTotal / project.tasks.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Airdrop Deep-Dive */}
        <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#1C1C1C] via-[#151D18] to-[#101010] p-6 sm:p-8 border border-red-950/40 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-black text-white uppercase">
                  {activeProject.name}
                </h2>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 font-bold border border-emerald-500/30">
                  {activeProject.cost}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal">
                {activeProject.description}
              </p>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
              {activeProject.faucetUrl && (
                <a
                  href={activeProject.faucetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crimson-btn-pill px-4 py-2 text-xs font-bold flex items-center gap-1.5"
                >
                  <span>Claim Free Faucet</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>
              )}
              {activeProject.ecosystemUrl && (
                <a
                  href={activeProject.ecosystemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carbon-btn-outline px-3 py-1.5 text-xs font-semibold flex items-center gap-1"
                >
                  <span>Ecosystem Portal</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              )}
            </div>
          </div>

          {/* Reward Estimation */}
          <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono text-zinc-400 block font-bold">
                Estimated Token Allocation Range
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-black text-red-400">
                  ${rewardEstimate.minEstimate.toLocaleString()} - ${rewardEstimate.maxEstimate.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  ({rewardEstimate.completionRate}% Claim Ready)
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-normal">
                Based on historical distributions by Arbitrum, Jito, and Celestia.
              </span>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[10px] uppercase font-mono text-zinc-400 block font-bold">Target Token TGE</span>
              <span className="font-mono text-xs font-bold text-white flex items-center gap-1 sm:justify-end">
                <Calendar className="w-3.5 h-3.5 text-red-400" />
                {activeProject.deadline}
              </span>
            </div>
          </div>

          {/* Task Checklist */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                DAILY TASK CHECKLIST (CLICK TO TICK OFF):
              </h3>
              <span className="text-xs font-mono text-zinc-400">
                {completedCountForActive} of {tasksForActive.length} done
              </span>
            </div>

            {tasksForActive.map((task, idx) => {
              const done = !!completedTasks[task.id];

              return (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id, activeProject.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    done
                      ? 'bg-emerald-950/20 border-emerald-500/40 text-zinc-300'
                      : 'bg-[#121212] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    className="mt-0.5 text-zinc-400 focus:outline-none"
                    aria-label={done ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {done ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
                    ) : (
                      <Circle className="w-5 h-5 text-zinc-500 hover:text-red-400" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-sm font-semibold ${
                          done ? 'line-through text-zinc-400' : 'text-white'
                        }`}
                      >
                        Step {idx + 1}: {task.title}
                      </span>
                      <a
                        href={task.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-zinc-400 hover:text-red-400 p-1"
                        title="Open step link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 font-normal">
                      💡 <strong className="text-zinc-200">Strategy:</strong> {task.hint}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
