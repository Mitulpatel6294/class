import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const schedule = {
  Monday: [
    { time: '7:00 – 8:00 AM', class: 'Zumba Fitness', batch: 'Adults', trainer: 'Kavya Reddy', type: 'fitness' },
    { time: '5:00 – 6:00 PM', class: 'Bharatanatyam', batch: 'Kids (5–12)', trainer: 'Priya Sharma', type: 'dance' },
    { time: '6:00 – 7:30 PM', class: 'Guitar Basics', batch: 'Teens & Adults', trainer: 'Arjun Mehta', type: 'music' },
  ],
  Tuesday: [
    { time: '7:00 – 8:00 AM', class: 'Morning Yoga Flow', batch: 'All Ages', trainer: 'Kavya Reddy', type: 'fitness' },
    { time: '4:30 – 5:30 PM', class: 'Pencil Sketching', batch: 'Kids (7–15)', trainer: 'Rahul Nair', type: 'art' },
    { time: '6:00 – 7:00 PM', class: 'Hip-Hop Dance', batch: 'Teens (13–20)', trainer: 'Priya Sharma', type: 'dance' },
  ],
  Wednesday: [
    { time: '7:00 – 8:00 AM', class: 'Zumba Gold (Senior)', batch: 'Adults 35+', trainer: 'Kavya Reddy', type: 'fitness' },
    { time: '5:00 – 6:30 PM', class: 'Keyboard / Piano', batch: 'Kids (6–14)', trainer: 'Arjun Mehta', type: 'music' },
    { time: '6:30 – 7:30 PM', class: 'Contemporary Dance', batch: 'Advanced', trainer: 'Priya Sharma', type: 'dance' },
  ],
  Thursday: [
    { time: '7:00 – 8:00 AM', class: 'HIIT & Aerobics', batch: 'Adults', trainer: 'Kavya Reddy', type: 'fitness' },
    { time: '4:00 – 5:00 PM', class: 'Watercolor Painting', batch: 'Teens & Adults', trainer: 'Rahul Nair', type: 'art' },
    { time: '5:30 – 7:00 PM', class: 'Vocals (Hindustani)', batch: 'All Levels', trainer: 'Arjun Mehta', type: 'music' },
  ],
  Friday: [
    { time: '7:00 – 8:00 AM', class: 'Zumba Fitness', batch: 'Adults', trainer: 'Kavya Reddy', type: 'fitness' },
    { time: '4:30 – 5:30 PM', class: 'Kathak Dance', batch: 'Kids & Teens', trainer: 'Priya Sharma', type: 'dance' },
    { time: '6:00 – 7:00 PM', class: 'Portrait & Charcoal', batch: 'Advanced', trainer: 'Rahul Nair', type: 'art' },
  ],
  Saturday: [
    { time: '8:00 – 9:30 AM', class: 'Weekend Zumba Party', batch: 'All Ages', trainer: 'Kavya Reddy', type: 'fitness' },
    { time: '10:00 AM – 12:00 PM', class: 'Art Workshop (Open)', batch: 'All Ages', trainer: 'Rahul Nair', type: 'art' },
    { time: '4:00 – 6:00 PM', class: 'Music Ensemble', batch: 'Intermediate+', trainer: 'Arjun Mehta', type: 'music' },
    { time: '6:00 – 7:30 PM', class: 'Dance Rehearsal', batch: 'Performance Batch', trainer: 'Priya Sharma', type: 'dance' },
  ],
}

const typeColors = {
  dance: 'text-rose-400/80 border-rose-400/20 bg-rose-400/5',
  music: 'text-blue-400/80 border-blue-400/20 bg-blue-400/5',
  fitness: 'text-emerald-400/80 border-emerald-400/20 bg-emerald-400/5',
  art: 'text-amber-400/80 border-amber-400/20 bg-amber-400/5',
}

const days = Object.keys(schedule)

export default function Timetable() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeDay, setActiveDay] = useState('Monday')

  return (
    <section id="timetable" ref={ref} className="py-28 md:py-36 bg-dark-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">Class Schedule</span>
          <h2 className="section-title text-light">
            Weekly
            <em className="text-transparent bg-clip-text not-italic ml-4"
              style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
              Timetable
            </em>
          </h2>
          <p className="text-light/40 font-body text-sm max-w-md mx-auto mt-5">
            Morning and evening batches available. Choose the schedule that suits your lifestyle.
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {[
            { label: 'Dance', type: 'dance' },
            { label: 'Music', type: 'music' },
            { label: 'Fitness', type: 'fitness' },
            { label: 'Fine Arts', type: 'art' },
          ].map((item) => (
            <span key={item.type} className={`text-[10px] tracking-[0.2em] uppercase border px-3 py-1.5 font-body ${typeColors[item.type]}`}>
              {item.label}
            </span>
          ))}
        </div>

        {/* Day tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-8"
        >
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-body whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                activeDay === day
                  ? 'bg-gold text-dark font-medium'
                  : 'border border-white/10 text-light/50 hover:border-gold/40 hover:text-gold/70'
              }`}
            >
              {day}
            </button>
          ))}
        </motion.div>

        {/* Schedule table */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse" aria-label={`${activeDay} class schedule`}>
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left py-4 pr-6 text-[10px] tracking-[0.25em] uppercase text-light/30 font-body font-normal">Time</th>
                <th className="text-left py-4 pr-6 text-[10px] tracking-[0.25em] uppercase text-light/30 font-body font-normal">Class</th>
                <th className="text-left py-4 pr-6 text-[10px] tracking-[0.25em] uppercase text-light/30 font-body font-normal">Batch</th>
                <th className="text-left py-4 text-[10px] tracking-[0.25em] uppercase text-light/30 font-body font-normal">Trainer</th>
              </tr>
            </thead>
            <tbody>
              {schedule[activeDay].map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="border-b border-white/5 hover:bg-dark-200 transition-colors duration-200 group"
                >
                  <td className="py-5 pr-6">
                    <span className="text-gold/70 text-sm font-body font-light">{row.time}</span>
                  </td>
                  <td className="py-5 pr-6">
                    <div className="flex items-center gap-3">
                      <span className={`text-[9px] tracking-[0.2em] uppercase border px-2 py-1 font-body ${typeColors[row.type]}`}>
                        {row.type}
                      </span>
                      <span className="text-light text-sm font-body group-hover:text-gold transition-colors duration-300">{row.class}</span>
                    </div>
                  </td>
                  <td className="py-5 pr-6">
                    <span className="text-light/50 text-sm font-body">{row.batch}</span>
                  </td>
                  <td className="py-5">
                    <span className="text-light/50 text-sm font-body">{row.trainer}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => document.querySelector('#admission')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Register for a Batch
          </button>
        </motion.div>
      </div>
    </section>
  )
}
