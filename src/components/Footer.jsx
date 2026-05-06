import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    Solutions: [
      { name: 'CCTV Systems', href: '#products' },
      { name: 'AI Monitoring', href: '#features' },
      { name: 'Live Surveillance', href: '#solution' },
      { name: 'Cloud Storage', href: '#features' },
    ],
    Industries: [
      { name: 'Retail Stores', href: '#industries' },
      { name: 'Gas Stations', href: '#industries' },
      { name: 'Warehouses', href: '#industries' },
      { name: 'Restaurants', href: '#industries' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'System Status', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img 
                src="/Public/survill-logo.png" 
                alt="Survill Logo" 
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                AI-powered surveillance and loss prevention solutions protecting businesses 24/7.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:info@survill.com" className="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>info@survill.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Security Blvd, Suite 100<br />Los Angeles, CA 90001</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-gray-900 font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Survill. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100 hover:bg-primary/10 border border-gray-200 hover:border-primary/30 w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:text-primary transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Credit Section */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 border border-gray-300 bg-gray-50 shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-300">
              <a
                href="https://fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="FabulousMedia"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                  className="h-3 w-auto"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
              <div className="h-3 w-px bg-gray-300 transition-colors duration-300"></div>
              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-0.5 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="GoCommercially"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                  className="h-3 w-auto"
                  loading="lazy"
                  width="80"
                  height="12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
