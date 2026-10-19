import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, SearchIcon, TicketPlus, XIcon} from "lucide-react"


const Navbar = () => {

  const [isOpen, setIsopen,] = useState(false) //rendre la navbar responsive



  const navigate = useNavigate()


    return (
        <div className='fixed top-0 left-0 z-50 w-full flex items-center 
        justify-between px-6 md:px-16 lg:px-36 py-5'>
           <Link to='/' className="max-md:flex-1">
            <span className="font-display font-bold text-xl tracking-tight">
                ULB <span className="text-gradient">TV</span>
            </span>
           </Link> 

           <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium
           max-md:text-lg z-50 flex flex-col md:flex-row items-center
           max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen
           min-md:rounded-full backdrop-blur bg-black/70 hover:text-foreground md:bg-white/10 md:border
           border-gray-300/20 overflow-hidden transition-[width] 
           duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'} `} >

            <XIcon className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer" 
            onClick={()=>setIsopen(!isOpen)}/>


              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/'>Home</Link>
              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/about'>About</Link>
              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/blogs'>Blogs</Link>
              <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/events'>Events</Link>
           </div>


          
            <div className="hidden lg:flex items-center gap-3">
                <a
                    href="#community"
                    className="px-5 py-2.5 rounded-full bg-gradient-primary text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]"
                >
                    Join Community
                </a>
            </div>
        </div>
        
    )
}

export default Navbar