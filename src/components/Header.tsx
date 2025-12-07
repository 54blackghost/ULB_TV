import React, { useState } from 'react';
import {  SearchIcon, TicketPlus,MenuIcon  } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import Button from './ui/Button';
import { useClerk, UserButton,  useUser } from "@clerk/clerk-react";


const Header = () => {
    const [isOpen, setIsopen,] = useState(false) //rendre la navbar responsive
    const { user} = useUser()
    const {openSignIn} = useClerk()


  const navigate = useNavigate()


  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-40 h-10 bg-gradient-laravel rounded-md flex items-center justify-center">
                <Link to='/' className="max-md:flex-1">
                  <span className="text-white font-bold text-lg ">ULB TV</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
                <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/'>Home</Link>
                <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/questions'>Questions</Link>
                <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/events'>Événements</Link>
                <Link onClick={()=> {scrollTo(0,0); setIsopen(false)}} to='/blog'>Blog</Link>
                
            </div>
          </nav>

          {/* Right side - Search and Auth */}
          <div className="flex items-center gap-8">
            <button className="p-2 text-gray-500 hover:text-laravel-red transition-colors duration-300">
              <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer" />
            </button>
            
           {
             !user ? (
                    //script permettant de se logger ou signup grace a clerk 
                    <button onClick={openSignIn} className="px-4 py-1 sm:px-7 sm:py-2 bg-primary
                    hover:bg-primary-dull transition rounded-full font-medium
                    cursor-pointer">Login</button>
                ): (
                    //script permettant de voir ses blogs enregistrer
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="Blog" labelIcon=
                            {<TicketPlus width={15}/>} onClick={()=> navigate('/blog')} />
                        </UserButton.MenuItems>
                    </UserButton>
                )
           }

          </div> 

           <MenuIcon className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
           onClick={()=>setIsopen(!isOpen)}/>
        </div>
      </div> 
    </header>
  );
};

export default Header;