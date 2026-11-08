/**
 * Pure calculation utilities for trading risk management, compounding, and airdrop valuations.
 */

export interface LotSizeInput {
  accountBalance: number;
  riskPercentage: number;
  stopLossPips: number;
  pipValuePerStandardLot?: number; // default $10 for standard EURUSD/GBPUSD lot
}

export interface LotSizeResult {
  riskAmount: number;
  lotSize: number;
  miniLots: number;
  microLots: number;
  maxRecommendedLoss: number;
}

export function calculateLotSize(input: LotSizeInput): LotSizeResult {
  const balance = Math.max(0, input.accountBalance || 0);
  const riskPct = Math.max(0.1, Math.min(100, input.riskPercentage || 1));
  const stopLoss = Math.max(1, input.stopLossPips || 10);
  const pipVal = input.pipValuePerStandardLot && input.pipValuePerStandardLot > 0 ? input.pipValuePerStandardLot : 10;

  const riskAmount = Number(((balance * riskPct) / 100).toFixed(2));
  const rawLot = riskAmount / (stopLoss * pipVal);
  const lotSize = Math.max(0.01, Number(rawLot.toFixed(2)));

  return {
    riskAmount,
    lotSize,
    miniLots: Number((lotSize * 10).toFixed(1)),
    microLots: Number((lotSize * 100).toFixed(0)),
    maxRecommendedLoss: riskAmount,
  };
}

export interface CompoundMonth {
  month: number;
  startingBalance: number;
  profit: number;
  contributions: number;
  endingBalance: number;
}

export interface CompoundResult {
  monthsData: CompoundMonth[];
  finalBalance: number;
  totalProfit: number;
  totalContributions: number;
  milestonesReached: { milestone: number; month: number }[];
}

export function calculateCompoundGrowth(
  principal: number,
  monthlyRatePercent: number,
  months: number,
  monthlyContribution = 0
): CompoundResult {
  const p = Math.max(0, principal);
  const r = (monthlyRatePercent || 0) / 100;
  const m = Math.max(1, Math.min(60, months || 12));
  const deposit = Math.max(0, monthlyContribution);

  let current = p;
  let totalContributions = p;
  const monthsData: CompoundMonth[] = [];
  const milestones = [1000, 5000, 10000, 25000, 50000, 100000, 500000, 1000000];
  const reached: { milestone: number; month: number }[] = [];
  const hitMap = new Set<number>();

  for (let i = 1; i <= m; i++) {
    const startingBalance = current;
    const profit = startingBalance * r;
    current = startingBalance + profit + deposit;
    totalContributions += deposit;

    monthsData.push({
      month: i,
      startingBalance: Number(startingBalance.toFixed(2)),
      profit: Number(profit.toFixed(2)),
      contributions: deposit,
      endingBalance: Number(current.toFixed(2)),
    });

    for (const ms of milestones) {
      if (!hitMap.has(ms) && current >= ms && p < ms) {
        reached.push({ milestone: ms, month: i });
        hitMap.add(ms);
      }
    }
  }

  const finalBalance = Number(current.toFixed(2));
  const totalProfit = Number(Math.max(0, finalBalance - totalContributions).toFixed(2));

  return {
    monthsData,
    finalBalance,
    totalProfit,
    totalContributions: Number(totalContributions.toFixed(2)),
    milestonesReached: reached,
  };
}

export interface AirdropScoreInput {
  tasksCompleted: number;
  totalTasks: number;
  estimatedTier: 'Tier 1 (Massive)' | 'Tier 2 (High)' | 'Tier 3 (Moderate)';
  requiresGas: boolean;
}

export function estimateAirdropReward(input: AirdropScoreInput): {
  minEstimate: number;
  maxEstimate: number;
  completionRate: number;
} {
  const completionRate = input.totalTasks > 0 ? (input.tasksCompleted / input.totalTasks) : 0;
  let baseMin = 250;
  let baseMax = 1200;

  if (input.estimatedTier === 'Tier 1 (Massive)') {
    baseMin = 800;
    baseMax = 4500;
  } else if (input.estimatedTier === 'Tier 2 (High)') {
    baseMin = 400;
    baseMax = 2200;
  }

  const multiplier = 0.3 + (completionRate * 0.7);
  return {
    minEstimate: Math.round(baseMin * multiplier),
    maxEstimate: Math.round(baseMax * multiplier),
    completionRate: Math.round(completionRate * 100),
  };
}
