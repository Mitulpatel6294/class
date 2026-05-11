import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const events = [
  {
    date: { day: '15', month: 'Jun' },
    tag: 'Annual Showcase',
    title: 'Velora Grand Showcase 2025',
    desc: 'Our flagship annual performance featuring students from all disciplines — dance, music, fine arts, and fitness. A cinematic evening celebrating a year of growth.',
    time: '6:30 PM Onwards',
    venue: 'City Auditorium, Main Hall',
    status: 'upcoming',
  },
  {
    date: { day: '22', month: 'Jun' },
    tag: 'Workshop',
    title: 'Intensive Hip-Hop Masterclass',
    desc: 'A one-day intensive workshop conducted by a guest choreographer from Bollywood. Open to teens and adults with 3+ months of dance training.',
    time: '10:00 AM – 4:00 PM',
    venue: 'Velora Dance Studio',
    status: 'upcoming',
  },
  {
    date: { day: '05', month: 'Jul' },
    tag: 'Competition',
    title: 'State Fine Arts Championship',
    desc: 'Velora students compete in live sketch and painting competitions at state level. Our students have won gold for 4 consecutive years.',
    time: '9:00 AM – 5:00 PM',
    venue: 'Government Art Center',
    status: 'upcoming',
  },
  {
    date: { day: '20', month: 'Jul' },
    tag: 'Workshop',
    title: 'Vocal Performance Bootcamp',
    desc: 'An immersive 2-day vocal training bootcamp focusing on breath control, stage presence, and advanced classical techniques with Arjun Mehta.',
    time: '9:00 AM – 6:00 PM',
    venue: 'Velora Music Studio',
    status: 'open',
  },
]

const tagColors = {
  'Annual Showcase': 'border-gold/40 text-gold',
  'Workshop': 'border-blue-400/30 text-blue-400/80',
  'Competition': 'border-rose-400/30 text-rose-400/80',
}

export default function Events() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="events" ref={ref} className="py-28 md:py-36 bg-dark relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <span className="section-label">What's On</span>
            <h2 className="section-title text-light">
              Events &
              <em className="text-transparent bg-clip-text not-italic ml-4"
                style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
                Workshops
              </em>
            </h2>
          </div>
          <p className="text-light/40 font-body text-sm max-w-xs leading-relaxed">
            Stay updated on upcoming performances, competitions, and masterclasses.
          </p>
        </motion.div>

        {/* Events list */}
        <div className="space-y-4">
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group border border-white/5 hover:border-gold/20 bg-dark-100 hover:bg-dark-200 transition-all duration-400 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              {/* Date block */}
              <div className="flex-shrink-0 text-center border border-white/10 group-hover:border-gold/30 transition-colors duration-300 px-5 py-4 min-w-[72px]">
                <div className="font-display text-3xl font-light text-gold leading-none">{ev.date.day}</div>
                <div className="text-light/40 text-[10px] tracking-[0.2em] uppercase font-body mt-1">{ev.date.month} 2025</div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-[9px] tracking-[0.2em] uppercase border px-3 py-1 font-body ${tagColors[ev.tag] || 'border-white/20 text-white/50'}`}>
                    {ev.tag}
                  </span>
                  {ev.status === 'open' && (
                    <span className="text-[9px] tracking-[0.15em] uppercase text-emerald-400 font-body flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                      Registration Open
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-light text-light mb-2 group-hover:text-gold transition-colors duration-300">
                  {ev.title}
                </h3>
                <p className="text-light/50 text-sm font-body font-light leading-relaxed mb-4">
                  {ev.desc}
                </p>
                <div className="flex flex-wrap gap-6 text-[11px] text-light/30 font-body tracking-wide">
                  <span>⏰ {ev.time}</span>
                  <span>📍 {ev.venue}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 self-center">
                <button
                  onClick={() => document.querySelector('#admission')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label={`Register for ${ev.title}`}
                  className="w-10 h-10 border border-white/10 group-hover:border-gold flex items-center justify-center text-light/30 group-hover:text-gold transition-all duration-300"
                >
                  →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
