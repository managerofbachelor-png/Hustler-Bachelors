export interface SocialLink {
  platform: string;
  name: string;
  handle: string;
  url: string;
  badge?: string;
  description: string;
  iconName: 'youtube' | 'instagram' | 'facebook' | 'telegram' | 'whatsapp' | 'mail' | 'users';
}

export interface WebTool {
  id: string;
  name: string;
  tagline: string;
  url: string;
  category: 'Airdrop Monitoring' | 'Technical Signals' | 'Notion & Systems Vault';
  badge: string;
  description: string;
  features: string[];
  status: 'Live & Operational';
}

export interface ProfilePersona {
  id: string;
  brand: string;
  tagline: string;
  focus: string;
  bio: string;
  highlights: string[];
  socials: { label: string; url: string }[];
  accentColor: string;
  badge: string;
}

export interface BrokerPartner {
  id: 'exness' | 'oneroyal';
  name: string;
  badge: string;
  logo: string;
  tagline: string;
  rating: number;
  reviewsCount: number;
  minDeposit: string;
  leverage: string;
  spreadFrom: string;
  licenses: string[];
  perks: string[];
  referralCode: string;
  referralUrl: string;
  depositBonus: string;
  bestFor: string;
  accountTypes: {
    type: string;
    spread: string;
    commission: string;
    minDeposit: string;
  }[];
  setupGuide: { step: number; title: string; instruction: string }[];
}

export interface AirdropProject {
  id: string;
  name: string;
  tickerOrSymbol: string;
  stage: 'Active Testnet' | 'Daily Farm' | 'Snapshot Soon' | 'Confirmed Token';
  cost: '100% Free ($0)' | 'Low Gas (<$5)';
  category: 'Layer 1' | 'DePIN' | 'SocialFi' | 'DeFi';
  potential: 'Tier 1 ($1,000 - $5,000+)' | 'Tier 2 ($400 - $2,000)' | 'Tier 3 ($150 - $600)';
  deadline: string;
  difficulty: 'Beginner' | 'Intermediate';
  description: string;
  faucetUrl?: string;
  ecosystemUrl?: string;
  tasks: {
    id: string;
    title: string;
    link: string;
    type: 'faucet' | 'social' | 'bridge' | 'daily' | 'swap';
    hint: string;
  }[];
}

export interface TradeSignal {
  id: string;
  asset: string;
  market: 'Forex' | 'Crypto' | 'Commodities';
  direction: 'LONG' | 'SHORT';
  status: 'ACTIVE' | 'TARGET 1 HIT' | 'PENDING ENTRY' | 'CLOSED IN PROFIT';
  entryZone: string;
  stopLoss: string;
  takeProfit1: string;
  takeProfit2: string;
  takeProfit3: string;
  riskReward: string;
  confidence: number;
  analysis: string;
  timeframe: string;
  timestamp: string;
}

export interface SideHustleBlueprint {
  id: string;
  title: string;
  subtitle: string;
  monthlyPotential: string;
  capitalNeeded: string;
  setupTime: string;
  overview: string;
  toolsUsed: string[];
  steps: {
    stepNumber: number;
    title: string;
    action: string;
    promptTemplate?: string;
  }[];
  monetization: string;
  proTip: string;
}

export interface GuideManual {
  id: string;
  title: string;
  readTime: string;
  category: 'Forex' | 'Crypto Security' | 'Airdrops';
  summary: string;
  highlights: string[];
  fullGuideContent: string[];
}

// EXACT OFFICIAL LINKS PER USER INSTRUCTIONS
export const OFFICIAL_LINKS = {
  youtube: 'https://www.youtube.com/@HustlerBachelors',
  youtubeChannelId: 'https://www.youtube.com/channel/UCNTYkqb33lFUD0s5GbottsA',
  instagram: 'https://www.instagram.com/hustlerbachelors/',
  facebookPage: 'https://www.facebook.com/hustlerbachelors',
  facebookGroup: 'https://www.facebook.com/groups/1810504413443692',
  telegramSignals: 'https://t.me/BachelorTraders',
  telegramAirdrops: 'https://t.me/BachelorHustleClub',
  hustlerVault: 'https://hustlervault.netlify.app/',
  hustlerDrop: 'https://hustlerdrops.netlify.app/',
  signalHustle: 'https://signalhustle.netlify.app/',
  exnessAffiliate: 'https://one.toexness.com/a/bq9sl174wq',
  oneRoyalAffiliate: 'https://vc.cabinet.oneroyal.com/links/go/18060',
  contactEmail: 'managerofbachelor@gmail.com',
  contactWhatsApp: 'https://wa.me/8801904771432',
  contactTelegram: 'https://t.me/ChallengeKing',
  bachelorTahmid: 'https://bachelortahmid.netlify.app/',
  respawnTahmid: 'https://respawntahmid.netlify.app/',
};

export const SOCIAL_CHANNELS: SocialLink[] = [
  {
    platform: 'YouTube',
    name: 'Hustler Bachelors YouTube',
    handle: '@HustlerBachelors',
    url: OFFICIAL_LINKS.youtube,
    badge: 'Main Channel',
    description: 'In-depth video tutorials on forex scalping, live airdrop claiming guides, and AI money frameworks.',
    iconName: 'youtube',
  },
  {
    platform: 'Telegram Signals',
    name: 'Bachelor Traders',
    handle: '@BachelorTraders',
    url: OFFICIAL_LINKS.telegramSignals,
    badge: 'VIP Setups',
    description: 'Real-time trade notifications for Gold (XAUUSD), major forex pairs, and crypto swings.',
    iconName: 'telegram',
  },
  {
    platform: 'Telegram Airdrops',
    name: 'Bachelor Hustle Club',
    handle: '@BachelorHustleClub',
    url: OFFICIAL_LINKS.telegramAirdrops,
    badge: 'Free Alpha',
    description: 'Instant zero-dollar testnet notifications, daily faucets, and sybil-proof checklists.',
    iconName: 'telegram',
  },
  {
    platform: 'Instagram',
    name: 'Hustler Bachelors IG',
    handle: '@hustlerbachelors',
    url: OFFICIAL_LINKS.instagram,
    badge: 'Daily Stories',
    description: 'Day in the life, trade breakdowns, market psychology, and lifestyle updates.',
    iconName: 'instagram',
  },
  {
    platform: 'Facebook Page',
    name: 'Hustler Bachelors Official',
    handle: 'hustlerbachelors',
    url: OFFICIAL_LINKS.facebookPage,
    badge: 'Official Page',
    description: 'Community announcements, educational infographics, and live stream recaps.',
    iconName: 'facebook',
  },
  {
    platform: 'Facebook Group',
    name: 'Hustler Community Inner Circle',
    handle: '1810504413443692',
    url: OFFICIAL_LINKS.facebookGroup,
    badge: 'Discussion Hub',
    description: 'Connect with fellow ambitious hustlers, share trade results, and collaborate on airdrop farms.',
    iconName: 'users',
  },
  {
    platform: 'WhatsApp Direct',
    name: 'Tahmid Direct Contact',
    handle: '+880 1904-771432',
    url: OFFICIAL_LINKS.contactWhatsApp,
    badge: 'Direct Message',
    description: 'Direct inquiry channel for broker onboarding, VIP signal access, and private consultation.',
    iconName: 'whatsapp',
  },
  {
    platform: 'Telegram Founder',
    name: 'Inner Circle Personal Handle',
    handle: '@ChallengeKing',
    url: OFFICIAL_LINKS.contactTelegram,
    badge: 'Private DM',
    description: 'Reach Tahmid directly on Telegram for serious partnerships and private Inner Circle entry.',
    iconName: 'telegram',
  },
];

export const TAHMID_PROFILES: ProfilePersona[] = [
  {
    id: 'hustler-bachelors',
    brand: 'Hustler Bachelors',
    tagline: 'Financial Freedom & High-Leverage Wealth Systems',
    focus: 'Forex Trading • Crypto Airdrops • AI Tools • Digital Hustles',
    badge: 'Flagship Platform',
    bio: 'Founded by Tahmid to help everyday individuals break free from the 9-5 cycle through mathematical trading edge, zero-capital crypto farming, and automated digital tools.',
    highlights: [
      'Over 12,000+ members across Telegram & YouTube communities',
      'Creator of proprietary web apps: HustlerVault, HustlerDrop, and SignalHustle',
      'Official verified broker partner with Exness & OneRoyal',
      'Zero gatekeeping: 100% transparent trade journals and risk management',
    ],
    socials: [
      { label: 'YouTube (@HustlerBachelors)', url: OFFICIAL_LINKS.youtube },
      { label: 'Telegram Signals', url: OFFICIAL_LINKS.telegramSignals },
      { label: 'Instagram', url: OFFICIAL_LINKS.instagram },
    ],
    accentColor: '#F59E0B',
  },
  {
    id: 'bachelor-of-tahmid',
    brand: 'Bachelor Tahmid',
    tagline: 'Raw Dhaka Vlogs & Real Stories (Thafazzal Islam Thamed)',
    focus: 'Dhaka Bachelor Life • Street Food Hunts • Budget Challenges • Real Stories',
    badge: 'Personal Vlogging Showcase',
    bio: 'Official showcase of Bachelor Tahmid (Thafazzal Islam Thamed) — raw, unfiltered Dhaka bachelor life, street food hunts, budget survival challenges, and real relatable stories from Mirpur-12, Dhaka.',
    highlights: [
      'Official Showcase Website: bachelortahmid.netlify.app',
      'Authentic documentation of urban bachelor life, street food reviews, and daily challenges',
      'Ground-up authentic storytelling showing real struggles, discipline, and hustle in Dhaka',
      'Direct personal connection with the core audience and lifestyle vlogging fans',
    ],
    socials: [
      { label: 'Official Website (bachelortahmid.netlify.app)', url: OFFICIAL_LINKS.bachelorTahmid },
      { label: 'Personal Instagram', url: OFFICIAL_LINKS.instagram },
      { label: 'Personal Telegram (@ChallengeKing)', url: OFFICIAL_LINKS.contactTelegram },
    ],
    accentColor: '#3B82F6',
  },
  {
    id: 'respawn-tahmid',
    brand: 'Respawn Tahmid',
    tagline: 'Gaming, Daily Livestreams & Esports Highlights',
    focus: 'Gaming Livestreams • Gameplay Highlights • Community Matches • Multi-Platform',
    badge: 'Gaming Brand',
    bio: 'Join Respawn Tahmid for daily gaming livestreams, high-octane gameplay, highlights, and community gaming across YouTube, Twitch, Kick, TikTok, Instagram, and Discord.',
    highlights: [
      'Official Gaming Website: respawntahmid.netlify.app',
      'Daily gaming streams, tactical team plays, and variety entertainment',
      'Active multi-platform gaming community on YouTube, Discord, and Twitch',
      'Sharpening lightning reflexes, focus, and strategic thinking under pressure',
    ],
    socials: [
      { label: 'Official Website (respawntahmid.netlify.app)', url: OFFICIAL_LINKS.respawnTahmid },
      { label: 'Gaming Livestreams', url: OFFICIAL_LINKS.respawnTahmid },
      { label: 'Community Hub', url: OFFICIAL_LINKS.contactTelegram },
    ],
    accentColor: '#EF4444',
  },
];

export const TAHMID_WEB_TOOLS: WebTool[] = [
  {
    id: 'hustler-vault',
    name: 'HustlerVault',
    tagline: 'Centralized Hub for High-Yield Digital Hustles & Prompt Vaults',
    url: OFFICIAL_LINKS.hustlerVault,
    category: 'Notion & Systems Vault',
    badge: 'Official Web App',
    description:
      'Curated operational templates, AI prompts, Notion productivity dashboards, and step-by-step income blueprints designed for fast execution.',
    features: [
      'Instant access to battle-tested AI prompts for Gemini & ChatGPT',
      'Freelance client acquisition cold outreach scripts',
      'Digital asset packaging frameworks',
      'Free online hosting on Netlify with fast loading times',
    ],
    status: 'Live & Operational',
  },
  {
    id: 'hustler-drop',
    name: 'HustlerDrop',
    tagline: 'Zero-Dollar Crypto Airdrop Tracker & Activity Monitor',
    url: OFFICIAL_LINKS.hustlerDrop,
    category: 'Airdrop Monitoring',
    badge: 'Official Web App',
    description:
      'Specialized web tool built by Tahmid to help crypto enthusiasts systematically track testnet interactions, faucet claim timers, and qualification scores.',
    features: [
      'Interactive task tracking across multiple EVM & Solana networks',
      'Daily faucet reminder calendars so you never miss a testnet drop',
      'Sybil risk evaluator to ensure wallet eligibility',
      'Direct links to official testnet portals',
    ],
    status: 'Live & Operational',
  },
  {
    id: 'signal-hustle',
    name: 'SignalHustle',
    tagline: 'Real-Time Technical Setups & Market Opportunity Scanner',
    url: OFFICIAL_LINKS.signalHustle,
    category: 'Technical Signals',
    badge: 'Official Web App',
    description:
      'A streamlined technical dashboard monitoring key orderblocks, fair value gaps, and liquidity sweeps across Gold, Forex pairs, and Cryptos.',
    features: [
      'Algorithmic breakout notifications and pullback alerts',
      'Clear entry zones, stop loss, and multiple take profit targets',
      'Integrated risk-to-reward calculation on every setup',
      'Direct sync with Bachelor Traders Telegram alerts',
    ],
    status: 'Live & Operational',
  },
];

export const BROKER_PARTNERS: BrokerPartner[] = [
  {
    id: 'exness',
    name: 'Exness',
    badge: 'Top Rated Global Broker',
    logo: '/assets/aistudio/icon_512x512_3eb931d3e5_6b06c7fe_6b06c7fe.png',
    tagline: 'Instant Automated Withdrawals, 0.0 Pip Raw Spreads & 1:Unlimited Leverage',
    rating: 4.9,
    reviewsCount: 38400,
    minDeposit: '$10',
    leverage: '1:Unlimited (Up to 1:2000)',
    spreadFrom: '0.0 pips',
    licenses: ['FCA (UK)', 'CySEC (EU)', 'FSA', 'FSCA'],
    perks: [
      'Zero overnight swap fees on Gold (XAUUSD) & major crypto pairs',
      'Instant automated withdrawals (funds in crypto wallet or bank in under 60 seconds)',
      'Raw Spread & Zero accounts with ultra-tight market execution',
      'Supports MetaTrader 4, MetaTrader 5, and intuitive Exness mobile app',
      'Guaranteed negative balance protection',
    ],
    referralCode: 'bq9sl174wq',
    referralUrl: OFFICIAL_LINKS.exnessAffiliate,
    depositBonus: 'VIP 0% Swap Privilege + 24/7 Priority Channel Support',
    bestFor: 'Gold scalpers, day traders, and high-frequency algorithms',
    accountTypes: [
      { type: 'Raw Spread', spread: 'From 0.0 pips', commission: 'Up to $3.50/lot', minDeposit: '$200' },
      { type: 'Zero Account', spread: '0.0 pips on top 30 pairs', commission: 'From $0.2/lot', minDeposit: '$200' },
      { type: 'Standard', spread: 'From 0.3 pips', commission: '$0 commission', minDeposit: '$10' },
      { type: 'Standard Cent', spread: 'From 0.3 pips', commission: '$0 commission', minDeposit: '$10' },
    ],
    setupGuide: [
      { step: 1, title: 'Open Official Partner Link', instruction: 'Navigate to https://one.toexness.com/a/bq9sl174wq and click Register.' },
      { step: 2, title: 'Confirm Partner Code', instruction: 'Ensure partner code bq9sl174wq is attached to receive VIP zero-swap benefits.' },
      { step: 3, title: 'Complete Verification', instruction: 'Upload proof of identity (passport or national ID) for instant account approval.' },
      { step: 4, title: 'Deposit & Connect MT4/MT5', instruction: 'Fund as little as $10 via USDT, bank transfer, or card and begin trading with zero lag.' },
    ],
  },
  {
    id: 'oneroyal',
    name: 'OneRoyal',
    badge: '100% Deposit Bonus Partner',
    logo: '/assets/aistudio/One-Royal-logo_13e7b0f5_13e7b0f5.png',
    tagline: 'Multi-Regulated Institutional Liquidity, ECN Raw Spreads & 100% Bonus',
    rating: 4.8,
    reviewsCount: 16200,
    minDeposit: '$50',
    leverage: 'Up to 1:500',
    spreadFrom: '0.0 pips',
    licenses: ['ASIC (Australia)', 'CySEC (EU)', 'VFSC', 'FSA'],
    perks: [
      '100% Deposit Match Bonus (as provided through our official partner link)',
      'True institutional ECN pricing with zero manipulation',
      'OneRoyal Copy Trading: Automatically copy verified profitable signal providers',
      'Access to over 500+ instruments: Forex, Indices, Energies, Metals, and Crypto',
      'Exclusive Hustler Bachelors rebate program and private mentorship group',
    ],
    referralCode: '18060',
    referralUrl: OFFICIAL_LINKS.oneRoyalAffiliate,
    depositBonus: '100% Deposit Bonus available through our official registration link',
    bestFor: 'Copy trading, swing trading, and multi-asset accounts',
    accountTypes: [
      { type: 'ECN Raw', spread: 'From 0.0 pips', commission: '$3.50/side', minDeposit: '$100' },
      { type: 'Classic Zero Commission', spread: 'From 1.0 pip', commission: '$0 commission', minDeposit: '$50' },
      { type: 'VIP Institutional', spread: 'From 0.0 pips', commission: '$2.00/side', minDeposit: '$5,000' },
    ],
    setupGuide: [
      { step: 1, title: 'Click Official OneRoyal Link', instruction: 'Go to https://vc.cabinet.oneroyal.com/links/go/18060 to access the registration portal.' },
      { step: 2, title: 'Apply Partner Link 18060', instruction: 'Register under partner code 18060 to lock in the 100% deposit bonus eligibility.' },
      { step: 3, title: 'Select ECN or Classic', instruction: 'Choose between ECN Raw (for scalpers) or Classic account (zero commission).' },
      { step: 4, title: 'Claim Deposit Bonus', instruction: 'Make your qualifying deposit and opt-in to double your initial trading margin.' },
    ],
  },
];

export const AIRDROP_LIST: AirdropProject[] = [
  {
    id: 'monad',
    name: 'Monad Network',
    tickerOrSymbol: 'MONAD',
    stage: 'Active Testnet',
    cost: '100% Free ($0)',
    category: 'Layer 1',
    potential: 'Tier 1 ($1,000 - $5,000+)',
    deadline: 'Q2 - Q3 2025',
    difficulty: 'Beginner',
    description:
      'Massive $225M-funded ultra-performance Layer 1 EVM with 10,000 TPS. Testnet active with zero real money needed. Claim free testnet faucet tokens and execute routine swaps & smart contract interactions.',
    faucetUrl: 'https://testnet.monad.xyz',
    ecosystemUrl: 'https://monad.xyz',
    tasks: [
      {
        id: 'monad-1',
        title: 'Request free testnet tokens from official Monad Discord or Faucet',
        link: 'https://testnet.monad.xyz',
        type: 'faucet',
        hint: 'Drop your EVM/MetaMask address into the faucet every 24 hours to collect gas tokens.',
      },
      {
        id: 'monad-2',
        title: 'Perform 3-5 swaps on Monad decentralized exchange testnets',
        link: 'https://testnet.monad.xyz',
        type: 'swap',
        hint: 'Swap MONAD to test USDT, wrapped tokens, and add liquidity to pools with 0 actual cost.',
      },
      {
        id: 'monad-3',
        title: 'Deploy a no-code testnet smart contract via Thirdweb or Remix',
        link: 'https://thirdweb.com',
        type: 'daily',
        hint: 'Use Thirdweb 1-click contract deployment template to boost on-chain activity tier.',
      },
      {
        id: 'monad-4',
        title: 'Join Monad community Discord & claim member role',
        link: 'https://discord.gg/monad',
        type: 'social',
        hint: 'Participate weekly in community discussions to keep active sybil-resistant score high.',
      },
    ],
  },
  {
    id: 'berachain',
    name: 'Berachain (bArtio v2)',
    tickerOrSymbol: 'BERA',
    stage: 'Confirmed Token',
    cost: '100% Free ($0)',
    category: 'Layer 1',
    potential: 'Tier 1 ($1,000 - $5,000+)',
    deadline: 'Mainnet Imminent',
    difficulty: 'Beginner',
    description:
      'High-profile DeFi-native blockchain powered by Proof-of-Liquidity with $142M VC funding. Entire testnet is free via bArtio faucet.',
    faucetUrl: 'https://bartio.faucet.berachain.com',
    ecosystemUrl: 'https://berachain.com',
    tasks: [
      {
        id: 'bera-1',
        title: 'Claim testnet $BERA from official bArtio Faucet',
        link: 'https://bartio.faucet.berachain.com',
        type: 'faucet',
        hint: 'Claim every 8 hours. Needs at least 0.001 ETH on mainnet for anti-bot validation.',
      },
      {
        id: 'bera-2',
        title: 'Swap $BERA for $HONEY on BEX (Decentralized Exchange)',
        link: 'https://bartio.bex.berachain.com',
        type: 'swap',
        hint: 'Swap 0.05 BERA to HONEY to gain DEX interaction points.',
      },
      {
        id: 'bera-3',
        title: 'Mint $HONEY and deposit into Bend (Lending Market)',
        link: 'https://bartio.bend.berachain.com',
        type: 'daily',
        hint: 'Deposit HONEY or borrow WBTC on Bend testnet to trigger lending protocol footprint.',
      },
      {
        id: 'bera-4',
        title: 'Complete Galxe & Discord community questline',
        link: 'https://galxe.com/berachain',
        type: 'social',
        hint: 'Claim digital loyalty credentials verifying you are a genuine human testnet user.',
      },
    ],
  },
  {
    id: 'grass',
    name: 'Grass Network (Season 2)',
    tickerOrSymbol: 'GRASS',
    stage: 'Daily Farm',
    cost: '100% Free ($0)',
    category: 'DePIN',
    potential: 'Tier 2 ($400 - $2,000)',
    deadline: 'Season Ongoing',
    difficulty: 'Beginner',
    description:
      'Zero-work passive income DePIN protocol. Users earn network rewards by sharing unused internet bandwidth via a lightweight verified browser extension.',
    ecosystemUrl: 'https://getgrass.io',
    tasks: [
      {
        id: 'grass-1',
        title: 'Create free account on GetGrass and connect Solana wallet',
        link: 'https://getgrass.io',
        type: 'daily',
        hint: 'Use a burner or everyday Solana wallet (Phantom or Solflare).',
      },
      {
        id: 'grass-2',
        title: 'Install Grass Desktop Node or Chrome Web Extension',
        link: 'https://getgrass.io',
        type: 'daily',
        hint: 'Leaves zero trace, uses less than 0.5% bandwidth, runs passively in background.',
      },
      {
        id: 'grass-3',
        title: 'Maintain 100+ uptime hours weekly for tier multiplier boost',
        link: 'https://getgrass.io/dashboard',
        type: 'daily',
        hint: 'Desktop node gives 2x point bonus compared to basic browser extension.',
      },
    ],
  },
  {
    id: 'farcaster',
    name: 'Farcaster & Warpcast',
    tickerOrSymbol: 'FAR / WARP',
    stage: 'Active Testnet',
    cost: 'Low Gas (<$5)',
    category: 'SocialFi',
    potential: 'Tier 1 ($1,000 - $5,000+)',
    deadline: 'Rolling Airdrops',
    difficulty: 'Beginner',
    description:
      'The leading decentralized social network where top builders, founders, and crypto funds hang out. Historically spawned multiple $5k+ retrodrops like DEGEN, MOXIE, and HAM.',
    ecosystemUrl: 'https://warpcast.com',
    tasks: [
      {
        id: 'warp-1',
        title: 'Set up Warpcast mobile profile & claim username',
        link: 'https://warpcast.com',
        type: 'social',
        hint: 'Verify telephone or connect Base wallet for anti-bot verified green badge.',
      },
      {
        id: 'warp-2',
        title: 'Engage in active channels (/base, /airdrops, /crypto)',
        link: 'https://warpcast.com',
        type: 'daily',
        hint: 'Post 2-3 genuine thoughts or hustler updates daily to earn community tip allowances.',
      },
      {
        id: 'warp-3',
        title: 'Interact with 5 Frames (interactive mini-apps on Farcaster)',
        link: 'https://warpcast.com',
        type: 'daily',
        hint: 'Mint free gasless community NFTs and claim daily token faucets via Frames.',
      },
    ],
  },
];

export const LIVE_TRADE_SIGNALS: TradeSignal[] = [
  {
    id: 'gold-xauusd',
    asset: 'XAU/USD (Gold)',
    market: 'Commodities',
    direction: 'LONG',
    status: 'ACTIVE',
    entryZone: '2,642.50 - 2,646.00',
    stopLoss: '2,632.00',
    takeProfit1: '2,660.00',
    takeProfit2: '2,678.00',
    takeProfit3: '2,710.00',
    riskReward: '1 : 3.4',
    confidence: 91,
    analysis:
      'Bullish structural order-block retest on the 4H timeframe. Massive liquidity sweep below 2,638 followed by aggressive institutional displacement upward.',
    timeframe: '4H / 1D',
    timestamp: 'Today, 08:30 UTC',
  },
  {
    id: 'sol-usdt',
    asset: 'SOL/USDT (Solana)',
    market: 'Crypto',
    direction: 'LONG',
    status: 'TARGET 1 HIT',
    entryZone: '$178.50 - $182.00',
    stopLoss: '$169.50',
    takeProfit1: '$198.00 (Hit)',
    takeProfit2: '$215.00',
    takeProfit3: '$240.00',
    riskReward: '1 : 3.8',
    confidence: 88,
    analysis:
      'Consolidation breakout above key descending trendline with surge in spot volume. DEX volume exceeding all competitors. Trail stop loss to breakeven.',
    timeframe: '1D',
    timestamp: 'Yesterday, 14:15 UTC',
  },
  {
    id: 'eur-usd',
    asset: 'EUR/USD',
    market: 'Forex',
    direction: 'SHORT',
    status: 'PENDING ENTRY',
    entryZone: '1.0885 - 1.0910',
    stopLoss: '1.0945',
    takeProfit1: '1.0820',
    takeProfit2: '1.0760',
    takeProfit3: '1.0690',
    riskReward: '1 : 2.9',
    confidence: 85,
    analysis:
      'Fair value gap fill on daily chart rejected at 200 EMA resistance. US macroeconomic yield divergence favors US Dollar strength through weekly close.',
    timeframe: '1H / 4H',
    timestamp: 'Today, 11:45 UTC',
  },
  {
    id: 'btc-usdt',
    asset: 'BTC/USDT (Bitcoin)',
    market: 'Crypto',
    direction: 'LONG',
    status: 'ACTIVE',
    entryZone: '$87,400 - $88,600',
    stopLoss: '$85,200',
    takeProfit1: '$92,500',
    takeProfit2: '$96,800',
    takeProfit3: '$104,000',
    riskReward: '1 : 4.2',
    confidence: 93,
    analysis:
      'Bull flag continuation pattern following post-halving institutional ETF net inflows. Open interest resetting healthily with negative funding rates on key exchanges.',
    timeframe: 'Daily',
    timestamp: 'Today, 06:10 UTC',
  },
];

export const SIDE_HUSTLE_VAULT: SideHustleBlueprint[] = [
  {
    id: 'faceless-media',
    title: 'AI Faceless Shorts & TikTok Media Brand',
    subtitle: 'Generate high-retention finance, trading & motivational video shorts with zero camera time',
    monthlyPotential: '$2,500 - $8,000 / mo',
    capitalNeeded: '$0 Upfront',
    setupTime: '2 - 3 Days',
    overview:
      'Short-form vertical video (TikTok, YouTube Shorts, Instagram Reels) has massive organic reach. Use free AI script generators, natural voice synthesis, and curated stock footage to build an audience and monetize with affiliate brokers.',
    toolsUsed: ['ChatGPT / Gemini', 'CapCut (Free)', 'ElevenLabs / Free TTS', 'Pexels / Pixabay'],
    monetization:
      'Affiliate broker links (Exness/OneRoyal earn $5-$25/lot or CPA), YouTube AdSense, sponsored software tools.',
    proTip:
      'Post 2 shorts per day consistently for 30 days. The algorithm frequently surfaces videos 2-3 weeks after uploading.',
    steps: [
      {
        stepNumber: 1,
        title: 'Generate Viral Script Hooks with AI',
        action: 'Use Gemini or ChatGPT with our high-retention hook prompt.',
        promptTemplate:
          'Act as an elite short-form retention editor. Write 5 high-converting 30-second video scripts exploring how a beginner turned $100 into financial independence using zero-capital airdrops and forex risk management. Structure: 3-second psychological hook, 20-second rapid breakdown, 7-second clear CTA to check link in bio.',
      },
      {
        stepNumber: 2,
        title: 'Voiceover & Auto-Captions in CapCut',
        action:
          'Import script into CapCut. Click Text to Speech and select a natural voice, then click Auto Captions with clean contrast highlights.',
      },
      {
        stepNumber: 3,
        title: 'Overlay B-Roll & Visual Pattern Interrupts',
        action:
          'Use free stock video of charts, laptops, and cityscapes every 2-3 seconds to keep viewer attention high.',
      },
      {
        stepNumber: 4,
        title: 'Attach Monetization Bio-Link',
        action:
          'Direct viewers to your free Telegram channel or official broker link where they get free trading education.',
      },
    ],
  },
  {
    id: 'local-ai-agency',
    title: 'AI Local Business Outreach & Missed-Call Assistant',
    subtitle: 'Help dentists, roofers & contractors turn missed calls into bookings with AI SMS automations',
    monthlyPotential: '$3,500 - $10,000 / mo',
    capitalNeeded: '$0 Upfront',
    setupTime: '4 - 5 Days',
    overview:
      'Over 60% of calls to local businesses go unanswered during busy hours. Offer a simple setup where an automated assistant texts callers immediately to capture appointments.',
    toolsUsed: ['Google Maps', 'Make.com / Zapier', 'Gemini / Claude API', 'Twilio'],
    monetization: 'Charge $500 setup fee + $299/month recurring retainer per local business.',
    proTip:
      'Offer a 14-day free trial where you only charge if the bot books at least 3 paying customers.',
    steps: [
      {
        stepNumber: 1,
        title: 'Find 50 Local Businesses on Google Maps',
        action: 'Search for high-ticket service niches (Roofing, Cosmetic Dentistry, HVAC, Med Spas) in mid-sized cities.',
      },
      {
        stepNumber: 2,
        title: 'Call them after hours to test their response',
        action: 'Note if they have no automated SMS response — that is immediate proof of lost revenue.',
      },
      {
        stepNumber: 3,
        title: 'Send a Short Video Demonstration',
        action: 'Show the automated bot replying in 10 seconds and booking a demo appointment on a live calendar.',
      },
      {
        stepNumber: 4,
        title: 'Deploy and Retain',
        action: 'Connect the webhook in Make.com and collect your recurring monthly retainer.',
      },
    ],
  },
  {
    id: 'prompt-vaults',
    title: 'Niche Digital Notion Playbooks & Prompt Vaults',
    subtitle: 'Package specialized SOPs and workflows for real estate agents, recruiters, or traders',
    monthlyPotential: '$1,200 - $4,500 / mo',
    capitalNeeded: '$0 Upfront',
    setupTime: '1 - 2 Days',
    overview:
      'People happily pay $19 - $47 for an organized, tested bundle that saves them weeks of trial and error. Create a specialized prompt vault (like HustlerVault) and distribute it digitally.',
    toolsUsed: ['Notion (Free)', 'Canva (Free)', 'Gumroad / LemonSqueezy', 'X / Reddit'],
    monetization: 'Direct sales with 95% profit margins, zero shipping, zero physical inventory.',
    proTip:
      'Share free sample workflows on Twitter or Reddit to build an email list, then offer the complete master vault.',
    steps: [
      {
        stepNumber: 1,
        title: 'Curate 50 battle-tested prompts for a specific audience',
        action: 'Focus on professionals who already invest in software tools (traders, agencies, real estate).',
      },
      {
        stepNumber: 2,
        title: 'Build a clean Notion workspace',
        action: 'Organize by category: Client Outreach, Objection Handling, Content Systems, and Financial Tracking.',
      },
      {
        stepNumber: 3,
        title: 'Create Clean Visual Mockups',
        action: 'Design a clean iPad or laptop mockup illustrating the dashboard features.',
      },
      {
        stepNumber: 4,
        title: 'Launch on Gumroad and drive organic traffic',
        action: 'Write detailed case studies explaining how each prompt saves hours of manual work.',
      },
    ],
  },
];

export const FIELD_GUIDES: GuideManual[] = [
  {
    id: 'security',
    title: 'The Anti-Drain Security Guide: Protect Your Crypto & Airdrop Bags',
    readTime: '6 min read',
    category: 'Crypto Security',
    summary:
      'The most critical rule in Web3 is keeping your main capital isolated from the wallets you use for daily testnet hunting. Master the 3-wallet isolation protocol.',
    highlights: [
      'The 3-Wallet Isolation Architecture: Cold Vault, Staking Hub, & Disposable Burner',
      'How malicious permit2 phishing signatures work and how to identify suspicious requests',
      'Official bookmark hygiene to prevent search engine ad phishing mirrors',
      'Using Revoke.cash weekly to cancel dormant smart contract allowances',
    ],
    fullGuideContent: [
      'Rule #1: Never mix your long-term storage wallet with any wallet that connects to dApps or airdrop portals.',
      'Wallet 1 (The Cold Vault): Ledger / Trezor / Tangem that NEVER signs any smart contracts or visits experimental websites.',
      'Wallet 2 (The Hub): Receives funds from centralized exchanges and bridges between chains.',
      'Wallet 3 (The Burner): Holds max $20-$50 in gas for daily testnet swaps and experimental airdrop faucets. If drained, your real capital is 100% untouched.',
      'Always verify URLs letter by letter or use official links from CoinMarketCap / DefiLlama.',
    ],
  },
  {
    id: 'risk',
    title: 'The 1% Rule: Why Mathematics Guarantees Account Longevity',
    readTime: '7 min read',
    category: 'Forex',
    summary:
      'Trading is not gambling when your position sizing is mathematically calculated before every single entry. Here is how professional prop firm traders survive losing streaks.',
    highlights: [
      'The mathematics of drawdown: Why a 50% loss requires a 100% gain just to break even',
      'Calculating lot size based on dollar risk rather than arbitrary lot guesses',
      'Why a 40% win rate can make you profitable if your Risk-to-Reward ratio is 1:2.5 or higher',
      'Rules for handling trading psychology after consecutive losses',
    ],
    fullGuideContent: [
      'A trader risking 10% per trade will statistically wipe out within 6 months during a standard market regime shift.',
      'A trader risking 1% per trade can withstand a 15-trade losing streak and still retain over 85% of their starting equity.',
      'Always calculate your Lot Size with our built-in Hustler Calculator before pressing Buy or Sell on Exness or OneRoyal.',
      'Never move your stop loss further away after entering a position. Accept the calculated risk before entering.',
    ],
  },
  {
    id: 'sybil',
    title: 'Airdrop Sybil-Resistance: How to Farm Safely Without Being Disqualified',
    readTime: '5 min read',
    category: 'Airdrops',
    summary:
      'Airdrop foundations use clustering algorithms to disqualify farmers. Learn how to maintain natural on-chain footprints that secure Tier 1 allocations.',
    highlights: [
      'Avoid circular funding: Never fund multiple farming wallets from the same personal address',
      'Randomize interaction timestamps, gas amounts, and swap transaction sizes',
      'Holding small balances of native ETH/SOL to demonstrate genuine user behavior',
      'Gitcoin Passport, Layer3, and Galxe human verification credential setup',
    ],
    fullGuideContent: [
      'Always fund secondary farming wallets directly from a centralized exchange (e.g. OKX, Binance, Bybit) because exchange hot-wallets have pooled withdrawal outputs that cannot be tracked as a single entity.',
      'Vary transaction frequency. Automated scripts execute every few seconds; humans interact randomly across days and weeks.',
      'Engage with multi-protocol ecosystems: do not just swap on 1 dApp 50 times in one hour.',
    ],
  },
];

export const COMMUNITY_FAQS = [
  {
    question: 'Who is Tahmid and what is Hustler Bachelors?',
    answer:
      'Tahmid is a full-time trader, crypto researcher, and online entrepreneur. Hustler Bachelors is his public educational ecosystem, bringing together real-world trading strategies, zero-capital crypto airdrop guides, and high-leverage AI tools to help anyone build sovereign online income streams.',
  },
  {
    question: 'What are Bachelor of Tahmid and Race from Tahmid?',
    answer:
      'Bachelor of Tahmid is Tahmids personal lifestyle, mindset, and behind-the-scenes creator brand documenting his life and entrepreneurial routines. Race from Tahmid is his motorsport and automotive brand, highlighting precision driving, track days, and the overlap between high-performance racing discipline and trading psychology.',
  },
  {
    question: 'How do I access Tahmids custom web tools (HustlerVault, HustlerDrop, SignalHustle)?',
    answer:
      'All three tools are live and freely accessible via their official links: HustlerVault (https://hustlervault.netlify.app/) for digital prompt playbooks and Notion templates, HustlerDrop (https://hustlerdrops.netlify.app/) for crypto airdrop tracking, and SignalHustle (https://signalhustle.netlify.app/) for technical market alerts.',
  },
  {
    question: 'How do Exness and OneRoyal work with Hustler Bachelors?',
    answer:
      'Both are officially vetted, tier-1 regulated broker partners. Exness (https://one.toexness.com/a/bq9sl174wq, code bq9sl174wq) offers 0.0 pip raw spreads, 1:unlimited leverage, instant crypto withdrawals, and zero overnight swap fees on Gold. OneRoyal (https://vc.cabinet.oneroyal.com/links/go/18060, code 18060) provides multi-regulated ECN liquidity and an exclusive 100% deposit match bonus for new traders.',
  },
  {
    question: 'How can I contact Tahmid directly?',
    answer:
      'You can reach Tahmid directly via WhatsApp at +8801904771432 (https://wa.me/8801904771432), on Telegram at @ChallengeKing (https://t.me/ChallengeKing), or by email at managerofbachelor@gmail.com.',
  },
];
