import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Faculty from './components/Faculty'
import Testimonials from './components/Testimonials'
import Timetable from './components/Timetable'
import Events from './components/Events'
import Admission from './components/Admission'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem('hasLoaded')
  })

  useEffect(() => {
    if (!loading) return
    const timer = setTimeout(() => {
      setLoading(false)
      sessionStorage.setItem('hasLoaded', 'true')
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Programs />
            <WhyChooseUs />
            <Gallery />
            <Faculty />
            <Testimonials />
            <Timetable />
            <Events />
            <Admission />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
