
import Navbar from "./components/Navbar.tsx"
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from "./pages/Home"
import {Toaster} from 'react-hot-toast'
import Footer from "./components/Footer"


const App = () =>{

  const isAdminRoute = useLocation().pathname.startsWith('/admin') //precise que les users ne peuvent pas acceder ce lien

  return(
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}  
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/questions' />
        <Route path='/evenements'  />
        <Route  path='/blog' />
      
      </Routes>
      {!isAdminRoute && <Footer />}
     


    </>
  )
}
export default App
