import { About } from '../components/site/About'
import { Hero } from '../components/site/Hero'
import React from 'react'

import { Events } from '../components/site/Events'
//import BlogCard  from '../components/site/BlogCard'

 const Home = () => {
  return (
    <>
      <Hero/>
      <br /><br />
      <About/>
      <Events/>
    </>
  )
}

export default Home
