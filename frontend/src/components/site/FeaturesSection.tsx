import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlurCircle from "../ui/BlurCircle";
import BlogCard from "./BlogCard";
import { mockArticles } from "../../data/mockData";




const FeaturesSection = () =>  {

    const navigate = useNavigate()

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">

            <div className="relative flex items-center justify-between pt-20 pb-10">
                <BlurCircle top="0" right="-80px"/>
                <p className="text-gray-300 font-medium text-lg">Now Blogs</p>
                <button onClick={() => navigate('/blogs')} className="group flex 
                items-center gap-2 text-sm text-gray-300 cursor-pointer">
                    View All
                    <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5"/>
                    </button>
            </div>


            <div className="flex flex-wrap max-sm:justify-center gap-6 mt-8">
                {mockArticles.slice(0, 4).map((blogs)=>(
                    //<div> qui contient la fonction permettant d'afficher les 04 moviecards 
                    <BlogCard key={blogs.id} blog={blogs}/>
                ))}
            </div>
              
            
            <div className="flex justify-center mt-20">
                <button onClick={() => {navigate('/blogs'); scrollTo(0,0)}}
                    className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition
                    rounded-md font-medium cursor-pointer">
                    Show more</button>

            </div>

        </div>
    )
}

export default FeaturesSection