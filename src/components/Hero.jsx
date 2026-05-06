import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Shield, Eye, Brain, Zap } from 'lucide-react'

const Hero = ({ onBookDemo }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      tag: 'AI-POWERED SURVEILLANCE',
      title: 'Smarter Security.',
      titleAccent: 'Real-Time Intelligence.',
      subtitle: 'Transform your business with proactive monitoring and AI-driven insights',
      image: '/camera.png',
      alert: {
        icon: Brain,
        title: 'AI Detection Active',
        subtitle: '99.2% Accuracy',
        status: 'MONITORING',
      },
    },
    {
      id: 2,
      tag: 'SMART CITIES',
      title: 'Intelligent Urban',
      titleAccent: 'Surveillance.',
      subtitle: 'Advanced monitoring solutions for safer, smarter cities with real-time analytics',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070',
      alert: {
        icon: Eye,
        title: 'Live Monitoring',
        subtitle: '24 Cameras Active',
        status: 'ONLINE',
      },
    },
    {
      id: 3,
      tag: 'RETAIL SECURITY',
      title: 'Stop Loss.',
      titleAccent: 'Maximize Profit.',
      subtitle: 'Prevent theft and fraud with intelligent surveillance designed for retail environments',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
      alert: {
        icon: Shield,
        title: 'Intrusion Detected',
        subtitle: 'Aisle 3 - Alert Sent',
        status: 'ALERT',
      },
    },
    {
      id: 4,
      tag: 'ENTERPRISE MONITORING',
      title: 'Enterprise-Grade',
      titleAccent: 'Protection.',
      subtitle: 'Comprehensive security solutions for large-scale operations and multi-site management',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      alert: {
        icon: Zap,
        title: 'System Status',
        subtitle: 'All Systems Operational',
        status: 'ACTIVE',
      },
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{ 
              backgroundImage: `url(${currentSlideData.image})`,
              backgroundSize: currentSlide === 0 ? 'auto 70%' : 'cover',
              backgroundPosition: currentSlide === 0 ? 'right 5% center' : 'center',
            }}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-20">
        <div className="w-full lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Tag Line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary text-xs font-bold uppercase tracking-wider">
                  {currentSlideData.tag}
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.1]"
              >
                {currentSlideData.title}
                <br />
                <span className="text-primary">{currentSlideData.titleAccent}</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
              >
                {currentSlideData.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.a
                  href="#solution"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-3 hover:bg-primary/90 transition-all duration-300 shadow-2xl shadow-primary/30"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>

                <motion.button
                  onClick={onBookDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Request Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Alert Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block absolute right-8 xl:right-20 bottom-32"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl min-w-[280px]"
            >
              <div className="flex items-start space-x-4">
                <div className={`${
                  currentSlideData.alert.status === 'ALERT' ? 'bg-red-500/20 text-red-500' :
                  currentSlideData.alert.status === 'MONITORING' ? 'bg-primary/20 text-primary' :
                  'bg-green-500/20 text-green-500'
                } p-3 rounded-xl`}>
                  <currentSlideData.alert.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`text-xs font-bold ${
                      currentSlideData.alert.status === 'ALERT' ? 'text-red-500' :
                      currentSlideData.alert.status === 'MONITORING' ? 'text-primary' :
                      'text-green-500'
                    }`}>
                      {currentSlideData.alert.status}
                    </span>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      currentSlideData.alert.status === 'ALERT' ? 'bg-red-500' :
                      currentSlideData.alert.status === 'MONITORING' ? 'bg-primary' :
                      'bg-green-500'
                    }`} />
                  </div>
                  <h4 className="text-white font-bold text-base mb-1">
                    {currentSlideData.alert.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {currentSlideData.alert.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
          >
            <div className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 bg-primary' 
                : 'w-8 bg-white/30 hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-8 z-20 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-white/60 text-xs font-medium uppercase tracking-wider rotate-90 origin-center">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10" />
    </section>
  )
}

export default Hero
