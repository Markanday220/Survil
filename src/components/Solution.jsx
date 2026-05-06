import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Brain, Bell, Cloud } from 'lucide-react'

const Solution = () => {
  const features = [
    {
      icon: Eye,
      title: '24/7 Live Monitoring',
      description: 'Professional security team watching your business around the clock',
      stat: '24/7',
      statLabel: 'Coverage',
      bgVideo: 'https://cdn.pixabay.com/video/2023/08/29/177449-859933765_large.mp4', // Security control room
      benefits: [
        'Dedicated security professionals monitoring your feeds',
        'Immediate response to suspicious activities',
        'Human verification of AI-detected incidents',
        'Detailed incident reports and documentation'
      ]
    },
    {
      icon: Brain,
      title: 'AI Detection',
      description: 'Advanced algorithms identify suspicious behavior before incidents occur',
      stat: '99.2%',
      statLabel: 'Accuracy',
      bgVideo: 'https://cdn.pixabay.com/video/2023/04/21/159265-820026535_large.mp4', // AI/Tech visualization
      benefits: [
        'Detect suspicious behavior patterns instantly',
        'Facial recognition and object tracking',
        'Loitering and perimeter breach detection',
        'POS transaction monitoring and fraud alerts'
      ]
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant notifications sent directly to your phone and security team',
      stat: '<30s',
      statLabel: 'Response Time',
      bgVideo: 'https://cdn.pixabay.com/video/2022/11/07/138448-768977808_large.mp4', // Mobile/notifications
      benefits: [
        'Push notifications to mobile and desktop',
        'SMS and email alerts for critical events',
        'Customizable alert rules and thresholds',
        'Video clips attached to every alert'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Backup',
      description: 'Secure cloud storage with instant access to footage from anywhere',
      stat: '90 Days',
      statLabel: 'Storage',
      bgVideo: 'https://cdn.pixabay.com/video/2019/09/04/26607-358991866_large.mp4', // Data center/servers
      benefits: [
        'Encrypted cloud storage with redundancy',
        'Access footage from any device, anywhere',
        'Automatic backup with zero maintenance',
        'Advanced search by date, time, and events'
      ]
    },
  ]

  return (
    <section id="solution" className="relative py-24 bg-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,217,255,0.08)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Intelligent Security That
            <br />
            <span className="text-primary">Actually Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with human expertise to protect your business 24/7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden min-h-[420px]"
            >
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              >
                <source src={feature.bgVideo} type="video/mp4" />
              </video>
              
              {/* White gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85 group-hover:from-white/90 group-hover:via-white/85 group-hover:to-white/80 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Stat Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  
                  {/* Stat Badge */}
                  <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl text-center group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary text-2xl font-black leading-none">{feature.stat}</div>
                    <div className="text-gray-600 text-xs font-semibold mt-1">{feature.statLabel}</div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                
                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution
