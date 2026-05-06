import React from 'react'
import { motion } from 'framer-motion'
import { Shield, CreditCard, Bell, Cloud, Monitor, Lock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Suspicious Activity Detection',
      description: 'AI identifies unusual behavior patterns, loitering, and potential threats in real-time',
    },
    {
      icon: CreditCard,
      title: 'POS Integration',
      description: 'Monitor transactions and detect fraudulent activities at point of sale',
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant push notifications to your phone, email, and security team',
    },
    {
      icon: Cloud,
      title: 'Cloud Backup',
      description: '30-day cloud storage with instant access from any device, anywhere',
    },
    {
      icon: Monitor,
      title: 'Remote Monitoring',
      description: 'View live feeds and recorded footage from your smartphone or computer',
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Manage who can view footage with role-based permissions and audit logs',
    },
  ]

  return (
    <section id="features" className="relative py-24 bg-light-bg overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-blue/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Enterprise-Grade
            <br />
            <span className="text-primary">Security Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to protect your business, prevent loss, and maintain complete control
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group overflow-hidden cursor-pointer"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent-blue/0 group-hover:from-primary/10 group-hover:to-accent-blue/10 transition-all duration-500" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 group-hover:bg-primary/10 transition-all duration-500" />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              <div className="relative z-10">
                {/* Icon container with enhanced animation */}
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300">
                  <feature.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={28} />
                  
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 group-hover:scale-125 transition-all duration-500" />
                </div>
                
                {/* Title with color transition */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary mb-3 transition-colors duration-300">{feature.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">{feature.description}</p>
                
                {/* Arrow indicator on hover */}
                <div className="flex items-center space-x-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
