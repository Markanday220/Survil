import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How quickly can the system be installed?',
      answer: 'Most installations are completed within 7-14 days from the initial consultation. Our certified technicians work efficiently to minimize disruption to your business operations. We handle everything from site analysis to final testing and training.'
    },
    {
      question: 'What happens if my internet connection goes down?',
      answer: 'Our systems include local storage backup that continues recording even without internet. Once connectivity is restored, footage automatically syncs to the cloud. Critical alerts can also be sent via SMS to ensure you\'re always informed.'
    },
    {
      question: 'Can I access footage from multiple locations?',
      answer: 'Yes! Our cloud-based platform allows you to monitor all your locations from a single dashboard. Access live feeds and recorded footage from any device - smartphone, tablet, or computer - from anywhere in the world.'
    },
    {
      question: 'How accurate is the AI detection system?',
      answer: 'Our AI detection system maintains a 99.2% accuracy rate. It\'s trained on millions of surveillance scenarios and continuously learns from your specific business patterns. This significantly reduces false alarms while catching genuine threats in real-time.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All plans include professional support. Starter plans get business hours email and phone support. Professional plans receive priority 24/7 support. Enterprise clients get a dedicated account manager and VIP support with guaranteed response times.'
    },
    {
      question: 'Is there a long-term contract required?',
      answer: 'No long-term contracts required. We offer month-to-month plans because we\'re confident you\'ll love our service. You can cancel anytime with 30 days notice. We also offer a 30-day money-back guarantee for new customers.'
    },
    {
      question: 'Can the system integrate with my existing POS?',
      answer: 'Yes! Our Professional and Enterprise plans include POS integration with most major systems including Square, Clover, Toast, and more. This allows us to correlate transactions with video footage to detect cashier fraud and suspicious activities.'
    },
    {
      question: 'What if I need more cameras than my plan includes?',
      answer: 'You can easily upgrade your plan or add additional cameras at any time. We offer flexible scaling options to grow with your business. Contact our team to discuss custom configurations that meet your specific needs.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-light-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Frequently Asked
            <br />
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our surveillance solutions
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-primary text-white rotate-180' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Get in touch and we'll answer any questions you have.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
