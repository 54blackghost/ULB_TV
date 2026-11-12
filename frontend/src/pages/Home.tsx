import { About } from '../components/site/About'
import { Hero } from '../components/site/Hero'
import React from 'react'

import { Events } from '../components/site/Events'
import FeaturesSection from '../components/site/FeaturesSection'
//import BlogCard  from '../components/site/BlogCard'

 const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <FeaturesSection/>
      <Events/>
    </>
  )
}

export default Home
