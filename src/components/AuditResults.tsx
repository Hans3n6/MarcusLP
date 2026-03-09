'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import AuditScoreGauge from './AuditScoreGauge';
import AuditCategoryCard from './AuditCategoryCard';

// ─── Types ──────────────────────────────────────────────────────────────────────

export interface AuditFinding {
  check: string;
  status: 'pass' | 'fail' | 'warn';
  detail: string;
  recommendation?: string;
}

export interface AuditCategory {
  score: number;
  maxScore: number;
  label: string;
  findings: AuditFinding[];
}

export interface ModelScore {
  score: number;
  grade: string;
  name: string;
  description: string;
  weights: {
    schemaMarkup: number;
    metaTags: number;
    contentStructure: number;
    aiAccessibility: number;
  };
  tips: string[];
}

export interface AuditResponse {
  success: boolean;
  url: string;
  timestamp: string;
  overallScore: number;
  grade: string;
  categories: {
    schemaMarkup: AuditCategory;
    metaTags: AuditCategory;
    contentStructure: AuditCategory;
    aiAccessibility: AuditCategory;
  };
  topRecommendations: string[];
  modelScores?: {
    chatgpt: ModelScore;
    claude: ModelScore;
    perplexity: ModelScore;
    gemini: ModelScore;
  };
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

type ModelKey = 'chatgpt' | 'claude' | 'perplexity' | 'gemini';
type TabKey = 'overall' | ModelKey;

const MODEL_TABS: { key: TabKey; label: string }[] = [
  { key: 'overall', label: 'Overall' },
  { key: 'chatgpt', label: 'ChatGPT' },
  { key: 'claude', label: 'Claude' },
  { key: 'perplexity', label: 'Perplexity' },
  { key: 'gemini', label: 'Gemini' },
];

const CATEGORY_KEY_TO_WEIGHT_KEY: Record<keyof AuditResponse['categories'], keyof ModelScore['weights']> = {
  schemaMarkup: 'schemaMarkup',
  metaTags: 'metaTags',
  contentStructure: 'contentStructure',
  aiAccessibility: 'aiAccessibility',
};

function getScoreColor(score: number): string {
  if (score >= 90) return 'text-green-400';
  if (score >= 70) return 'text-cyan-400';
  if (score >= 50) return 'text-yellow-400';
  return 'text-red-400';
}

function getScoreBorderColor(score: number): string {
  if (score >= 90) return 'border-green-400/30';
  if (score >= 70) return 'border-cyan-400/30';
  if (score >= 50) return 'border-yellow-400/30';
  return 'border-red-400/30';
}

// ─── Component ──────────────────────────────────────────────────────────────────

interface AuditResultsProps {
  results: AuditResponse;
  onReset: () => void;
}

export default function AuditResults({ results, onReset }: AuditResultsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('overall');

  const categoryOrder: (keyof AuditResponse['categories'])[] = [
    'schemaMarkup',
    'metaTags',
    'contentStructure',
    'aiAccessibility',
  ];

  const hasModelScores = !!results.modelScores;
  const isModelTab = activeTab !== 'overall';
  const activeModel = isModelTab && hasModelScores ? results.modelScores![activeTab as ModelKey] : null;

  // Determine displayed score/grade
  const displayScore = activeModel ? activeModel.score : results.overallScore;
  const displayGrade = activeModel ? activeModel.grade : results.grade;
  const displayTitle = activeModel ? `Your ${activeModel.name} Score` : 'Your GEO Score';

  // Determine displayed recommendations
  const displayTips = activeModel ? activeModel.tips : results.topRecommendations;

  function getTabScore(key: TabKey): number | null {
    if (key === 'overall') return results.overallScore;
    if (hasModelScores) return results.modelScores![key as ModelKey].score;
    return null;
  }

  return (
    <div className="space-y-12">
      {/* Model Selector Tabs */}
      {hasModelScores && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto pb-2 -mx-2 px-2"
        >
          <div className="flex gap-2 min-w-max">
            {MODEL_TABS.map((tab) => {
              const tabScore = getTabScore(tab.key);
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {tab.label}
                  {tabScore != null && (
                    <span
                      className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-600 text-slate-300'
                      }`}
                    >
                      {tabScore}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Header & Score Gauge */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            {displayTitle}
          </h2>
          <p className="text-gray-400 mb-8 text-sm break-all">{results.url}</p>
          <AuditScoreGauge score={displayScore} grade={displayGrade} />
          {activeModel && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-sm mt-4 max-w-xl mx-auto"
            >
              {activeModel.description}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overall Tab: Model Comparison Mini-Cards */}
      {!isModelTab && hasModelScores && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4 text-center">Score by AI Model</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(Object.keys(results.modelScores!) as ModelKey[]).map((key) => {
              const model = results.modelScores![key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border ${getScoreBorderColor(model.score)} hover:bg-slate-700/50 transition-all text-center`}
                >
                  <p className="text-sm font-medium text-gray-300 mb-1">{model.name}</p>
                  <p className={`text-2xl font-bold ${getScoreColor(model.score)}`}>{model.score}</p>
                  <p className={`text-sm font-semibold ${getScoreColor(model.score)}`}>{model.grade}</p>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Category Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {categoryOrder.map((key, index) => {
          const cat = results.categories[key];
          const weightKey = CATEGORY_KEY_TO_WEIGHT_KEY[key];
          const weight = activeModel ? activeModel.weights[weightKey] : undefined;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AuditCategoryCard
                label={cat.label}
                score={cat.score}
                maxScore={cat.maxScore}
                findings={cat.findings}
                weight={weight}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Top Recommendations / Model Tips */}
      {displayTips.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`tips-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {activeModel ? `${activeModel.name} Recommendations` : 'Top Recommendations'}
            </h3>
            <ol className="space-y-3">
              {displayTips.slice(0, 3).map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed pt-0.5">{rec}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
      )}

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 border border-cyan-400/30 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-3">Want a Deeper Analysis?</h3>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
          This free audit covers the basics. Our professional GEO audit includes competitor analysis,
          AI model testing, and a custom 90-day roadmap.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg group"
          >
            View GEO Plans
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </motion.div>

      {/* Run Another Audit */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
        >
          <RotateCcw className="w-4 h-4" />
          Run Another Audit
        </button>
      </motion.div>
    </div>
  );
}
