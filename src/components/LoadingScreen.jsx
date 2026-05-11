import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      {/* Logo mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-10 text-center"
      >
        <div className="flex items-center justify-center mb-3">
          <div className="w-px h-10 bg-gold/40 mr-5" />
          <span className="font-display text-3xl font-light tracking-[0.2em] text-light">VELORA</span>
          <div className="w-px h-10 bg-gold/40 ml-5" />
        </div>
        <span className="text-gold text-xs tracking-[0.4em] uppercase font-body">Arts Academy</span>
      </motion.div>

      {/* Progress bar */}
      <motion.div className="w-48 h-px bg-dark-400 overflow-hidden">
        <motion.div
          className="h-full loading-bar"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8 text-light/30 text-xs tracking-[0.3em] uppercase font-body"
      >
        Where Art Meets Excellence
      </motion.p>

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-64 h-64 rounded-full border border-gold/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full border border-gold/8"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </motion.div>
  )
}
