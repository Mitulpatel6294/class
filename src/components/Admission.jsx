import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const programs = ['Dance Academy', 'Zumba & Fitness', 'Music Training', 'Sketch & Fine Arts', 'Multiple Programs']

export default function Admission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', phone: '', email: '', program: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  const inputCls = 'w-full bg-transparent border border-white/10 focus:border-gold/50 text-light text-sm font-body px-4 py-3 outline-none transition-colors duration-300 placeholder:text-light/20'

  return (
    <section id="admission" ref={ref} className="py-28 md:py-36 bg-dark-100 relative overflow-hidden">
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}>
            <span className="section-label">Join Velora</span>
            <h2 className="section-title text-light mb-6">
              Begin Your<br />
              <em className="not-italic text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
                Journey
              </em>
            </h2>
            <div className="divider-gold" />
            <p className="text-light/50 font-body font-light leading-relaxed mb-10">
              Take the first step. Book a free trial class and experience the Velora difference.
              Our counselors will guide you to the right batch, program, and mentor.
            </p>
            <div className="space-y-5">
              {[
                { title: 'Free Trial Class', sub: 'Attend one class at no cost before you commit' },
                { title: 'Flexible Enrollment', sub: 'Join any Monday throughout the month' },
                { title: 'Personalized Guidance', sub: 'One-on-one mentor consultation on admission' },
              ].map((b) => (
                <div key={b.title} className="flex gap-4 items-start">
                  <div className="w-1 bg-gold/40 flex-shrink-0 mt-1 h-10" />
                  <div>
                    <div className="text-light font-body text-sm font-medium">{b.title}</div>
                    <div className="text-light/40 text-xs font-body mt-0.5">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.9 }}
            className="card-glass p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 w-10 h-px bg-gold" />
            <div className="absolute top-0 left-0 w-px h-10 bg-gold" />
            <div className="absolute bottom-0 right-0 w-10 h-px bg-gold" />
            <div className="absolute bottom-0 right-0 w-px h-10 bg-gold" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="text-5xl mb-5">✨</div>
                  <h3 className="font-display text-3xl font-light text-gold mb-3">Inquiry Received</h3>
                  <p className="text-light/50 font-body text-sm leading-relaxed">
                    Thank you, {form.name}! Our team will reach out within 24 hours to schedule your free trial.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 btn-outline text-xs py-2 px-6">Submit Another</button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="font-display text-2xl font-light text-light mb-8">Book a Free Trial</h3>
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                      <label htmlFor="adm-name" className="text-[10px] tracking-[0.25em] uppercase text-light/40 font-body block mb-2">Full Name *</label>
                      <input id="adm-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputCls} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="adm-phone" className="text-[10px] tracking-[0.25em] uppercase text-light/40 font-body block mb-2">Phone *</label>
                        <input id="adm-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputCls} />
                      </div>
                      <div>
                        <label htmlFor="adm-email" className="text-[10px] tracking-[0.25em] uppercase text-light/40 font-body block mb-2">Email</label>
                        <input id="adm-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="adm-program" className="text-[10px] tracking-[0.25em] uppercase text-light/40 font-body block mb-2">Program *</label>
                      <select id="adm-program" name="program" required value={form.program} onChange={handleChange}
                        className="w-full bg-dark-200 border border-white/10 focus:border-gold/50 text-light text-sm font-body px-4 py-3 outline-none transition-colors duration-300 cursor-pointer">
                        <option value="" disabled>Select a program</option>
                        {programs.map((p) => <option key={p} value={p} className="bg-dark-200">{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="adm-message" className="text-[10px] tracking-[0.25em] uppercase text-light/40 font-body block mb-2">Message</label>
                      <textarea id="adm-message" name="message" rows={3} value={form.message} onChange={handleChange}
                        placeholder="Any questions or special requests..." className={`${inputCls} resize-none`} />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">Book My Free Trial</button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
