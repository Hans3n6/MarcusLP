'use client';

import { motion } from 'framer-motion';

interface AuditScoreGaugeProps {
  score: number;
  grade: string;
}

function getScoreColor(score: number): string {
  if (score >= 90) return '#4ade80'; // green-400
  if (score >= 70) return '#22d3ee'; // cyan-400
  if (score >= 50) return '#facc15'; // yellow-400
  return '#f87171'; // red-400
}

export default function AuditScoreGauge({ score, grade }: AuditScoreGaugeProps) {
  const radius = 80;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const color = getScoreColor(score);

  return (
    <div className="flex flex-col items-center">
      <svg width="200" height="200" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#334155"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Animated score circle */}
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          transform="rotate(-90 100 100)"
          style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
        />
        {/* Grade letter */}
        <text
          x="100"
          y="92"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-bold"
          fill="white"
          fontSize="36"
        >
          {grade}
        </text>
        {/* Score number */}
        <text
          x="100"
          y="124"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color}
          fontSize="20"
          fontWeight="600"
        >
          {score}/100
        </text>
      </svg>
    </div>
  );
}
