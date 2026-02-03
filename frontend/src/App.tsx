
import Navbar from "./components/Navbar.tsx"
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from "./pages/Home"
import {Toaster} from 'react-hot-toast'
import Footer from "./components/Footer"
import Questions from "./pages/Questions.tsx"
import Events from "./pages/Events.tsx"
import Article from "./pages/Article.tsx"
import ArticleDetails from "./pages/ArticleDetails.tsx"
import Podcast from "./pages/Podcast.tsx" // New import
import PodcastDetails from "./pages/PodcastDetails.tsx" // New import
import Video from "./pages/Video.tsx" // New import
import VideoDetails from "./pages/VideoDetails.tsx" // New import
// import Signup from "./pages/Signup.tsx" // Removed import
import Login from "./pages/Login.tsx" // New import
import AdminDashboard from "./pages/AdminDashboard.tsx" // New import
import ProtectedAdminRoute from "./components/ProtectedAdminRoute.tsx" // New import
import AdminArticles from "./pages/AdminArticles.tsx" // New import for admin articles
import ArticleForm from "./components/ArticleForm.tsx" // New import for article form
import AboutUs from "./pages/AboutUs.tsx" // New import for AboutUs page
import AdminPodcasts from "./pages/AdminPodcasts.tsx" // New import for admin podcasts
import PodcastForm from "./components/PodcastForm.tsx" // New import for podcast form


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
        <Route path='/blog/:slug' element={<ArticleDetails />} />
        <Route  path='/podcasts' element={<Podcast/>}/> {/* New route */}
        <Route path='/podcasts/:slug' element={<PodcastDetails />} /> {/* New route */}
        <Route  path='/videos' element={<Video/>}/> {/* New route */}
        <Route path='/videos/:slug' element={<VideoDetails />} /> {/* New route */}
        {/* <Route  path='/signup' element={<Signup/>}/> Removed route */}
        <Route path='/login' element={<Login />} /> {/* New route */}
        <Route path='/about-us' element={<AboutUs />} /> {/* New route for About Us */}

        {/* Admin Routes */}
        <Route path="/" element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/articles" element={<AdminArticles />} />
          <Route path="/admin/articles/new" element={<ArticleForm />} />
          <Route path="/admin/articles/edit/:id" element={<ArticleForm isEditing={true} />} />

          {/* Podcast Admin Routes */}
          <Route path="/admin/podcasts" element={<AdminPodcasts />} />
          <Route path="/admin/podcasts/new" element={<PodcastForm />} />
          <Route path="/admin/podcasts/edit/:id" element={<PodcastForm isEditing={true} />} />
        </Route>
      
      </Routes>
      {!isAdminRoute && <Footer />}
     


    </>
  )
}
export default App
