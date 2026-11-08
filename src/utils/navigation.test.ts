import test from 'node:test';
import assert from 'node:assert/strict';
import { parseHash, buildHash, getBreadcrumbs } from './navigation.ts';

test('parseHash defaults to home when hash is empty or #', () => {
  assert.deepEqual(parseHash(''), { page: 'home' });
  assert.deepEqual(parseHash('#'), { page: 'home' });
  assert.deepEqual(parseHash('#/'), { page: 'home' });
});

test('parseHash parses top-level and nested subpages properly', () => {
  assert.deepEqual(parseHash('#/brokers'), { page: 'brokers', subpage: undefined, tab: undefined });
  assert.deepEqual(parseHash('#/brokers/exness'), { page: 'brokers', subpage: 'exness', tab: undefined });
  assert.deepEqual(parseHash('#/airdrops/monad/guide'), { page: 'airdrops', subpage: 'monad', tab: 'guide' });
});

test('buildHash generates correct URL hashes', () => {
  assert.equal(buildHash({ page: 'home' }), '#/home');
  assert.equal(buildHash({ page: 'brokers', subpage: 'oneroyal' }), '#/brokers/oneroyal');
  assert.equal(buildHash({ page: 'signals', subpage: 'gold', tab: 'chart' }), '#/signals/gold/chart');
});

test('getBreadcrumbs creates hierarchical breadcrumb chain', () => {
  const crumbs = getBreadcrumbs({ page: 'brokers', subpage: 'exness' });
  assert.equal(crumbs.length, 3);
  assert.equal(crumbs[0].label, 'Home');
  assert.equal(crumbs[1].label, 'Brokers');
  assert.equal(crumbs[2].label, 'Exness');
});
