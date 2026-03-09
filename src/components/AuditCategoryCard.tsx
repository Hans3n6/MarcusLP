'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Finding {
  check: string;
  status: 'pass' | 'fail' | 'warn';
  detail: string;
  recommendation?: string;
}

interface AuditCategoryCardProps {
  label: string;
  score: number;
  maxScore: number;
  findings: Finding[];
  weight?: number;
}

const statusIcon = {
  pass: <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />,
  fail: <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />,
  warn: <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />,
};

export default function AuditCategoryCard({ label, score, maxScore, findings, weight }: AuditCategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-white">{label}</h3>
          {weight != null && (
            <span className="text-xs font-medium text-slate-300 bg-slate-600 px-2 py-0.5 rounded-full">
              {weight}% weight
            </span>
          )}
        </div>
        <span className="text-sm font-medium text-gray-300">
          {score}/{maxScore}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      {/* Toggle findings */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors w-full"
      >
        <span>{isExpanded ? 'Hide' : 'Show'} details ({findings.length} checks)</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      {/* Findings list */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-4 space-y-3">
          {findings.map((finding, index) => (
            <div key={index} className="flex items-start gap-3">
              {statusIcon[finding.status]}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium">{finding.check}</p>
                <p className="text-xs text-gray-400 mt-0.5">{finding.detail}</p>
                {finding.recommendation && (finding.status === 'fail' || finding.status === 'warn') && (
                  <p className="text-xs text-gray-400 italic mt-1">
                    Recommendation: {finding.recommendation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
