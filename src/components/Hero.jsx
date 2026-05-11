import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1920&q=80',
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=1920&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40" />
      </motion.div>

      {/* Floating accent elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[8%] w-px h-24 bg-gold/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[8%] w-px h-24 bg-gold/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-1/4 left-[8%] w-3 h-px bg-gold/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[8%] w-3 h-px bg-gold/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="section-label text-center block"
        >
          Premier Creative Academy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-light leading-none hero-text-shadow mb-6"
        >
          Where Art
          <br />
          <em className="text-transparent bg-clip-text not-italic"
            style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E, #C9A84C)' }}>
            Meets
          </em>
          <br />
          Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-light/60 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto mb-10"
        >
          Dance · Music · Fine Arts · Zumba & Fitness
          <br className="hidden md:block" />
          <span className="text-light/40 text-base">Training that transforms. Expression that endures.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#programs')}
            className="btn-primary"
            aria-label="Explore our programs"
          >
            Explore Programs
          </button>
          <button
            onClick={() => scrollTo('#admission')}
            className="btn-outline"
            aria-label="Book a free trial class"
          >
            Book Free Trial
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex items-center justify-center gap-8 mt-16 text-center"
        >
          {[
            { num: '500+', label: 'Students' },
            { num: '12+', label: 'Years Legacy' },
            { num: '4', label: 'Disciplines' },
            { num: '98%', label: 'Success Rate' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-2xl md:text-3xl font-light text-gold leading-none">{stat.num}</span>
              <span className="text-light/40 text-[10px] tracking-[0.2em] uppercase mt-1 font-body">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-light/30 text-[10px] tracking-[0.3em] uppercase font-body">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
