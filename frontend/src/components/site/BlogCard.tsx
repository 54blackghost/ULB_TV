import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, StarIcon } from "lucide-react";
import timeFormat from "../../lib/timeFormat";

const BlogCard = ({blog}) => {

    const navigate = useNavigate()

    return (
        <div className="flex flex-col justify-between p-3 bg-gray-800 rounded-2xl
        hover:translate-y-1 transition duration-300 w-60">

            <img onClick={() => {navigate(`/blog/${blog.id}`); scrollTo(0,0)}} src={blog.image} alt="images" className="rounded-lg h-52 w-full
            object-cover object-right-bottom cursor-pointer"/>

            <p className="font-semibold mt-2 truncate">{blog.title}</p>
 
            
             <p className="text-sm text-gray-400 mt-2">
                {new Date (blog.publishedAt).getFullYear()} . {blog.categorys.map
                //fonction permettant de recuperer les informations dans le fichier assets.js qui doit etre afficher
                (category => category.name).join(" | ")} . {timeFormat(blog.readTime)}
            </p>
            
            
            <div className="flex  justify-between mt-4 pd-3">
                <p className="px-10 py-3 text-sm bg-primary transition rounded-md font-medium">
                    <div className="flex items-center gap-2 text-gray-300">
                        <Eye className="w-5 h-5"/>
                        {blog.views}
                    </div>
                </p>

                <p className="flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1">
                    <StarIcon className="w-4 h-4 text-primary fill-primary"/>
                    {blog.vote_average.toFixed(1)}
                </p>
            </div>
            
        </div>

    )
}
export default BlogCard;