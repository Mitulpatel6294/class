import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Aanya Kapoor',
    role: 'Dance Student · 2 Years',
    review: 'Velora Arts Academy completely transformed my relationship with dance. The mentors here don\'t just teach steps — they build confidence, discipline, and artistic soul. I\'ve performed at three state competitions and won twice!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    program: 'Dance Academy',
  },
  {
    name: 'Rohan Gupta',
    role: 'Music Student · 3 Years',
    review: 'The music faculty at Velora is extraordinary. Arjun sir\'s teaching method is methodical yet deeply expressive. I went from zero knowledge to performing at city-level events within 18 months. Best investment of my life.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    program: 'Music Training',
  },
  {
    name: 'Meera Iyer',
    role: 'Zumba & Fitness · 1 Year',
    review: 'I joined Velora for fitness and ended up discovering a love for movement. Kavya ma\'am\'s energy is infectious — the sessions never feel like exercise. I lost 14kg and gained so much confidence in the process!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    program: 'Zumba & Fitness',
  },
  {
    name: 'Dev Malhotra',
    role: 'Fine Arts Student · 2 Years',
    review: 'Rahul sir\'s guidance helped me develop a unique artistic style. From basic pencil sketching to full oil portraits, the progression here is incredible. I secured admission to a top design college thanks to my Velora portfolio.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    program: 'Sketch & Fine Arts',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1" aria-label={`Rating: ${count} out of 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" ref={ref} className="py-28 md:py-36 bg-dark relative overflow-hidden">
      {/* Background quote */}
      <div className="absolute top-10 right-10 font-display text-[180px] text-white/[0.025] leading-none pointer-events-none select-none">"</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label">Transformations</span>
          <h2 className="section-title text-light">
            Student
            <em className="text-transparent bg-clip-text not-italic ml-4"
              style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
              Stories
            </em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Slider */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="card-glass p-10 md:p-14 relative"
              >
                {/* Gold accent */}
                <div className="absolute top-0 left-0 w-14 h-px bg-gold" />
                <div className="absolute top-0 left-0 w-px h-14 bg-gold" />

                <div className="text-gold text-5xl font-display mb-6 leading-none opacity-40">"</div>

                <p className="text-light/70 font-body font-light leading-relaxed text-lg md:text-xl mb-8 italic">
                  {testimonials[current].review}
                </p>

                <StarRating count={testimonials[current].rating} />

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-12 h-12 rounded-full object-cover grayscale border border-gold/30"
                  />
                  <div>
                    <div className="font-body font-medium text-light text-sm">{testimonials[current].name}</div>
                    <div className="text-light/40 text-xs font-body tracking-wide">{testimonials[current].role}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-gold/60 text-[10px] tracking-[0.2em] uppercase border border-gold/20 px-3 py-1 font-body">
                      {testimonials[current].program}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-px transition-all duration-300 ${
                    i === current ? 'w-10 bg-gold' : 'w-5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Prev/Next */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-white/10 hover:border-gold flex items-center justify-center text-light/50 hover:text-gold transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-white/10 hover:border-gold flex items-center justify-center text-light/50 hover:text-gold transition-all duration-300"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
