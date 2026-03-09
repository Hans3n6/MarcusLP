'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Globe, Mail, Loader2, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

const auditSchema = z.object({
  url: z
    .string()
    .min(1, 'URL is required')
    .url('Please enter a valid URL')
    .refine((val) => val.startsWith('http://') || val.startsWith('https://'), {
      message: 'URL must start with http:// or https://',
    }),
  email: z
    .string()
    .email('Please enter a valid email')
    .optional()
    .or(z.literal('')),
});

type AuditFormData = z.infer<typeof auditSchema>;

interface AuditFormProps {
  onSubmit: (url: string, email?: string) => void;
  isLoading: boolean;
}

const loadingSteps = [
  'Fetching your website...',
  'Analyzing schema markup...',
  'Checking AI accessibility...',
  'Scoring for ChatGPT, Claude, Perplexity & Gemini...',
  'Generating your report...',
];

export default function AuditForm({ onSubmit, isLoading }: AuditFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
  });

  useEffect(() => {
    if (!isLoading) {
      setCurrentStep(0);
      return;
    }

    setCurrentStep(0);
    const timers: NodeJS.Timeout[] = [];

    for (let i = 1; i < loadingSteps.length; i++) {
      const timer = setTimeout(() => {
        setCurrentStep(i);
      }, i * 2000);
      timers.push(timer);
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [isLoading]);

  const onFormSubmit = (data: AuditFormData) => {
    onSubmit(data.url, data.email || undefined);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        {/* URL Input */}
        <div>
          <label htmlFor="audit-url" className="block text-sm font-medium text-gray-300 mb-2">
            Website URL
          </label>
          <div className="relative">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              {...register('url')}
              type="text"
              id="audit-url"
              disabled={isLoading}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
              placeholder="https://yourwebsite.com"
            />
          </div>
          {errors.url && (
            <p className="mt-1 text-sm text-red-400">{errors.url.message}</p>
          )}
        </div>

        {/* Email Input (optional) */}
        <div>
          <label htmlFor="audit-email" className="block text-sm font-medium text-gray-300 mb-2">
            Email <span className="text-gray-500">(optional)</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              {...register('email')}
              type="email"
              id="audit-email"
              disabled={isLoading}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
              placeholder="your.email@example.com"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">Get this report emailed to you</p>
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={isLoading ? {} : { scale: 1.02 }}
          whileTap={isLoading ? {} : { scale: 0.98 }}
          className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Analyze My Website
            </>
          )}
        </motion.button>
      </form>

      {/* Loading Progress Steps */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 space-y-3"
        >
          {loadingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: index <= currentStep ? 1 : 0.3,
                x: 0,
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              {index < currentStep ? (
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
              ) : index === currentStep ? (
                <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
              ) : (
                <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                </div>
              )}
              <span
                className={`text-sm ${
                  index === currentStep
                    ? 'text-cyan-400 font-medium'
                    : index < currentStep
                    ? 'text-green-400'
                    : 'text-gray-600'
                }`}
              >
                {step}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
