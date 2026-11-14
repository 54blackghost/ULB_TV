import React, { useEffect, useState } from "react"
import { useNavigate, useParams} from 'react-router-dom'
import BlurCircle from "../components/ui/BlurCircle"
import { Eye, Heart, PlayCircleIcon, StarIcon} from "lucide-react"
import timeFormat from "../lib/timeFormat"
//import { mockArticles } from "../data/mockData"
import Loading from "../components/site/Loading"
import BlogCard from "../components/site/BlogCard"




const BlogDetails = () =>{
  const navigate = useNavigate()
  const {id} = useParams()
  const [blogs, setBlogs] = useState(null)
  const [data, setData] = useState([]);
  
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      //pour tester sur mon pc, j'ai mis l'adresse ip de mon pc, mais il faudra la changer pour que ça fonctionne sur ton pc en mettant 
      // l'adresse ip de ton pc
      const response = await fetch('http://127.0.0.1:8000/api/v1/');
      const json = await response.json();
      setData(json);
    };


  //fonction pour afficher les details d'une serie
  const getDetail = async ()=>{
    const details = data.find(details => details.id)
    if (details) {
      setBlogs({
      blog: details,
      //dateTime: dummyDateTimeData
    })
    }
    
  }
  useEffect(()=>{
    getDetail()
  },[id])


  return blogs ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        
        <img src={blogs.blog.image} alt="image" className="max-md:mx-auto
        rounded-xl h-104 w-70 object-cover" />
         
        <div className="relative flex flex-col gap-3">
            <BlurCircle  top="100px" left="100px"/>
            <h1 className="text-4xl font-semibold max-w-96 text-balance">{blogs.blog.title}</h1>
            <div className="flex items-center gap-2 text-gray-300">
              <StarIcon  className="w-5 h-5 text-primary fill-primary"/>
              {blogs.blog.vote_average.toFixed(1)} User Rating
            </div>

            <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
              {blogs.blog.body}
            </p> 

            <p className="text-sm text-gray-400 mt-2">
                {new Date (blogs.blog.publishedAt).getFullYear()} . {blogs.blog.categorys.map
                //fonction permettant de recuperer les informations dans le fichier assets.js qui doit etre afficher
                (category => category.name).join(" | ")} . {timeFormat(blogs.blog.readTime)}
            </p>

            <div className="flex items-center flex-wrap gap-4 mt-4">
            
               <p className="text-sm text-gray-400 mt-2">
               </p>

               
              <p className="px-10 py-3 text-sm bg-primary transition rounded-md font-medium">
                <div className="flex items-center gap-2 text-gray-300">
                  <Eye className="w-5 h-5"/>
                  {blogs.blog.views}
                 </div>
              </p>
             

  


              <button className="flex items-center gap-2 px-7 py-3 test-sm
               bg-gray-800 hover:bg-gray-900 transtion rounded-md font font-medium 
                cursor-pointer active:scale-95">
                <Heart className={'w-5 h-5'}/>{blogs.blog.likes}
              </button>
            </div>
        </div>
      </div> 

     

   

       <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
       
       <div className="flex flex-wrap max-sm:justify-center gap-4">
        {mockArticles.slice(0,4).map((blog, index)=>(
          <BlogCard key={index} blog={blog}/>
        ))}
       </div>
        


       <div className="flex justify-center mt-20">
        <button onClick={()=>{navigate('/blogs'); scrollTo(0,0)}} className="px-10
        py-3 text-sm bg-primary hover:bg-primary-dull transition
        rounded-md font-medium cursor-pointer">
         Show more 
        </button>
       </div>
    </div>
  ) : <Loading/>
}
export default BlogDetails