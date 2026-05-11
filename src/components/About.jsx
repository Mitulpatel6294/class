import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: 'easeOut' },
  }),
}

const pillars = [
  { num: '12+', label: 'Years of Legacy' },
  { num: '50+', label: 'Expert Mentors' },
  { num: '3', label: 'Age Batches' },
  { num: '1000+', label: 'Alumni Worldwide' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-28 md:py-36 bg-dark-100 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 right-0 font-display text-[200px] font-bold text-white/[0.015] leading-none select-none pointer-events-none pr-10">
        ART
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&q=80"
                alt="Velora Arts Academy studio interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating stat card */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="absolute -bottom-8 -right-6 lg:-right-12 card-glass p-6 rounded-sm w-48"
            >
              <div className="font-display text-5xl font-light text-gold leading-none">12+</div>
              <div className="text-light/50 text-xs tracking-widest uppercase mt-2 font-body">Years of<br />Excellence</div>
            </motion.div>

            {/* Gold accent line */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-gold/40" />
          </motion.div>

          {/* Text block */}
          <div className="lg:pl-6">
            <motion.span
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="section-label"
            >
              About The Academy
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="section-title text-light mb-6"
            >
              A Sanctuary for
              <br />
              <em className="text-transparent bg-clip-text not-italic"
                style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
                Creative Souls
              </em>
            </motion.h2>

            <div className="divider-gold" />

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-light/60 font-body font-light leading-relaxed text-base mb-5"
            >
              Velora Arts Academy was founded on a singular belief — that every individual carries an artist within. 
              Our purpose is to nurture that artist with discipline, creativity, and world-class mentorship.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-light/60 font-body font-light leading-relaxed text-base mb-10"
            >
              With over 50 certified trainers across Dance, Music, Zumba & Fitness, and Fine Arts, we offer 
              a professional studio environment curated for children, teenagers, and adults. Every batch is 
              designed to unlock potential while celebrating individual expression.
            </motion.p>

            {/* Feature list */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-4 mb-12"
            >
              {[
                'Experienced & Certified Mentors',
                'Professional Studio Infrastructure',
                'Kids · Teens · Adults Batches',
                'Stage Performances & Competitions',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-5 h-px bg-gold flex-shrink-0" />
                  <span className="text-light/70 text-sm font-body">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              variants={fadeUp}
              custom={5}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Explore Programs
            </motion.button>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mt-24 border border-white/5"
        >
          {pillars.map((p, i) => (
            <div key={i} className="bg-dark-100 p-8 text-center hover:bg-dark-200 transition-colors duration-300">
              <div className="font-display text-4xl font-light text-gold mb-2">{p.num}</div>
              <div className="text-light/40 text-xs tracking-[0.2em] uppercase font-body">{p.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
