import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: '🏅',
    title: 'Certified Trainers',
    desc: 'All our faculty hold national and international certifications with years of professional performance experience.',
  },
  {
    icon: '🏛️',
    title: 'Professional Studio',
    desc: 'State-of-the-art acoustic studios, sprung dance floors, and dedicated art labs designed for premium learning.',
  },
  {
    icon: '🎭',
    title: 'Stage Performances',
    desc: 'Regular recitals, annual showcases, and inter-city competitions to build confidence and stage presence.',
  },
  {
    icon: '🕐',
    title: 'Flexible Timings',
    desc: 'Morning and evening batches available on weekdays and weekends to accommodate every schedule.',
  },
  {
    icon: '🏆',
    title: 'Competition Prep',
    desc: 'Specialized training modules for state, national, and international level competitions and auditions.',
  },
  {
    icon: '🤝',
    title: 'Friendly Environment',
    desc: 'A safe, inclusive, and inspiring space where every student feels valued, encouraged, and celebrated.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" ref={ref} className="py-28 md:py-36 bg-dark-100 relative overflow-hidden">
      {/* Large decorative word */}
      <div className="absolute bottom-0 left-0 font-display text-[160px] font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        VELORA
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Why Velora</span>
            <h2 className="section-title text-light">
              Crafted for
              <br />
              <em className="text-transparent bg-clip-text not-italic"
                style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
                Greatness
              </em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-light/50 font-body font-light leading-relaxed text-base lg:pb-4"
          >
            We don't just teach art — we build artists. Everything about Velora is engineered to give you 
            the best possible foundation and the highest platform to showcase your talent.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: 'easeOut' }}
              className="bg-dark-100 p-8 lg:p-10 group hover:bg-dark-200 transition-colors duration-300 cursor-default"
            >
              <div className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {feat.icon}
              </div>
              <h3 className="font-display text-xl font-light text-light mb-3 group-hover:text-gold transition-colors duration-300">
                {feat.title}
              </h3>
              <div className="w-8 h-px bg-gold/40 mb-4 group-hover:w-14 transition-all duration-500" />
              <p className="text-light/50 text-sm font-body font-light leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
