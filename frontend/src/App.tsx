
import Navbar from "./components/Navbar.tsx"
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from "./pages/Home"
import {Toaster} from 'react-hot-toast'
import Footer from "./components/Footer"
import Questions from "./pages/Questions.tsx"
import Events from "./pages/Events.tsx"
import Article from "./pages/Article.tsx"
import ArticleDetails from "./pages/ArticleDetails.tsx"


const App = () =>{

  const isAdminRoute = useLocation().pathname.startsWith('/admin') //precise que les users ne peuvent pas acceder ce lien

  return(
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}  
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/questions' element={<Questions/>} />
        <Route path='/events'  element={<Events/>}/>
        <Route  path='/blog' element={<Article/>}/>
        <Route path='/blog/:id' element={<ArticleDetails />} />
      
      </Routes>
      {!isAdminRoute && <Footer />}
     


    </>
  )
}
export default App
