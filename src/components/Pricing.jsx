import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Crown, Rocket } from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      icon: Zap,
      name: 'Starter',
      monthlyPrice: '449',
      annualPrice: '399',
      description: 'Ideal for small teams adopting modern surveillance solutions',
      features: [
        'Four Locations Monitoring',
        'Cashier Fraud Detection',
        'Shoplifting Prevention & Alerts',
        'Email & Phone Support',
        'Suspicious Transaction Monitoring',
      ],
      cta: 'Choose this plan',
      popular: false,
    },
    {
      icon: Crown,
      name: 'Professional',
      monthlyPrice: '699',
      annualPrice: '599',
      description: 'Designed for growing operations needing deeper insights',
      features: [
        'Two Locations Monitoring',
        'Cashier Fraud Detection',
        'Advanced analytics & insights',
        'Priority customer support',
        'Suspicious Transaction Monitoring',
      ],
      cta: 'Choose this plan',
      popular: true,
    },
    {
      icon: Rocket,
      name: 'Enterprise',
      monthlyPrice: '1499',
      annualPrice: '1299',
      description: 'Built for organizations requiring maximum control and compliance',
      features: [
        'Single Premises Monitoring',
        'Dedicated business consultant',
        'Enterprise-grade compliance',
        '24/7 VIP support',
        'Every Transaction Monitoring',
      ],
      cta: 'Schedule a call',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.08)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Transparent Service Value
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Choose a plan that matches your requirements.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annually
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary shadow-2xl shadow-primary/20'
                  : 'bg-gray-900/50 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 right-8">
                  <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold border border-gray-700">
                    Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-2 rounded-lg ${plan.popular ? 'bg-primary/20' : 'bg-gray-800'}`}>
                  <plan.icon className={plan.popular ? 'text-primary' : 'text-gray-400'} size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-black text-white">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30'
                    : 'bg-transparent text-white border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50'
                }`}
              >
                {plan.cta} →
              </motion.button>

              {/* Features */}
              <div className="space-y-1 mb-4">
                <p className="text-white font-semibold text-sm mb-3">What's Included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            All plans include professional installation and training • No long-term contracts • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
