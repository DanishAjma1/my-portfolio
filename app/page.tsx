import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutMe from './Components/About'
import Experience from './Components/Experience'
import LanguagesSection from './Components/Languages'
import RecentProjects from './Components/RecentWorks'
import ContactSection from './Components/Contactus'
import Footer from './Components/Footer'
import Manifesto from './Components/PortfolioMenifesto'

export default function page() {
  return (
    <div className="bg-[#000022]">
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <AboutMe />
      </div>


      <div id="experience">
        <Experience />
      </div>

      <div id="skills">
        <LanguagesSection />
      </div>

      <div id="projects">
        <RecentProjects />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}