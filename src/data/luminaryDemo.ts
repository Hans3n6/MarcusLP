// ─── Types ─────────────────────────────────────────────────────

export interface Brand {
  name: string;
  domain: string;
  isTracked: boolean;
}

export interface SOVRecord {
  brand: string;
  shareOfVoice: number;
  appearanceRate: number;
  avgSentiment: number;
  recStrength: number;
  citationRate: number;
  mentions: number;
}

export interface EngineBreakdown {
  brand: string;
  chatgpt: number;
  perplexity: number;
  claude: number;
}

export interface DailyTrend {
  date: string;
  sov: number;
  sentiment: number;
}

export interface Citation {
  engine: string;
  total: number;
  owned: number;
  ownedRate: number;
}

export interface Insight {
  icon: string;
  text: string;
}

export interface LuminaryDemoData {
  category: string;
  trackedBrand: string;
  trackedDomain: string;
  dateRange: string;
  totalQueries: number;
  totalSamples: number;
  sovRankings: SOVRecord[];
  engineBreakdown: EngineBreakdown[];
  dailyTrend: DailyTrend[];
  citations: Citation[];
  insights: Insight[];
  discoveredBrands: number;
}

// ─── Sample Data ───────────────────────────────────────────────

export const DEMO_DATA: LuminaryDemoData = {
  category: "SEO Tools",
  trackedBrand: "Ahrefs",
  trackedDomain: "ahrefs.com",
  dateRange: "Mar 1 \u2013 Mar 14, 2026",
  totalQueries: 60,
  totalSamples: 540,
  discoveredBrands: 27,

  sovRankings: [
    { brand: "Ahrefs",         shareOfVoice: 28.4, appearanceRate: 87, avgSentiment:  0.82, recStrength: 4.2, citationRate: 34, mentions: 87 },
    { brand: "SEMrush",        shareOfVoice: 24.1, appearanceRate: 91, avgSentiment:  0.71, recStrength: 3.8, citationRate: 28, mentions: 73 },
    { brand: "Moz",            shareOfVoice: 15.3, appearanceRate: 62, avgSentiment:  0.45, recStrength: 3.1, citationRate: 12, mentions: 47 },
    { brand: "Surfer SEO",     shareOfVoice: 12.7, appearanceRate: 54, avgSentiment:  0.68, recStrength: 3.5, citationRate:  8, mentions: 39 },
    { brand: "SE Ranking",     shareOfVoice:  8.2, appearanceRate: 41, avgSentiment:  0.52, recStrength: 3.0, citationRate:  3, mentions: 25 },
    { brand: "Ubersuggest",    shareOfVoice:  4.8, appearanceRate: 33, avgSentiment:  0.38, recStrength: 2.7, citationRate:  5, mentions: 15 },
    { brand: "Screaming Frog", shareOfVoice:  3.2, appearanceRate: 28, avgSentiment:  0.61, recStrength: 3.3, citationRate:  2, mentions: 10 },
    { brand: "Majestic",       shareOfVoice:  1.9, appearanceRate: 18, avgSentiment:  0.35, recStrength: 2.4, citationRate:  1, mentions:  6 },
    { brand: "SpyFu",          shareOfVoice:  1.1, appearanceRate: 12, avgSentiment:  0.42, recStrength: 2.6, citationRate:  1, mentions:  3 },
    { brand: "Mangools",       shareOfVoice:  0.3, appearanceRate:  8, avgSentiment:  0.55, recStrength: 2.8, citationRate:  0, mentions:  1 },
  ],

  engineBreakdown: [
    { brand: "Ahrefs",      chatgpt: 92, perplexity: 85, claude: 83 },
    { brand: "SEMrush",     chatgpt: 95, perplexity: 88, claude: 90 },
    { brand: "Moz",         chatgpt: 68, perplexity: 55, claude: 62 },
    { brand: "Surfer SEO",  chatgpt: 48, perplexity: 62, claude: 51 },
    { brand: "SE Ranking",  chatgpt: 35, perplexity: 48, claude: 40 },
    { brand: "Ubersuggest", chatgpt: 38, perplexity: 25, claude: 35 },
  ],

  dailyTrend: [
    { date: "Mar 1",  sov: 27.1, sentiment: 0.79 },
    { date: "Mar 2",  sov: 27.8, sentiment: 0.81 },
    { date: "Mar 3",  sov: 28.3, sentiment: 0.80 },
    { date: "Mar 4",  sov: 27.5, sentiment: 0.78 },
    { date: "Mar 5",  sov: 29.1, sentiment: 0.83 },
    { date: "Mar 6",  sov: 28.7, sentiment: 0.82 },
    { date: "Mar 7",  sov: 28.0, sentiment: 0.80 },
    { date: "Mar 8",  sov: 27.4, sentiment: 0.79 },
    { date: "Mar 9",  sov: 28.9, sentiment: 0.84 },
    { date: "Mar 10", sov: 29.6, sentiment: 0.85 },
    { date: "Mar 11", sov: 28.2, sentiment: 0.81 },
    { date: "Mar 12", sov: 27.9, sentiment: 0.80 },
    { date: "Mar 13", sov: 29.3, sentiment: 0.83 },
    { date: "Mar 14", sov: 28.4, sentiment: 0.82 },
  ],

  citations: [
    { engine: "ChatGPT",    total: 312, owned:  98, ownedRate: 31.4 },
    { engine: "Perplexity",  total: 389, owned: 156, ownedRate: 40.1 },
    { engine: "Claude",      total: 146, owned:  33, ownedRate: 22.6 },
  ],

  insights: [
    { icon: "\uD83C\uDFC6", text: "Ahrefs ranked #1 out of 27 discovered brands with 28.4% share of voice" },
    { icon: "\u2705",       text: "Sentiment lead: Ahrefs (+0.82) outperforms competitor average (+0.54) by 52%" },
    { icon: "\u26A0\uFE0F", text: "Citation gap: Perplexity cites Ahrefs 40.1% of the time vs only 22.6% for Claude" },
    { icon: "\uD83D\uDCCA", text: "SEMrush appears more frequently (91%) but Ahrefs has stronger recommendation strength (4.2 vs 3.8)" },
    { icon: "\uD83D\uDD0D", text: "27 brands auto-discovered across 60 queries \u2014 5 new competitors found this week" },
  ],
};
