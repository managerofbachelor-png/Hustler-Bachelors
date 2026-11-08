export interface RouteState {
  page: 'home' | 'brokers' | 'signals' | 'airdrops' | 'tools' | 'hustles' | 'calculators' | 'academy' | 'contact';
  subpage?: string;
  tab?: string;
}

export function parseHash(hashString: string): RouteState {
  const clean = hashString.replace(/^#\/?/, '').trim();
  if (!clean) {
    return { page: 'home' };
  }

  const parts = clean.split('/').filter(Boolean);
  const rawPage = parts[0]?.toLowerCase();

  const validPages: RouteState['page'][] = [
    'home',
    'brokers',
    'signals',
    'airdrops',
    'tools',
    'hustles',
    'calculators',
    'academy',
    'contact',
  ];

  const page = validPages.includes(rawPage as RouteState['page'])
    ? (rawPage as RouteState['page'])
    : 'home';

  const subpage = parts[1] ? parts[1].toLowerCase() : undefined;
  const tab = parts[2] ? parts[2].toLowerCase() : undefined;

  return { page, subpage, tab };
}

export function buildHash(route: RouteState): string {
  let path = `#/${route.page}`;
  if (route.subpage) {
    path += `/${route.subpage}`;
  }
  if (route.tab) {
    path += `/${route.tab}`;
  }
  return path;
}

export function getBreadcrumbs(route: RouteState): { label: string; hash: string }[] {
  const crumbs: { label: string; hash: string }[] = [{ label: 'Home', hash: '#/home' }];

  if (route.page === 'home') {
    return crumbs;
  }

  const pageLabels: Record<RouteState['page'], string> = {
    home: 'Home',
    brokers: 'Brokers',
    signals: 'Signals',
    airdrops: 'Airdrops',
    tools: 'Web Tools',
    hustles: 'AI Hustles',
    calculators: 'Calculators',
    academy: 'Academy',
    contact: 'Contact',
  };

  crumbs.push({
    label: pageLabels[route.page] || route.page,
    hash: `#/${route.page}`,
  });

  if (route.subpage) {
    const subpageTitle = route.subpage
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({
      label: subpageTitle,
      hash: `#/${route.page}/${route.subpage}`,
    });
  }

  return crumbs;
}
