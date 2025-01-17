'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: "ENJOY YOUR SHOWS",
    subtitle: "THANKS FOR ALL YOUR SUPPORT",
    image: "https://plus.unsplash.com/premium_photo-1661299366011-bb9f86212bdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "KEEP IT LOCKED",
    subtitle: "YOUR FAVORITE AISAT",
    image: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGVjaHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "LIVE MUSIC",
    subtitle: "DISCOVER NEW ARTISTS",
    image: "https://plus.unsplash.com/premium_photo-1683129651802-1c7ba429a137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Marquee Banner */}
      <div className="overflow-hidden bg-black py-2 border-b border-gray-800">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "linear"
          }}
          className="whitespace-nowrap text-xl"
        >
          • THARANGHAM • THARANGHAM • THARANGHAM • THARANGHAM • THARANGHAM •  THARANGHAM • THARANGHAM • THARANGHAM • THARANGHAM • THARANGHAM • THARANGHAM •
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[350px,1fr] gap-4 p-4">
        {/* Sidebar */}
        <div className="space-y-4">
          {/* Drivetime Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-100 text-black p-4 rounded-lg"
          >
            <h2 className="text-2xl font-bold">PARTY TIME</h2>
            <p className="text-lg">5.00PM - 7.00PM</p>
            <img 
              src="https://images.unsplash.com/photo-1468359601543-843bfaef291a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Vintage Radio"
              className="w-full h-48 object-cover my-4 rounded"
            />
            <button className="w-full bg-black text-white p-3 rounded flex items-center justify-between group">
              VIEW SHOW
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Stream Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-red-500 p-4 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">STREAM YOUR SHOW</h2>
            <div className="relative aspect-video bg-black rounded overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1682855222843-0cd0827ed6e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvd3N8ZW58MHx8MHx8fDA%3D"
                alt="RTR2 Logo"
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: isPlaying ? 0.9 : 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-red-500 p-4 rounded-full"
                >
                  <Play size={32} />
                </motion.div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-neutral-800 to-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 6 }}
              exit={{ opacity: 0 }}
              className="relative aspect-[16/9]"
            >
              <img
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Navigation */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <span className="text-sm">{currentSlide + 1}/{slides.length}</span>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 p-4"
        >
          <h2 className="text-3xl font-bold mb-2">CHECK OUT THE SHOWS</h2>
          <p className="text-gray-400">Keep it locked to THARANGHAM 2025 .</p>
        </motion.div>
      </div>
    </main>
  )
}

