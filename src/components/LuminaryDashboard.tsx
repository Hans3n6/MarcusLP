'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, MessageSquare, Link2, Trophy, Zap } from 'lucide-react';
import type { LuminaryDemoData, SOVRecord } from '@/data/luminaryDemo';

const cardClass =
  'bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700';
const sectionTitleClass = 'text-xl font-bold text-white mb-4';

const fadeUp = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: '-40px' } as const,
  transition: { duration: 0.5 },
};

/* ------------------------------------------------------------------ */
/*  1. KPI Cards                                                      */
/* ------------------------------------------------------------------ */
function KPICards({ data }: { data: LuminaryDemoData }) {
  const tracked = data.sovRankings.find((r) => r.brand === data.trackedBrand);
  if (!tracked) return null;

  const cards = [
    {
      label: 'Rank',
      value: '#1',
      sub: `out of ${data.discoveredBrands} brands`,
      color: 'text-cyan-400',
      icon: <Trophy className="w-5 h-5 text-cyan-400" />,
    },
    {
      label: 'Share of Voice',
      value: `${tracked.shareOfVoice}%`,
      sub: tracked.shareOfVoice > 25 ? 'Leading' : 'Growing',
      color: tracked.shareOfVoice > 25 ? 'text-green-400' : 'text-yellow-400',
      icon: <TrendingUp className="w-5 h-5 text-green-400" />,
    },
    {
      label: 'Avg Sentiment',
      value: `+${tracked.avgSentiment}`,
      sub: 'positive',
      color: 'text-purple-400',
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
      bar: tracked.avgSentiment,
    },
    {
      label: 'Citation Rate',
      value: `${tracked.citationRate}%`,
      sub: 'across all engines',
      color: 'text-cyan-400',
      icon: <Link2 className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4" {...fadeUp}>
      {cards.map((c) => (
        <div
          key={c.label}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700"
        >
          <div className="flex items-center gap-2 mb-2">
            {c.icon}
            <span className="text-gray-400 text-sm">{c.label}</span>
          </div>
          <p className={`text-3xl font-bold ${c.color}`}>{c.value}</p>
          <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
          {c.bar !== undefined && (
            <div className="mt-2 h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${c.bar * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  2. SOV Rankings - horizontal bar chart                             */
/* ------------------------------------------------------------------ */
function SOVRankings({ data }: { data: LuminaryDemoData }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const maxSOV = Math.max(...data.sovRankings.map((r) => r.shareOfVoice));

  return (
    <motion.div className={cardClass} {...fadeUp}>
      <h2 className={sectionTitleClass}>Share of Voice Rankings</h2>
      <div className="space-y-3">
        {data.sovRankings.map((r, i) => {
          const isTracked = r.brand === data.trackedBrand;
          const isExpanded = expanded === r.brand;
          return (
            <div
              key={r.brand}
              className="cursor-pointer"
              onClick={() => setExpanded(isExpanded ? null : r.brand)}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-300 w-28 sm:w-36 shrink-0 truncate">
                  {r.brand}
                </span>
                <div className="flex-1 relative h-6 bg-slate-700/30 rounded overflow-hidden">
                  <motion.div
                    className={`h-6 rounded ${
                      isTracked
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                        : 'bg-slate-600'
                    }`}
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${(r.shareOfVoice / maxSOV) * 100}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.06 }}
                  />
                </div>
                <span
                  className={`text-sm font-semibold w-14 text-right ${
                    isTracked ? 'text-cyan-400' : 'text-gray-400'
                  }`}
                >
                  {r.shareOfVoice}%
                </span>
              </div>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-0 sm:ml-36 mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-400 pb-2 border-b border-slate-700/40"
                >
                  <div>
                    <span className="block text-gray-500">Appear%</span>
                    <span className="text-white font-medium">
                      {r.appearanceRate}%
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Sentiment</span>
                    <span className="text-white font-medium">
                      +{r.avgSentiment}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Rec Strength</span>
                    <span className="text-white font-medium">
                      {r.recStrength}
                    </span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Citations</span>
                    <span className="text-white font-medium">
                      {r.mentions}
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Engine Breakdown - grouped horizontal bars                      */
/* ------------------------------------------------------------------ */
function EngineBreakdown({ data }: { data: LuminaryDemoData }) {
  const engines = [
    { key: 'chatgpt' as const, label: 'ChatGPT', color: 'bg-green-500' },
    { key: 'perplexity' as const, label: 'Perplexity', color: 'bg-blue-500' },
    { key: 'claude' as const, label: 'Claude', color: 'bg-orange-500' },
  ];

  const top6 = data.engineBreakdown.slice(0, 6);

  return (
    <motion.div className={cardClass} {...fadeUp}>
      <h2 className={sectionTitleClass}>Appearance Rate by AI Engine</h2>

      {/* Legend */}
      <div className="flex gap-5 mb-5">
        {engines.map((e) => (
          <div key={e.key} className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className={`w-2.5 h-2.5 rounded-full ${e.color}`} />
            {e.label}
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {top6.map((brand, bi) => {
          const isTracked = brand.brand === data.trackedBrand;
          return (
            <div key={brand.brand}>
              <p
                className={`text-sm mb-1.5 ${
                  isTracked ? 'text-cyan-400 font-semibold' : 'text-gray-300'
                }`}
              >
                {brand.brand}
              </p>
              <div className="space-y-1">
                {engines.map((e, ei) => (
                  <div key={e.key} className="flex items-center gap-2">
                    <div className="flex-1 h-4 bg-slate-700/50 rounded overflow-hidden">
                      <motion.div
                        className={`h-full ${e.color} rounded`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${brand[e.key]}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: bi * 0.05 + ei * 0.08,
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-10 text-right">
                      {brand[e.key]}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  4. SOV Trend - SVG line chart                                      */
/* ------------------------------------------------------------------ */
function SOVTrend({ data }: { data: LuminaryDemoData }) {
  const trend = data.dailyTrend;
  if (trend.length === 0) return null;

  const sovValues = trend.map((d) => d.sov);
  const minY = Math.floor(Math.min(...sovValues) - 2);
  const maxY = Math.ceil(Math.max(...sovValues) + 2);
  const rangeY = maxY - minY || 1;

  const W = 700;
  const H = 220;
  const padL = 44;
  const padR = 24;
  const padT = 20;
  const padB = 35;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const toX = (i: number) => padL + (i / Math.max(trend.length - 1, 1)) * plotW;
  const toY = (v: number) => padT + plotH - ((v - minY) / rangeY) * plotH;

  const points = trend.map((d, i) => `${toX(i)},${toY(d.sov)}`).join(' ');

  const areaPath = [
    `M ${toX(0)},${toY(trend[0].sov)}`,
    ...trend.slice(1).map((d, i) => `L ${toX(i + 1)},${toY(d.sov)}`),
    `L ${toX(trend.length - 1)},${padT + plotH}`,
    `L ${toX(0)},${padT + plotH}`,
    'Z',
  ].join(' ');

  const yTicks = 5;
  const yLabels = Array.from({ length: yTicks + 1 }, (_, i) =>
    minY + (rangeY / yTicks) * i
  );

  const lastPoint = trend[trend.length - 1];

  return (
    <motion.div className={cardClass} {...fadeUp}>
      <h2 className={sectionTitleClass}>Share of Voice Trend (14 Days)</h2>
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ minWidth: 380 }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Horizontal grid lines and Y-axis labels */}
          {yLabels.map((v) => (
            <g key={v}>
              <line
                x1={padL}
                y1={toY(v)}
                x2={W - padR}
                y2={toY(v)}
                stroke="#334155"
                strokeWidth={0.5}
              />
              <text
                x={padL - 8}
                y={toY(v) + 3.5}
                textAnchor="end"
                fill="#64748b"
                fontSize={10}
              >
                {v.toFixed(0)}%
              </text>
            </g>
          ))}

          {/* Area fill */}
          <path d={areaPath} fill="rgba(34,211,238,0.12)" />

          {/* Trend line */}
          <polyline
            points={points}
            fill="none"
            stroke="#22d3ee"
            strokeWidth={2.5}
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Data point dots */}
          {trend.map((d, i) => (
            <circle
              key={i}
              cx={toX(i)}
              cy={toY(d.sov)}
              r={3}
              fill="#22d3ee"
              stroke="#0f172a"
              strokeWidth={1.5}
            />
          ))}

          {/* Current value label at last point */}
          <text
            x={toX(trend.length - 1)}
            y={toY(lastPoint.sov) - 10}
            textAnchor="middle"
            fill="#22d3ee"
            fontWeight="bold"
            fontSize={12}
          >
            {lastPoint.sov}%
          </text>

          {/* X-axis date labels (every other) */}
          {trend.map(
            (d, i) =>
              i % 2 === 0 && (
                <text
                  key={i}
                  x={toX(i)}
                  y={H - 6}
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize={9}
                >
                  {d.date}
                </text>
              )
          )}
        </svg>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  5. Citation Tracking - cards with progress rings                   */
/* ------------------------------------------------------------------ */
function CitationTracking({ data }: { data: LuminaryDemoData }) {
  const engineColors: Record<string, { ring: string; text: string }> = {
    ChatGPT: { ring: 'text-green-500', text: 'text-green-400' },
    Perplexity: { ring: 'text-blue-500', text: 'text-blue-400' },
    Claude: { ring: 'text-orange-500', text: 'text-orange-400' },
  };

  const circumference = 2 * Math.PI * 38;

  return (
    <motion.div {...fadeUp}>
      <h2 className={sectionTitleClass}>Citation Tracking</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.citations.map((c) => {
          const colors = engineColors[c.engine] ?? {
            ring: 'text-cyan-500',
            text: 'text-cyan-400',
          };
          const dashOffset =
            circumference - (c.ownedRate / 100) * circumference;

          return (
            <div
              key={c.engine}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 flex flex-col items-center"
            >
              <p className={`text-sm font-semibold mb-3 ${colors.text}`}>
                {c.engine}
              </p>

              {/* Progress ring */}
              <div className="relative w-24 h-24 mb-3">
                <svg
                  viewBox="0 0 84 84"
                  className="w-full h-full -rotate-90"
                >
                  <circle
                    cx={42}
                    cy={42}
                    r={38}
                    fill="none"
                    stroke="#334155"
                    strokeWidth={6}
                  />
                  <motion.circle
                    cx={42}
                    cy={42}
                    r={38}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={6}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: dashOffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={colors.ring}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                  {c.ownedRate}%
                </span>
              </div>

              <p className="text-2xl font-bold text-white">
                {c.owned}
                <span className="text-gray-500 text-lg">/{c.total}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">owned citations</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  6. Key Insights                                                    */
/* ------------------------------------------------------------------ */
function KeyInsights({ data }: { data: LuminaryDemoData }) {
  return (
    <motion.div className={cardClass} {...fadeUp}>
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-yellow-400" />
        <h2 className="text-xl font-bold text-white">Key Insights</h2>
      </div>
      <div className="space-y-3">
        {data.insights.map((insight, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 bg-slate-700/30 rounded-lg p-3"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
          >
            <span className="text-lg shrink-0">{insight.icon}</span>
            <p className="text-sm text-gray-300 leading-relaxed">
              {insight.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  7. Head-to-Head Comparison                                         */
/* ------------------------------------------------------------------ */
function HeadToHead({ data }: { data: LuminaryDemoData }) {
  const brands = data.sovRankings;

  const defaultBrandB =
    brands.length > 1 && brands[1].brand !== data.trackedBrand
      ? brands[1].brand
      : brands.length > 2
        ? brands[2].brand
        : brands[0].brand;

  const [brandA, setBrandA] = useState(data.trackedBrand);
  const [brandB, setBrandB] = useState(defaultBrandB);

  const recordA = brands.find((b) => b.brand === brandA);
  const recordB = brands.find((b) => b.brand === brandB);

  const metrics: {
    label: string;
    key: keyof SOVRecord;
    suffix: string;
    prefix: string;
  }[] = [
    { label: 'Share of Voice', key: 'shareOfVoice', suffix: '%', prefix: '' },
    { label: 'Appearance Rate', key: 'appearanceRate', suffix: '%', prefix: '' },
    { label: 'Avg Sentiment', key: 'avgSentiment', suffix: '', prefix: '+' },
    { label: 'Rec Strength', key: 'recStrength', suffix: '', prefix: '' },
    { label: 'Citation Rate', key: 'citationRate', suffix: '%', prefix: '' },
  ];

  return (
    <motion.div className={cardClass} {...fadeUp}>
      <h2 className={sectionTitleClass}>Head-to-Head Comparison</h2>

      {/* Brand selectors */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <select
          value={brandA}
          onChange={(e) => setBrandA(e.target.value)}
          className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {brands.map((b) => (
            <option key={b.brand} value={b.brand}>
              {b.brand}
            </option>
          ))}
        </select>
        <span className="text-gray-500 self-center text-sm font-medium">
          vs
        </span>
        <select
          value={brandB}
          onChange={(e) => setBrandB(e.target.value)}
          className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {brands.map((b) => (
            <option key={b.brand} value={b.brand}>
              {b.brand}
            </option>
          ))}
        </select>
      </div>

      {/* Comparison table */}
      {recordA && recordB && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-gray-400 py-2 pr-4 font-medium">
                  Metric
                </th>
                <th className="text-right text-cyan-400 py-2 px-4 font-medium truncate max-w-[100px]">
                  {brandA}
                </th>
                <th className="text-right text-gray-300 py-2 px-4 font-medium truncate max-w-[100px]">
                  {brandB}
                </th>
                <th className="text-right text-gray-400 py-2 pl-4 font-medium">
                  Delta
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m) => {
                const valA = Number(recordA[m.key]);
                const valB = Number(recordB[m.key]);
                const delta = +(valA - valB).toFixed(2);
                const isTrackedA = brandA === data.trackedBrand;

                // Green when delta favors the tracked brand, red otherwise
                const deltaColor =
                  delta === 0
                    ? 'text-gray-500'
                    : (delta > 0 && isTrackedA) ||
                        (delta < 0 && !isTrackedA)
                      ? 'text-green-400'
                      : 'text-red-400';

                return (
                  <tr
                    key={m.label}
                    className="border-b border-slate-700/50"
                  >
                    <td className="text-gray-400 py-2.5 pr-4">{m.label}</td>
                    <td className="text-right text-white py-2.5 px-4 font-medium">
                      {m.prefix}
                      {valA}
                      {m.suffix}
                    </td>
                    <td className="text-right text-gray-300 py-2.5 px-4">
                      {m.prefix}
                      {valB}
                      {m.suffix}
                    </td>
                    <td
                      className={`text-right py-2.5 pl-4 font-semibold ${deltaColor}`}
                    >
                      {delta > 0 ? '+' : ''}
                      {delta}
                      {m.suffix}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Dashboard Component                                           */
/* ------------------------------------------------------------------ */
export default function LuminaryDashboard({
  data,
}: {
  data: LuminaryDemoData;
}) {
  return (
    <div className="space-y-8">
      {/* Dashboard header */}
      <motion.div {...fadeUp}>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Luminary
              </span>{' '}
              Share of Voice
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {data.category} &middot; {data.dateRange}
            </p>
          </div>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>
              <Eye className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
              {data.totalQueries} queries
            </span>
            <span>
              <TrendingUp className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />
              {data.totalSamples} samples
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Tracking{' '}
          <span className="text-cyan-400 font-medium">
            {data.trackedBrand}
          </span>{' '}
          ({data.trackedDomain})
        </p>
      </motion.div>

      {/* 1. KPI Cards */}
      <KPICards data={data} />

      {/* 2. SOV Rankings */}
      <SOVRankings data={data} />

      {/* 3 & 4. Engine Breakdown + SOV Trend side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EngineBreakdown data={data} />
        <SOVTrend data={data} />
      </div>

      {/* 5. Citation Tracking */}
      <CitationTracking data={data} />

      {/* 6 & 7. Key Insights + Head-to-Head side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <KeyInsights data={data} />
        <HeadToHead data={data} />
      </div>
    </div>
  );
}
