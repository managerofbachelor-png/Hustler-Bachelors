import { useState, useEffect } from 'react';
import { 
  Gift, 
  CheckCircle2, 
  Circle, 
  ExternalLink, 
  Flame, 
  DollarSign, 
  Calendar, 
  Award,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AIRDROP_LIST, AirdropProject } from '../data/hustlerData.ts';
import { estimateAirdropReward } from '../utils/calculators.ts';

export function AirdropRadar() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | '100% Free ($0)' | 'Layer 1' | 'DePIN'>('All');
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('hustler_completed_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [activeProjectId, setActiveProjectId] = useState<string>(AIRDROP_LIST[0].id);

  useEffect(() => {
    try {
      localStorage.setItem('hustler_completed_tasks', JSON.stringify(completedTasks));
    } catch {
      // storage unavailable
    }
  }, [completedTasks]);

  const toggleTask = (taskId: string, projectId: string) => {
    setCompletedTasks((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      // check if all tasks for this project completed
      const project = AIRDROP_LIST.find((p) => p.id === projectId);
      if (project) {
        const allDone = project.tasks.every((t) => (t.id === taskId ? !prev[taskId] : prev[t.id]));
        if (allDone) {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#FFC700', '#10B981', '#3B82F6'],
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

  const activeProject = AIRDROP_LIST.find((p) => p.id === activeProjectId) || AIRDROP_LIST[0];

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
    <section id="airdrops" className="py-20 bg-[#0B0B11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Gift className="w-4 h-4" />
              <span>ZERO CAPITAL OPPORTUNITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">
              FREE <span className="text-[#FFC700]">AIRDROP RADAR</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Projects give away millions in free tokens to early testnet users. No credit card, no deposit. Just 10 minutes of execution.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', '100% Free ($0)', 'Layer 1', 'DePIN'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  selectedFilter === tab
                    ? 'bg-[#FFC700] text-black font-extrabold shadow-lg shadow-[#FFC700]/20'
                    : 'premium-btn text-slate-300 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold block mb-1">
              SELECT AIRDROP CAMPAIGN:
            </span>
            {filteredProjects.map((project) => {
              const isSelected = project.id === activeProject.id;
              const completedTotal = project.tasks.filter((t) => completedTasks[t.id]).length;
              const isFinished = completedTotal === project.tasks.length && project.tasks.length > 0;

              return (
                <div
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-[#13131E] border-[#FFC700] shadow-xl shadow-[#FFC700]/10'
                      : 'premium-card hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-black text-lg text-white uppercase tracking-wide">
                          {project.name}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 font-bold">
                          ${project.tickerOrSymbol}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">
                        {project.category} • {project.cost}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFC700]/15 text-[#FFC700] font-bold block">
                        {project.potential.split(' ')[0]}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono block mt-1">
                        {project.stage}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className="text-slate-400">Tasks Completed</span>
                      <span className={isFinished ? 'text-emerald-400 font-bold' : 'text-[#FFC700]'}>
                        {completedTotal} / {project.tasks.length}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#FFC700] to-emerald-400 transition-all duration-300"
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

          {/* Right Column: Active Project Details & Task Checklist */}
          <div className="lg:col-span-7 premium-card p-6 sm:p-8 border-[#FFC700]/30 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-wide">
                    {activeProject.name}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                    {activeProject.cost}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeProject.description}
                </p>
              </div>

              {/* Faucet / Portal Links */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                {activeProject.faucetUrl && (
                  <a
                    href={activeProject.faucetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn px-4 py-2 text-xs uppercase tracking-wider rounded-lg flex items-center gap-1.5"
                  >
                    <span>Claim Free Faucet</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.ecosystemUrl && (
                  <a
                    href={activeProject.ecosystemUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-btn px-3 py-1.5 text-[11px] text-slate-300 hover:text-white rounded-lg flex items-center gap-1"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3 h-3 text-[#FFC700]" />
                  </a>
                )}
              </div>
            </div>

            {/* Live Reward Projection Card */}
            <div className="p-4 rounded-xl bg-[#13131E] border border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  Estimated Payout Potential
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#FFC700]">
                    ${rewardEstimate.minEstimate.toLocaleString()} - ${rewardEstimate.maxEstimate.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    ({rewardEstimate.completionRate}% Unlocked)
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">
                  Calculated based on historical token allocations for similar protocols.
                </span>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Expected TGE Deadline</span>
                <span className="font-mono font-bold text-sm text-white flex items-center gap-1 sm:justify-end">
                  <Calendar className="w-3.5 h-3.5 text-[#FFC700]" />
                  {activeProject.deadline}
                </span>
              </div>
            </div>

            {/* Task Checklist */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  ACTION CHECKLIST (CLICK TO COMPLETE):
                </h4>
                <span className="text-xs font-mono text-slate-400">
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
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-300'
                        : 'bg-[#0E0E15] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      className="mt-0.5 text-slate-400 focus:outline-none"
                      aria-label={done ? 'Mark task as incomplete' : 'Mark task as complete'}
                    >
                      {done ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-500 hover:text-[#FFC700]" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-sm font-semibold ${
                            done ? 'line-through text-slate-400' : 'text-white'
                          }`}
                        >
                          Step {idx + 1}: {task.title}
                        </span>
                        <a
                          href={task.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-[#FFC700] p-1 rounded"
                          title="Open step link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        💡 <strong className="text-slate-300">Strategy:</strong> {task.hint}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
