import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, SearchIcon, XIcon} from "lucide-react"
import { useAuth } from "../context/AuthContext"; // New import

const Navbar = () => {

  const [isOpen, setIsopen,] = useState(false) //rendre la navbar responsive
  const { isAuthenticated, user, logoutUser, loading } = useAuth(); // Using useAuth hook


  const navigate = useNavigate()

    return (
        <div className='fixed top-0 left-0 z-50 w-full flex items-center 
        justify-between px-6 md:px-16 lg:px-36 py-5'>
           <Link to='/' className="max-md:flex-1">
             <span className="flex items-center gap-1 px-6 py-3 text-sm bg-primary
        text-laravel-red transition rounded-full font-medium text-laravel-red
        cursor-pointer  hover:bg-primary-dull">ULB TV</span>
           </Link> 

           <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium
           max-md:text-lg z-50 flex flex-col md:flex-row items-center
           max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen
           min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border
           border-gray-300/20 overflow-hidden transition-[width] 
           duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'} `} >

            <XIcon className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" 
            onClick={()=>setIsopen(!isOpen)}/>


              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/'>Home</Link>
              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/questions'>Questions</Link>
              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/events'>Evenements</Link>
              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/blog'>Blog</Link>
              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/podcasts'>Podcasts</Link> {/* Added link for new page */}
              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/videos'>Videos</Link> {/* Added link for new page */}
           </div>


           <div className="flex items-center gap-8">
              <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer"/>
            
              {loading ? ( // Show loading state for auth
                <span>Loading...</span>
              ) : isAuthenticated ? (
                <>
                  <span className="text-white">Welcome, {user?.name}!</span>
                  <button onClick={logoutUser} className="px-4 py-1 sm:px-7 sm:py-2 bg-primary
                    hover:bg-primary-dull transition rounded-full font-medium text-laravel-red
                    cursor-pointer">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-4 py-1 sm:px-7 sm:py-2 bg-primary
                    hover:bg-primary-dull transition rounded-full font-medium text-laravel-red
                    cursor-pointer">Login</Link>
                </>
              )}
              
           </div>

           <MenuIcon className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
           onClick={()=>setIsopen(!isOpen)}/>
        </div>
    )
}

export default Navbar
