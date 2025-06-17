import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Service from '../components/Service'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Service />
      <Footer />
    </div>
  )
}

export default Home