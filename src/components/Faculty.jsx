import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const faculty = [
  {
    name: 'Priya Sharma',
    role: 'Dance Director',
    specialty: 'Bharatanatyam & Contemporary',
    exp: '15 Years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    awards: 'National Dance Award 2019',
    socials: { instagram: '#', youtube: '#' },
  },
  {
    name: 'Arjun Mehta',
    role: 'Music Director',
    specialty: 'Hindustani Classical & Western',
    exp: '18 Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    awards: 'All India Music Laureate',
    socials: { instagram: '#', youtube: '#' },
  },
  {
    name: 'Kavya Reddy',
    role: 'Fitness & Zumba Head',
    specialty: 'Zumba · Aerobics · Pilates',
    exp: '10 Years',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    awards: 'Certified Zumba Instructor (Int\'l)',
    socials: { instagram: '#', youtube: '#' },
  },
  {
    name: 'Rahul Nair',
    role: 'Arts & Sketch Faculty',
    specialty: 'Fine Arts · Portrait · Watercolor',
    exp: '12 Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    awards: 'State Fine Arts Gold Medal',
    socials: { instagram: '#', youtube: '#' },
  },
]

export default function Faculty() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faculty" ref={ref} className="py-28 md:py-36 bg-dark-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label">Meet The Team</span>
          <h2 className="section-title text-light">
            Master
            <em className="text-transparent bg-clip-text not-italic ml-4"
              style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
              Mentors
            </em>
          </h2>
          <p className="text-light/40 font-body text-sm max-w-md mx-auto mt-5">
            Our faculty are accomplished performers, award-winning artists, and passionate educators.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              className="group relative bg-dark-200 border border-white/5 overflow-hidden hover:border-gold/20 transition-colors duration-400"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={f.image}
                  alt={`${f.name} - ${f.role} at Velora Arts Academy`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-dark-200/20 to-transparent" />

                {/* Social links overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <div className="flex gap-3">
                    <a
                      href={f.socials.instagram}
                      aria-label={`${f.name} Instagram`}
                      className="w-8 h-8 border border-gold/40 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-dark transition-all duration-300 text-xs"
                    >
                      IG
                    </a>
                    <a
                      href={f.socials.youtube}
                      aria-label={`${f.name} YouTube`}
                      className="w-8 h-8 border border-gold/40 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-dark transition-all duration-300 text-xs"
                    >
                      YT
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="text-gold text-[10px] tracking-[0.25em] uppercase font-body mb-1">{f.role}</div>
                <h3 className="font-display text-xl font-light text-light mb-1 group-hover:text-gold transition-colors duration-300">
                  {f.name}
                </h3>
                <div className="text-light/40 text-xs font-body mb-3">{f.specialty}</div>
                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="text-light/30 text-[10px] tracking-widest uppercase font-body">{f.exp} Experience</span>
                </div>
                <div className="text-gold/50 text-[10px] tracking-wide font-body mt-2 italic">🏆 {f.awards}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
