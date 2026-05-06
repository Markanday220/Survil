import React from 'react'
import { motion } from 'framer-motion'
import { Store, Fuel, Warehouse, Building2, ShoppingBag, Check } from 'lucide-react'

const Industries = () => {
  const industries = [
    {
      icon: Store,
      title: 'Retail Stores',
      description: 'Prevent shoplifting, monitor customer flow, and protect your merchandise with AI-powered detection',
      benefits: ['Reduce theft by 40%', 'Track customer patterns', 'Monitor checkout areas', 'Prevent organized retail crime'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800',
    },
    {
      icon: Fuel,
      title: 'Gas Stations',
      description: 'Secure pumps, monitor transactions, and prevent drive-offs with comprehensive coverage',
      benefits: ['24/7 pump monitoring', 'Prevent fuel theft', 'POS integration', 'License plate recognition'],
      image: 'https://images.unsplash.com/photo-1545262810-77515befe149?q=80&w=800',
    },
    {
      icon: Warehouse,
      title: 'Warehouses',
      description: 'Protect inventory, monitor loading docks, and ensure employee safety across large facilities',
      benefits: ['Inventory protection', 'Loading dock security', 'Employee safety', 'Access control'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800',
    },
    {
      icon: Building2,
      title: 'Office Buildings',
      description: 'Secure entry points, monitor common areas, and protect sensitive information',
      benefits: ['Access management', 'Visitor tracking', 'After-hours monitoring', 'Compliance recording'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
    },
    {
      icon: ShoppingBag,
      title: 'Restaurants',
      description: 'Monitor dining areas, secure cash handling, and ensure food safety compliance',
      benefits: ['Cash handling security', 'Kitchen monitoring', 'Customer safety', 'Staff accountability'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    },
  ]

  return (
    <section id="industries" className="relative py-24 bg-gradient-to-b from-dark via-dark-secondary to-dark overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Trusted Across
            <br />
            <span className="text-primary">Every Industry</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tailored security solutions designed for your specific business needs and challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-dark-secondary border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-5">
                {/* Image */}
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden bg-dark-tertiary">
                  <div className="absolute inset-0 bg-gradient-to-r from-dark-secondary to-transparent z-10" />
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm p-3 rounded-xl z-20">
                    <industry.icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>

                  {/* Benefits */}
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
