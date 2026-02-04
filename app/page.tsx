import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import AboutMe from './Components/About'
import Experience from './Components/Experience'
import LanguagesSection from './Components/Lnaguages'
import RecentProjects from './Components/RecentWorks'
import ContactSection from './Components/Contactus'
import Footer from './Components/Footer'
import PortfolioManifesto from './Components/About'
import Manifesto from './Components/PortfolioMenifesto'

export default function page() {
  return (
    <div className="bg-[#020617]">
      <Navbar />
      
      {/* Home / Hero Section */}
      <div id="home">
        <Hero />
      </div>

      <div>
       <Manifesto/>
      </div>

      {/* About Section */}
      <div id="about">
        <AboutMe />
      </div>


      {/* Experience Section */}
      <div id="experience">
        <Experience />
      </div>

      {/* Skills Section (Languages) */}
      <div id="skills">
        <LanguagesSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <RecentProjects />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}