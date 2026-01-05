import React from 'react'
import Banner from '../components/Home/Banner'
import InfoSection from '../components/Home/InfoSection'
import DoctorSection from '../components/Home/DoctorSection'
import NewsSection from '../components/Home/NewsSection'
import WhyUsSection from '../components/Home/WhyUsSection'
import TestimonialSection from '../components/Home/TestimonialSection'

const Home: React.FC = () => {
  return (
    <main>
        <Banner />
        <InfoSection />
        <DoctorSection />
        <NewsSection />
        <WhyUsSection />
        <TestimonialSection />
    </main>
  )
}

export default Home
