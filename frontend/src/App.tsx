
import './App.css'
import {Route, Routes, useLocation} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import  Navbar  from './components/site/Navbar'
import  Home  from './pages/Home'
import Blogs from './pages/Blogs'
import  Footer  from './components/site/Footer'
import BlogDetails from './pages/BlogDetails'
import {About }  from './components/site/About'
import { Events } from './components/site/Events'



function App() {
  

  return(
    <>
      <Toaster />
      <Navbar />   
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/blog' element={<Blogs />}/>
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <Footer />
     


    </>
  )
  
}

export default App
