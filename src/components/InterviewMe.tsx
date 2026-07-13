'use client';

import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { INTERVIEW_ENDPOINT } from '@/config/interview';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "Hey — I'm the AI version of Marcus. He built me with Claude and AWS Lambda, so grilling me is also a product demo. Ask me anything a resume can't answer: what I've shipped, how I work, why I left football for code.",
};

const SUGGESTED_QUESTIONS = [
  'Give me the 30-second pitch.',
  'What have you shipped to production?',
  'Why should we hire you?',
  "What's your football story?",
];

const MAX_INPUT_CHARS = 1500;
const MAX_HISTORY = 15;

export default function InterviewMe() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const online = INTERVIEW_ENDPOINT.length > 0;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isThinking]);

  const send = async (text: string) => {
    const question = text.trim().slice(0, MAX_INPUT_CHARS);
    if (!question || isThinking || !online) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: question }];
    setMessages(nextMessages);
    setInput('');
    setIsThinking(true);

    try {
      // Drop the canned greeting; send the last N turns ending with the new question
      const history = nextMessages.slice(1).slice(-MAX_HISTORY);
      const response = await fetch(INTERVIEW_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      if (!data.reply) throw new Error('Empty reply');
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Looks like I'm having a technical moment — even AI-me isn't perfect. Try again in a bit, or just email the real Marcus: Marcush1802hansen@gmail.com",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <section id="interview" className="w-full pt-24 pb-32 bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center">
      <div className="max-w-4xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Interview My AI
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just read the resume — interrogate it. This is an AI version of me,
            built by me. Ask it what you&apos;d ask in a screening call.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden"
        >
          {/* Messages */}
          <div ref={scrollRef} className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message, i) => (
              <div key={i} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-left ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-slate-900/70 text-gray-200 border border-slate-700'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </div>
            ))}

            {isThinking && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-900/70 border border-slate-700 rounded-2xl px-4 py-3">
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions */}
          <div className="px-6 pb-4 flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((question) => (
              <button
                key={question}
                onClick={() => send(question)}
                disabled={isThinking || !online}
                className="px-3 py-1.5 text-sm bg-slate-900/50 text-gray-300 rounded-full border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-slate-700 p-4 flex gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={MAX_INPUT_CHARS}
              placeholder={online ? 'Ask me anything about my work...' : 'The AI is getting wired up — check back soon.'}
              disabled={isThinking || !online}
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
            />
            <motion.button
              type="submit"
              disabled={isThinking || !online || !input.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          Built by Marcus with Claude, AWS Lambda, and Next.js — the same stack he ships for clients.
          AI answers can be imperfect; confirm anything important with the real Marcus.
        </motion.p>
      </div>
    </section>
  );
}
