// FILE: src/pages/AI.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export function AI() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">AI Recommendations</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Get personalized society and event suggestions powered by AI.
        </p>
      </div>

      {/* AI Recommendation Card with Sparkle */}
      <GlassCard className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-neon-cyan/20 blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.5,
            }}
            className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-neon-purple/20 blur-3xl"
          />
        </div>
        <div className="relative flex items-start gap-4">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 2,
            }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple"
          >
            <Sparkles className="h-7 w-7 text-white" strokeWidth={2} />
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold">Your Top Recommendations</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Based on your interests in design and technology, we recommend joining{' '}
              <span className="font-medium text-neon-cyan dark:text-neon-purple">
                Design Club
              </span>{' '}
              and attending the{' '}
              <span className="font-medium text-neon-purple dark:text-neon-cyan">
                Hackathon 2025
              </span>
              . These align well with your profile and activity.
            </p>
            <motion.button
              className="mt-4 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-2.5 text-sm font-medium text-white shadow-glow-cyan hover:shadow-glow-purple transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Recommendations
            </motion.button>
          </div>
        </div>
      </GlassCard>

      {/* Floating Chatbot Button */}
      <motion.button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-glow-cyan md:bottom-8"
        aria-label="Open AI Chat"
        initial={false}
        animate={{
          y: [0, -6, 0],
          boxShadow: [
            '0 0 20px rgba(0, 245, 255, 0.4)',
            '0 0 30px rgba(168, 85, 247, 0.5)',
            '0 0 20px rgba(0, 245, 255, 0.4)',
          ],
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-neon-cyan/40 opacity-75" />
        <MessageCircle className="relative h-6 w-6" strokeWidth={2} />
      </motion.button>

      {/* Chat panel placeholder - could be expanded */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 z-40 w-80 rounded-3xl backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 border border-white/20 shadow-xl p-4 md:bottom-24 md:right-8"
        >
          <p className="text-sm font-medium">AI Assistant</p>
          <p className="mt-2 text-xs text-slate-500">Ask me about societies and events!</p>
        </motion.div>
      )}
    </div>
  );
}
