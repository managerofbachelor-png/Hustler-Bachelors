import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateLotSize, calculateCompoundGrowth, estimateAirdropReward } from './calculators.ts';

test('calculateLotSize computes correct risk amount and lot sizes', () => {
  // $1000 balance, 2% risk = $20 risk
  // 20 pips stop loss, $10 per pip per lot
  // 20 / (20 * 10) = 0.1 lots
  const result = calculateLotSize({
    accountBalance: 1000,
    riskPercentage: 2,
    stopLossPips: 20,
    pipValuePerStandardLot: 10,
  });

  assert.equal(result.riskAmount, 20);
  assert.equal(result.lotSize, 0.1);
  assert.equal(result.miniLots, 1);
  assert.equal(result.microLots, 10);
});

test('calculateCompoundGrowth projects growth and identifies milestones', () => {
  const result = calculateCompoundGrowth(1000, 10, 12, 100);
  assert.ok(result.finalBalance > 1000);
  assert.ok(result.totalProfit > 0);
  assert.equal(result.monthsData.length, 12);
  assert.ok(result.milestonesReached.some((m) => m.milestone === 5000 || m.milestone === 1000));
});

test('estimateAirdropReward scales reward based on completion rate', () => {
  const halfDone = estimateAirdropReward({
    tasksCompleted: 2,
    totalTasks: 4,
    estimatedTier: 'Tier 1 (Massive)',
    requiresGas: false,
  });
  const allDone = estimateAirdropReward({
    tasksCompleted: 4,
    totalTasks: 4,
    estimatedTier: 'Tier 1 (Massive)',
    requiresGas: false,
  });

  assert.ok(allDone.maxEstimate > halfDone.maxEstimate);
  assert.equal(halfDone.completionRate, 50);
  assert.equal(allDone.completionRate, 100);
});
