import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Monitor, Headphones, ArrowRight, Check } from 'lucide-react'

const Products = () => {
  const products = [
    {
      icon: Camera,
      title: 'CCTV Camera Systems',
      description: '4K Ultra HD cameras with night vision, weatherproof housing, and wide-angle coverage for complete property surveillance',
      features: ['4K Resolution', 'Night Vision', 'Weatherproof', 'Wide Angle'],
      image: '/Public/camera.png',
      highlights: ['Indoor & Outdoor', 'Motion Detection', 'Remote Access'],
      useContain: true,
    },
    {
      icon: Monitor,
      title: 'AI Monitoring Platform',
      description: 'Cloud-based intelligent dashboard with real-time AI detection, advanced analytics, and seamless multi-location management',
      features: ['AI Detection', 'Cloud Storage', 'Analytics', 'Multi-Site'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
      highlights: ['Real-Time Alerts', 'Smart Analytics', 'Easy Integration'],
    },
    {
      icon: Headphones,
      title: 'Live Monitoring Service',
      description: 'Dedicated professional security team monitoring your business 24/7 with instant response and expert intervention',
      features: ['24/7 Support', 'Live Agents', 'Instant Response', 'Expert Team'],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800',
      highlights: ['Human Expertise', 'Immediate Action', 'Peace of Mind'],
      useFilter: true,
    },
  ]

  return (
    <section id="products" className="relative py-24 bg-gradient-to-b from-white via-light-bg to-white overflow-hidden">
      {/* Glowing effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Complete Security
            <br />
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hardware, software, and human expertise working together to protect your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full ${product.useContain ? 'object-contain p-4' : 'object-cover'} ${product.useFilter ? 'brightness-90' : 'opacity-90'} group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}
                />
                <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-xl z-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <product.icon size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {product.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-700">
                      <Check className="text-primary flex-shrink-0" size={18} />
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-200">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center justify-center space-x-2 text-primary font-bold w-full py-3 rounded-xl border-2 border-primary/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group-hover:shadow-lg">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We'll design a security system tailored to your specific business needs and budget
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30"
            >
              Request Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
