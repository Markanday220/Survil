import React from 'react'
import { motion } from 'framer-motion'
import { Search, Cpu, Wrench, Eye } from 'lucide-react'

const HowItWorks = ({ onBookDemo }) => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Site Analysis',
      description: 'Our security experts conduct a comprehensive assessment of your property to identify vulnerabilities and optimal camera placement',
    },
    {
      icon: Cpu,
      number: '02',
      title: 'AI Integration',
      description: 'We configure our AI platform to learn your business patterns and customize detection algorithms for your specific needs',
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Professional Installation',
      description: 'Certified technicians install enterprise-grade cameras and equipment with minimal disruption to your operations',
    },
    {
      icon: Eye,
      number: '04',
      title: 'Live Monitoring',
      description: 'Your business is now protected 24/7 with AI detection and our professional monitoring team ready to respond',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 bg-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            From Setup to
            <br />
            <span className="text-primary">Full Protection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your business secured in 4 simple steps. We handle everything from planning to 24/7 monitoring
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full relative">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shadow-lg shadow-primary/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mt-4">
                    <step.icon className="text-primary" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready in <span className="text-primary">7-14 Days</span>
            </h3>
            <p className="text-gray-600 mb-6">
              From initial consultation to full deployment, we'll have your business protected in under two weeks
            </p>
            <motion.button
              onClick={onBookDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all duration-200"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
