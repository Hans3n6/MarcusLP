'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  projectType: z.string().min(1, 'Please select an option'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactProps {
  subheading?: string;
  showGithub?: boolean;
}

export default function Contact({
  subheading = "Hiring for an AI engineering, software engineering, or technical role? I'd love to hear about it.",
  showGithub = true
}: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://2j7sah5tsf4g4zgy4axqh7jkxa0doagi.lambda-url.us-east-1.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please email me directly at Marcush1802hansen@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 bg-white border border-line rounded-lg text-ink placeholder-ink-faint focus:outline-none focus:border-clay transition-colors';

  return (
    <section id="contact" className="w-full pt-24 pb-32 bg-cream-deep flex justify-center">
      <div className="max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-ink">
            Let&apos;s Talk
          </h2>
          <p className="text-lg text-ink-soft max-w-3xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                  Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={inputClasses}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-clay-deep">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={inputClasses}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-clay-deep">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-ink mb-2">
                  I&apos;m reaching out about
                </label>
                <select
                  {...register('projectType')}
                  id="projectType"
                  className={inputClasses}
                >
                  <option value="">Select an option</option>
                  <option value="full-time-role">A full time role</option>
                  <option value="contract-freelance">Contract / freelance work</option>
                  <option value="ai-consulting">AI consulting</option>
                  <option value="other">Something else</option>
                </select>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-clay-deep">{errors.projectType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={6}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about the role or project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-clay-deep">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-clay text-white rounded-full font-semibold hover:bg-clay-deep transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-clay-soft border border-clay/30 rounded-lg text-clay-deep text-center"
                >
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 border border-line shadow-[0_2px_16px_rgba(45,42,38,0.05)]">
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-ink-soft">
                <a href="mailto:Marcush1802hansen@gmail.com" className="inline-flex items-center gap-2 hover:text-clay transition-colors">
                  <Mail className="w-5 h-5 text-clay" />
                  Marcush1802hansen@gmail.com
                </a>
                <a href="tel:5072017442" className="inline-flex items-center gap-2 hover:text-clay transition-colors">
                  <Phone className="w-5 h-5 text-clay" />
                  507.201.7442
                </a>
                {showGithub && (
                  <a href="https://github.com/Hans3n6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-clay transition-colors">
                    <Github className="w-5 h-5 text-clay" />
                    github.com/Hans3n6
                  </a>
                )}
                <a href="https://www.linkedin.com/in/marcus-hansen-39756326b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-clay transition-colors">
                  <Linkedin className="w-5 h-5 text-clay" />
                  LinkedIn
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-clay" />
                  Waseca, Minnesota
                </span>
              </div>
              <p className="text-center text-ink font-semibold mt-6">
                Response within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
