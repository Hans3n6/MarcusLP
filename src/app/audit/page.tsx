'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import AuditForm from '@/components/AuditForm';
import AuditResults from '@/components/AuditResults';
import type { AuditResponse } from '@/components/AuditResults';

const LAMBDA_URL = 'https://xyeootl32q6kcj54hmz3htzjbq0tllea.lambda-url.us-east-1.on.aws/';

type AuditState = 'idle' | 'loading' | 'results' | 'error';

export default function AuditPage() {
  const [auditState, setAuditState] = useState<AuditState>('idle');
  const [results, setResults] = useState<AuditResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string, email?: string) => {
    setAuditState('loading');
    setError(null);

    try {
      const response = await fetch(LAMBDA_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, email: email || undefined }),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Audit failed');
      setResults(data);
      setAuditState('results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setAuditState('error');
    }
  };

  const handleReset = () => {
    setAuditState('idle');
    setResults(null);
    setError(null);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="w-full pt-24 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link href="/" className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
            ← Back to Home
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Free GEO Audit
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how visible your website is to AI models like ChatGPT, Claude, and Perplexity. Get actionable recommendations to improve your GEO score.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <section className="w-full py-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Form (idle & loading) */}
          {(auditState === 'idle' || auditState === 'loading') && (
            <AuditForm
              onSubmit={handleSubmit}
              isLoading={auditState === 'loading'}
            />
          )}

          {/* Error */}
          {auditState === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30 text-center"
            >
              <div className="inline-flex p-4 bg-red-900/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
              <p className="text-gray-400 mb-8">{error}</p>
              <motion.button
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg"
              >
                Try Again
              </motion.button>
            </motion.div>
          )}

          {/* Results */}
          {auditState === 'results' && results && (
            <AuditResults results={results} onReset={handleReset} />
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
