import React from 'react'
import Hero from './Hero'
import HomeAbout from './HomeAbout'
import HomeServices from './HomeServices'
import Success from './Succes'
import WorkProcess from './WorkProcess'
import TeamSection from './TeamSection'
import TestimonialSection from './TestimonialSection'
import InsightsSection from './InsightsSection'
import ContactSection from './ContactSection'
import SubHero from './SubHero'
import BackgroundSection from './BackgroundSection'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <Hero />
        <HomeAbout />
        <HomeServices />
        <Success />
        <WorkProcess />
        <BackgroundSection />
        <TeamSection />
        <TestimonialSection />
        <InsightsSection />
        <ContactSection />
    </div>
  )
}

export default Home