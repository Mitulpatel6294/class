import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80',
    alt: 'Contemporary dance performance',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80',
    alt: 'Music training session',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    alt: 'Fine arts sketching class',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80',
    alt: 'Zumba fitness group session',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80',
    alt: 'Ballet dance class',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&q=80',
    alt: 'Piano music class',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
    alt: 'Painting and art class',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    alt: 'Fitness training workout',
    tall: false,
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" ref={ref} className="py-28 md:py-36 bg-dark relative">
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
            <span className="section-label">The Velora Studio</span>
            <h2 className="section-title text-light">
              Life Inside
              <br />
              <em className="text-transparent bg-clip-text not-italic"
                style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C97E)' }}>
                Our Academy
              </em>
            </h2>
          </div>
          <p className="text-light/40 font-body text-sm max-w-xs leading-relaxed">
            A glimpse into the world where passion meets craft and students discover their true potential.
          </p>
        </motion.div>

        {/* Masonry gallery */}
        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="masonry-item group relative overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors duration-400 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <div className="w-6 h-px bg-gold mb-2" />
                    <span className="text-light/80 text-xs tracking-widest uppercase font-body">{item.alt}</span>
                  </div>
                </div>

                {/* Gold corner accent on hover */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[0px] border-r-[0px] border-t-gold border-r-transparent group-hover:border-t-[30px] group-hover:border-r-[30px] transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-3"
            aria-label="View more on Instagram"
          >
            <span>View More on Instagram</span>
            <span className="text-gold">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
