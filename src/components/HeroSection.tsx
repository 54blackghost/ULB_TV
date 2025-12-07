import React from 'react';
import { ArrowRight} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {


  const navigate = useNavigate()
  
  return(
    <div className=" flex flex-col items-start justify-center gap-4
      px-6 md:px-16 lg:px-16 bg-[url('/logo.jpg')]
      bg-cover bg-center h-screen">
      
      
      <h1 className="text-5xl md:text-[65px] md:leading-16 font-semibold max-w-120">
        ULBTV Tech & Innovations
      </h1>

      <p className="max-w-md text-gray-300"> Bienvenue sur le site ULB TV, ici nous parlons Tech, Innovations, Infos et 
        les plus gros rassemblement de développeurs du Cameroun et de l'Afrique
      </p>



      <button onClick={()=> navigate('/blog')} className="flex items-center gap-1 px-6 py-3 text-sm bg-primary
        text-laravel-red transition rounded-full font-medium cursor-pointer">
        Explore Blogs
        <ArrowRight className="w-5 h-5"/>
      </button>
 
        
     

    </div>  
        
  );
}

export default HeroSection;