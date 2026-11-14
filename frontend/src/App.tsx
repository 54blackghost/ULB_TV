
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import  Navbar  from './components/site/Navbar'
import  Home  from './pages/Home'
import Blogs from './pages/Blogs'
import  Footer  from './components/site/Footer'
import BlogDetails from './pages/BlogDetails'
import {About }  from './components/site/About'
import { Events } from './components/site/Events'
import { useEffect,  useState } from 'react'



function App() {
 
  

  return(
    <>
      <Toaster />
      <Navbar />   
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/blogs' element={<Blogs />}/>
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/events' element={<Events />} />
      </Routes>


      <br /><br />
      <Footer />
     


    </>
  )
  
}

export default App
