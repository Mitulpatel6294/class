import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-28 md:py-36 bg-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">Find Us</span>
          <h2 className="section-title text-light">
            Visit the
            <em className="not-italic text-transparent bg-clip-text ml-4"
              style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
              Academy
            </em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden border border-white/5 min-h-[340px]"
          >
            <iframe
              title="Velora Arts Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08250589410024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715420000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(0.85)', minHeight: '340px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none border border-gold/10" />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="flex flex-col gap-5"
          >
            {/* Address */}
            <div className="card-glass p-6 group hover:border-gold/20 transition-colors duration-300">
              <div className="text-gold text-[10px] tracking-[0.3em] uppercase font-body mb-3">📍 Address</div>
              <div className="text-light font-body text-sm leading-relaxed">
                Velora Arts Academy<br />
                3rd Floor, Crystal Plaza, Andheri West<br />
                Mumbai, Maharashtra – 400053
              </div>
            </div>

            {/* Phone */}
            <div className="card-glass p-6 group hover:border-gold/20 transition-colors duration-300">
              <div className="text-gold text-[10px] tracking-[0.3em] uppercase font-body mb-3">📞 Phone</div>
              <a href="tel:+912268001234" className="text-light font-body text-sm hover:text-gold transition-colors duration-300">
                +91 22 6800 1234
              </a>
              <br />
              <a href="tel:+919876543210" className="text-light/60 font-body text-sm hover:text-gold transition-colors duration-300">
                +91 98765 43210
              </a>
            </div>

            {/* Hours */}
            <div className="card-glass p-6">
              <div className="text-gold text-[10px] tracking-[0.3em] uppercase font-body mb-3">🕐 Studio Hours</div>
              <div className="space-y-1 text-sm font-body text-light/60">
                <div className="flex justify-between"><span>Mon – Fri</span><span className="text-light/40">7:00 AM – 8:30 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-light/40">8:00 AM – 7:30 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-light/40">10:00 AM – 2:00 PM</span></div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi%20Velora%20Arts%20Academy%2C%20I%27d%20like%20to%20know%20more%20about%20your%20programs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 border border-emerald-500/30 text-emerald-400 text-xs tracking-[0.15em] uppercase font-body hover:bg-emerald-500/10 transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <span>💬</span> WhatsApp
              </a>
              <a
                href="https://instagram.com/veloraarts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-4 border border-pink-500/30 text-pink-400 text-xs tracking-[0.15em] uppercase font-body hover:bg-pink-500/10 transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <span>📸</span> Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Instagram strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 border border-white/5 p-8 text-center"
        >
          <div className="text-gold text-[10px] tracking-[0.35em] uppercase font-body mb-4">Follow Our Journey</div>
          <div className="font-display text-3xl font-light text-light mb-2">@VeloraArtsAcademy</div>
          <p className="text-light/40 text-sm font-body mb-6">Student performances · Studio moments · Art exhibitions · Transformations</p>
          <a
            href="https://instagram.com/veloraarts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-xs py-2.5 px-6"
          >
            Follow on Instagram <span className="text-gold">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
