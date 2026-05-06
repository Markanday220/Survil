import React from 'react'
import { motion } from 'framer-motion'
import { Store, Fuel, Warehouse, Building2, ShoppingBag, ArrowRight } from 'lucide-react'

const TrustBar = () => {
  const industries = [
    { 
      icon: Fuel, 
      name: 'Gas Stations',
      count: '15+',
      description: 'Fuel theft prevention'
    },
    { 
      icon: Store, 
      name: 'Retail Stores',
      count: '20+',
      description: 'Loss prevention'
    },
    { 
      icon: ShoppingBag, 
      name: 'Restaurants',
      count: '8+',
      description: 'Kitchen & dining security'
    },
    { 
      icon: Warehouse, 
      name: 'Warehouses',
      count: '12+',
      description: 'Inventory protection'
    },
    { 
      icon: Building2, 
      name: 'Offices',
      count: '10+',
      description: 'Access control'
    },
  ]

  return (
    <section className="relative py-16 bg-white border-y border-gray-200 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-2">
            Trusted by 50+ Businesses Across Industries
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Protecting What Matters Most
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <industry.icon className="text-primary" size={28} />
                  </div>
                  
                  {/* Count Badge */}
                  <div className="inline-flex items-center bg-primary/10 px-3 py-1 rounded-full mb-3">
                    <span className="text-primary text-xs font-bold">{industry.count}</span>
                  </div>
                  
                  {/* Name */}
                  <h4 className="text-gray-900 font-bold text-base mb-1">{industry.name}</h4>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">{industry.description}</p>
                  
                  {/* Arrow */}
                  <div className="flex items-center text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm">
            Don't see your industry? <a href="#contact" className="text-primary font-semibold hover:underline">Contact us</a> for custom solutions
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustBar
