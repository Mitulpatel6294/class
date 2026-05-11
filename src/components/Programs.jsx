import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const programs = [
  {
    id: 'dance',
    title: 'Dance Academy',
    subtitle: 'Classical & Contemporary',
    description: 'Master the art of movement across Bharatanatyam, Kathak, Hip-Hop, Contemporary, and Bollywood. Our structured curriculum builds technique, expression, and stage confidence.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80',
    duration: '3 Months / 6 Months / 1 Year',
    age: 'Ages 5 – 45',
    level: 'Beginner to Advanced',
    tag: '01',
  },
  {
    id: 'zumba',
    title: 'Zumba & Fitness',
    subtitle: 'Dance Your Way to Health',
    description: 'High-energy Zumba sessions combined with aerobics and functional fitness. Burn calories, build stamina, and transform your body in a fun, motivating group environment.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=700&q=80',
    duration: '1 Month / 3 Months / 6 Months',
    age: 'Ages 12 – 60',
    level: 'All Levels Welcome',
    tag: '02',
  },
  {
    id: 'music',
    title: 'Music Training',
    subtitle: 'Voice & Instruments',
    description: 'Explore Western vocals, Hindustani classical, guitar, keyboard, tabla, and more. Learn music theory, notation, and performance from trained professionals.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80',
    duration: '6 Months / 1 Year / 2 Years',
    age: 'Ages 6 – 50',
    level: 'Beginner to Expert',
    tag: '03',
  },
  {
    id: 'art',
    title: 'Sketch & Fine Arts',
    subtitle: 'Drawing, Painting & Illustration',
    description: 'Develop your artistic vision through pencil sketching, charcoal drawing, watercolor, oil painting, portrait art, and digital illustration under expert guidance.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80',
    duration: '3 Months / 6 Months / 1 Year',
    age: 'Ages 7 – 55',
    level: 'Beginner to Advanced',
    tag: '04',
  },
]

export default function Programs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="programs" ref={ref} className="py-28 md:py-36 bg-dark relative">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label text-center">Our Disciplines</span>
          <h2 className="section-title text-light">
            Programs That
            <br />
            <em className="text-transparent bg-clip-text not-italic"
              style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
              Transform
            </em>
          </h2>
          <p className="text-light/50 font-body font-light max-w-xl mx-auto mt-6">
            Four world-class disciplines taught by certified professionals in a premium studio environment.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              id={`program-${prog.id}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.8, ease: 'easeOut' }}
              className="program-card card-glow group bg-dark-200 overflow-hidden border border-white/5 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={prog.image}
                  alt={`${prog.title} at Velora Arts Academy`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent" />
                {/* Tag number */}
                <div className="absolute top-4 right-4 font-display text-5xl font-light text-white/10">{prog.tag}</div>
                {/* Subtitle pill */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-gold text-[10px] tracking-[0.25em] uppercase font-body border border-gold/30 px-3 py-1.5 bg-dark/50 backdrop-blur-sm">
                    {prog.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-light text-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {prog.title}
                </h3>
                <p className="text-light/50 text-sm font-body font-light leading-relaxed mb-5 flex-1">
                  {prog.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gold/60 text-[10px] tracking-widest uppercase w-14 font-body">Duration</span>
                    <span className="text-light/60 text-xs font-body">{prog.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold/60 text-[10px] tracking-widest uppercase w-14 font-body">Age</span>
                    <span className="text-light/60 text-xs font-body">{prog.age}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gold/60 text-[10px] tracking-widest uppercase w-14 font-body">Level</span>
                    <span className="text-light/60 text-xs font-body">{prog.level}</span>
                  </div>
                </div>

                <button
                  onClick={() => document.querySelector('#admission')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline w-full justify-center text-xs py-2.5 group-hover:border-gold group-hover:text-gold"
                  aria-label={`Enroll in ${prog.title}`}
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
