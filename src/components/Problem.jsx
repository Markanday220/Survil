import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Users, Eye, DollarSign } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: ShoppingBag,
      title: 'Theft & Shoplifting',
      description: 'Losing thousands monthly to organized retail crime and opportunistic theft',
    },
    {
      icon: Users,
      title: 'Employee Fraud',
      description: 'Internal theft, time fraud, and unauthorized discounts draining profits',
    },
    {
      icon: Eye,
      title: 'No Real-Time Monitoring',
      description: 'Discovering incidents hours or days later when it\'s too late to act',
    },
    {
      icon: DollarSign,
      title: 'Revenue Loss',
      description: 'Shrinkage rates of 2-5% directly impacting your bottom line every day',
    },
  ]

  return (
    <section id="problem" className="relative py-24 bg-light-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.08)_0%,transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Your Security System
            <br />
            <span className="text-primary">Isn't Working</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional surveillance is reactive. By the time you notice the problem, the damage is done.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
              
              <div className="relative flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <problem.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              The average business loses <span className="text-red-600">$50,000+ annually</span>
            </p>
            <p className="text-gray-600">to preventable theft and fraud</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem
