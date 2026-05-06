import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Reviews = () => {
  const reviews = [
    {
      text: '"Hi, I own a Circle K store in Modesto. I availed their services about a year ago, and the results were excellent. My sales nearly doubled after shoplifting issues were identified and effectively prevented. I confidently endorse their services, especially for stores located in high-crowd areas."',
      author: 'Jaspreet Singh'
    },
    {
      text: '"Using their services significantly improved cashier productivity at my 7-Eleven store in Washington. The team also helped us consistently maintain franchise standards, which made daily operations smoother and more compliant. I highly recommend their services."',
      author: 'R. Bajwa'
    },
    {
      text: '"Survill helped me identify cash fraud by two employees, saving my store from a major loss. Extremely reliable service. 10/10 recommended."',
      author: 'Karam Singh'
    },
    {
      text: '"For the first time in five years, I enjoyed a stress-free vacation. Survill kept my stores secure even in my absence, with no worries about staff or shoplifting."',
      author: 'L. Wordworth, Austin'
    }
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.08)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            What Our Clients
            <br />
            <span className="text-primary">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories from business owners who transformed their security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
            >
              {/* 5 Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={20} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                {review.text}
              </p>

              {/* Author */}
              <div className="border-t border-gray-800 pt-4">
                <p className="text-white font-bold">{review.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Reviews
