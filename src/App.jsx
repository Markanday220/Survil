import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Products from './components/Products'
import HowItWorks from './components/HowItWorks'
import Industries from './components/Industries'
import CaseStudies from './components/CaseStudies'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const openDemoModal = () => setIsDemoModalOpen(true)
  const closeDemoModal = () => setIsDemoModalOpen(false)

  return (
    <div className="relative">
      <Navbar onBookDemo={openDemoModal} />
      <Hero onBookDemo={openDemoModal} />
      <TrustBar />
      <Problem />
      <Solution />
      <Features />
      <Products />
      <HowItWorks onBookDemo={openDemoModal} />
      <Industries />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <FinalCTA onBookDemo={openDemoModal} />
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  )
}

export default App
