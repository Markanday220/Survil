import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Clock, Shield, DollarSign } from 'lucide-react'

const CaseStudies = () => {
  const results = [
    {
      icon: TrendingDown,
      metric: '45%',
      label: 'Theft Reduction',
      description: 'Average decrease in shrinkage within first 90 days',
      color: 'text-primary',
    },
    {
      icon: Clock,
      metric: '95%',
      label: 'Faster Response',
      description: 'Incidents detected and addressed in real-time',
      color: 'text-primary',
    },
    {
      icon: Shield,
      metric: '99.2%',
      label: 'Detection Accuracy',
      description: 'AI-powered threat identification success rate',
      color: 'text-primary',
    },
    {
      icon: DollarSign,
      metric: '$75K',
      label: 'Average Savings',
      description: 'Annual loss prevention per location',
      color: 'text-primary',
    },
  ]

  const testimonials = [
    {
      quote: "Hi, I own a Circle K store in Modesto. I availed their services about a year ago, and the results were excellent. My sales nearly doubled after shoplifting issues were identified and effectively prevented. I confidently endorse their services, especially for stores located in high-crowd areas.",
      author: "Jaspreet Singh",
      role: "",
      company: "",
    },
    {
      quote: "Using their services significantly improved cashier productivity at my 7-Eleven store in Washington. The team also helped us consistently maintain franchise standards, which made daily operations smoother and more compliant. I highly recommend their services.",
      author: "R. Bajwa",
      role: "",
      company: "",
    },
    {
      quote: "Survill helped me identify cash fraud by two employees, saving my store from a major loss. Extremely reliable service. 10/10 recommended.",
      author: "Karam Singh",
      role: "",
      company: "",
    },
    {
      quote: "For the first time in five years, I enjoyed a stress-free vacation. Survill kept my stores secure even in my absence, with no worries about staff or shoplifting.",
      author: "L. Wordworth, Austin",
      role: "",
      company: "",
    },
  ]

  return (
    <section id="case-studies" className="relative py-24 bg-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Proven Results That
            <br />
            <span className="text-primary">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses achieving measurable security improvements and ROI
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <result.icon className="text-primary" size={32} />
                </div>
                <div className="text-5xl font-black text-primary mb-2">{result.metric}</div>
                <div className="text-gray-900 font-bold text-lg mb-2">{result.label}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10">
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  {testimonial.role && <div className="text-gray-600 text-sm">{testimonial.role}</div>}
                  {testimonial.company && <div className="text-primary text-sm font-semibold mt-1">{testimonial.company}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
