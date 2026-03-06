'use client';

import { motion } from 'framer-motion';
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
}

// ─── Component ──────────────────────────────────────────────────────────────────

interface AuditResultsProps {
  results: AuditResponse;
  onReset: () => void;
}

export default function AuditResults({ results, onReset }: AuditResultsProps) {
  const categoryOrder: (keyof AuditResponse['categories'])[] = [
    'schemaMarkup',
    'metaTags',
    'contentStructure',
    'aiAccessibility',
  ];

  return (
    <div className="space-y-12">
      {/* Header & Score Gauge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Your GEO Score
        </h2>
        <p className="text-gray-400 mb-8 text-sm break-all">{results.url}</p>
        <AuditScoreGauge score={results.overallScore} grade={results.grade} />
      </motion.div>

      {/* Category Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {categoryOrder.map((key, index) => {
          const cat = results.categories[key];
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
              />
            </motion.div>
          );
        })}
      </div>

      {/* Top Recommendations */}
      {results.topRecommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"
        >
          <h3 className="text-xl font-bold text-white mb-4">Top Recommendations</h3>
          <ol className="space-y-3">
            {results.topRecommendations.slice(0, 3).map((rec, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-gray-300 text-sm leading-relaxed pt-0.5">{rec}</p>
              </li>
            ))}
          </ol>
        </motion.div>
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
