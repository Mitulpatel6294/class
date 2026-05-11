import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

const programs = [
  { label: 'Dance Academy', href: '#programs' },
  { label: 'Zumba & Fitness', href: '#programs' },
  { label: 'Music Training', href: '#programs' },
  { label: 'Sketch & Fine Arts', href: '#programs' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210' },
]

function handleNav(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-white/5 relative">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-px h-8 bg-gold/60" />
              <div>
                <div className="font-display text-2xl font-light tracking-[0.2em] text-light leading-none">VELORA</div>
                <div className="text-gold text-[9px] tracking-[0.35em] uppercase font-body leading-none mt-0.5">Arts Academy</div>
              </div>
            </div>
            <p className="text-light/40 text-xs font-body leading-relaxed mb-6">
              A premier creative institute nurturing talent in Dance, Music, Fine Arts, and Fitness since 2012.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-light/30 transition-all duration-300 text-[10px] tracking-widest font-body"
                >
                  {s.label.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold font-body mb-5">Quick Links</div>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-light/50 text-sm font-body hover:text-gold transition-colors duration-300 text-left gold-line"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold font-body mb-5">Programs</div>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.label}>
                  <button
                    onClick={() => handleNav(p.href)}
                    className="text-light/50 text-sm font-body hover:text-gold transition-colors duration-300 text-left gold-line"
                  >
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold font-body mb-5">Get In Touch</div>
            <div className="space-y-3 text-sm font-body text-light/50">
              <div>
                <div className="text-light/20 text-[10px] uppercase tracking-widest mb-1">Address</div>
                <div>Crystal Plaza, Andheri West<br />Mumbai – 400053</div>
              </div>
              <div>
                <div className="text-light/20 text-[10px] uppercase tracking-widest mb-1">Phone</div>
                <a href="tel:+919876543210" className="hover:text-gold transition-colors duration-300">+91 98765 43210</a>
              </div>
              <div>
                <div className="text-light/20 text-[10px] uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:info@veloraarts.in" className="hover:text-gold transition-colors duration-300">info@veloraarts.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote + copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-base font-light text-light/30 italic text-center md:text-left">
            "Art is not what you see, but what you make others see."
          </p>
          <p className="text-light/20 text-xs font-body tracking-wider text-center">
            © {new Date().getFullYear()} Velora Arts Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
