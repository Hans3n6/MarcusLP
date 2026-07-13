'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, FileDown, Mail, ArrowRight, Sparkles, Home } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { COMPANY_PAGE_ENDPOINT } from '@/config/companyPage';

interface FitPoint {
  title: string;
  text: string;
}

interface PageData {
  company: string;
  role: string | null;
  generatedAt: string;
  headline: string;
  intro: string;
  fitPoints: FitPoint[];
  closing: string;
  lane: 'ai' | 'healthcare' | 'cs';
}

const RESUME_BY_LANE: Record<PageData['lane'], string> = {
  ai: '/Marcus_Hansen_Resume.pdf',
  healthcare: '/Marcus_Hansen_Healthcare_Resume.pdf',
  cs: '/Marcus_Hansen_CS_Resume.pdf',
};

const PAGE_BY_LANE: Record<PageData['lane'], string> = {
  ai: '/ai',
  healthcare: '/healthcare',
  cs: '/customer-success',
};

const MIN_THEATER_MS = 1800;

export default function CompanyPage() {
  const params = useSearchParams();
  const company = (params.get('c') || '').trim().slice(0, 80);
  const role = (params.get('r') || '').trim().slice(0, 80);

  const [data, setData] = useState<PageData | null>(null);
  const [failed, setFailed] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    `Reading about ${company || 'your company'}...`,
    "Mapping Marcus's experience to your world...",
    'Assembling your page...',
  ];

  useEffect(() => {
    if (!company || !COMPANY_PAGE_ENDPOINT) return;
    const stepTimer = setInterval(() => setStep((s) => Math.min(s + 1, steps.length - 1)), 1200);
    const started = Date.now();

    const url = `${COMPANY_PAGE_ENDPOINT}?c=${encodeURIComponent(company)}${role ? `&r=${encodeURIComponent(role)}` : ''}`;
    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!json.headline || !Array.isArray(json.fitPoints)) throw new Error('Bad payload');
        const wait = Math.max(0, MIN_THEATER_MS - (Date.now() - started));
        setTimeout(() => setData(json), wait);
      })
      .catch(() => setFailed(true))
      .finally(() => clearInterval(stepTimer));

    return () => clearInterval(stepTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [company, role]);

  // ---- No company in the URL ----
  if (!company) {
    return (
      <Shell>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-ink">
          You found the magic link machine
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl mx-auto mb-10">
          When Marcus applies to a company, this page builds itself for their team.
          If someone gave you a link, use theirs, or see everything on the main site.
        </p>
        <HomeButton />
      </Shell>
    );
  }

  // ---- Offline / error ----
  if (failed || !COMPANY_PAGE_ENDPOINT) {
    return (
      <Shell>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-ink">
          Marcus × {company}
        </h1>
        <p className="text-lg text-ink-soft max-w-2xl mx-auto mb-10">
          This page is having a moment, but Marcus is very real. His full background,
          projects, and resume are one click away, or email him at{' '}
          <a href="mailto:Marcush1802hansen@gmail.com" className="text-clay hover:text-clay-deep">
            Marcush1802hansen@gmail.com
          </a>.
        </p>
        <HomeButton />
      </Shell>
    );
  }

  // ---- Loading theater ----
  if (!data) {
    return (
      <Shell>
        <div className="flex flex-col items-center gap-8 py-24">
          <div className="w-16 h-16 rounded-full bg-clay animate-pulse flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xl text-ink-soft"
            >
              {steps[step]}
            </motion.p>
          </AnimatePresence>
        </div>
      </Shell>
    );
  }

  // ---- The page ----
  return (
    <main className="min-h-screen w-full bg-cream">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-clay uppercase tracking-widest text-sm mb-4 font-medium">
            Marcus Hansen × {data.company}{data.role ? ` · ${data.role}` : ''}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-8 text-ink">
            {data.headline}
          </h1>
          <p className="text-lg md:text-xl text-ink-soft max-w-3xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {data.fitPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)] hover:shadow-[0_6px_24px_rgba(45,42,38,0.09)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-clay flex-shrink-0" />
                <h3 className="font-serif text-xl font-semibold text-ink">{point.title}</h3>
              </div>
              <p className="text-ink-soft leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center"
        >
          <p className="text-lg text-ink-soft max-w-2xl mx-auto mb-10">{data.closing}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={RESUME_BY_LANE[data.lane] || RESUME_BY_LANE.ai}
              download
              className="px-8 py-4 bg-clay text-white rounded-full font-semibold hover:bg-clay-deep transition-all shadow-sm inline-flex items-center justify-center gap-2"
            >
              <FileDown className="w-5 h-5" />
              Resume for this role
            </a>
            <a
              href="mailto:Marcush1802hansen@gmail.com"
              className="px-8 py-4 bg-white text-ink rounded-full font-semibold border border-line hover:border-clay/50 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </a>
            <Link
              href={PAGE_BY_LANE[data.lane] || '/'}
              className="px-8 py-4 bg-white text-ink rounded-full font-semibold border border-line hover:border-clay/50 transition-all inline-flex items-center justify-center gap-2"
            >
              See my full site
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-cream flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">{children}</div>
    </main>
  );
}

function HomeButton() {
  return (
    <Link
      href="/"
      className="px-8 py-4 bg-clay text-white rounded-full font-semibold hover:bg-clay-deep transition-all shadow-sm inline-flex items-center gap-2"
    >
      <Home className="w-5 h-5" />
      hansenwebservices.com
    </Link>
  );
}
