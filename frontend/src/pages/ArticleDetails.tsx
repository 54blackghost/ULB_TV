import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BlurCircle from '../components/BlurCircle'
import { Heart, StarIcon } from 'lucide-react'
import Loading from '../components/Loading'
import ArticleCard from '../components/ArticleCard'
import { mockArticles } from '../data/mockData'

const ArticleDetails = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [blog, setBlog] = useState<{ article: string } | null>(null);
 


  //fonction pour afficher les details d'une serie
  const getBlog = async ()=>{
    const blog = mockArticles.find(blog => blog.id )
    if (blog) {
      setBlog(prev => ({
      ...prev,
      article: blog,
      dateTime: dummyDateTimeData
    }));
    }
    
  }
  useEffect(()=>{
    getBlog()
  },[id])


  return blog ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        
        <img src={blog.article.poster_path} alt="image" className="max-md:mx-auto
        rounded-xl h-104 w-70 object-cover" />
         
        <div className="relative flex flex-col gap-3">
            <BlurCircle  top="100px" left="100px"/>
            <p className="text-primary">ENGLISH</p>
            <h1 className="text-4xl font-semibold max-w-96 text-balance">{blog.article.title}</h1>
            <div className="flex items-center gap-2 text-gray-300">
              <StarIcon  className="w-5 h-5 text-primary fill-primary"/>
              {blog.article.vote_average.toFixed(1)} User Rating
            </div>

            <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
              {blog.article.excerpt}
            </p> 

            <p>
              {timeFormat(blog.article.runtime)} . {blog.article.genres.map(genre =>
                genre.name).join(", ")} . {blog.article.publishedAt.split("-")[0]}
            </p>

            <div className="flex items-center flex-wrap gap-4 mt-4">
              <button className="flex items-center gap-2 px-7 py-3 test-sm
              bg-gray-800 hover:bg-gray-900 transtion rounded-md font font-medium 
              cursor-pointer active:scale-95">
                <PlayCircleIcon className="w-5 h-5"/>
                Watch Trailler
                </button>
              <a href="#dateSelect" className="px-10 py-3 text-sm bg-primary 
              hover:bg-primary-dull transition rounded-md font-medium cursor-pointer
               active:scale-95">Buy Tickets</a>
              <button className="bg-gray-700 p-2.5 rounded-full transition *:cursor-pointer active:scale-95">
                <Heart className={'w-5 h-5'}/>
              </button>
            </div>
        </div>
      </div> 

      <p className="text-lg font-medium mt-20">Your Favorite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">
          {blog.article.author.slice(0,12).map((author, index)=>(
            <div key={index} className="flex flex-col items-center text-center">
               <img src={author.avatar} alt="image" className="rounded-full h-20
               md:h-20 aspect-square object-cover"/>
               <p className="font-medium text-xs mt-3">{author.name}</p>
            </div>
      
          ))}
        </div>
      </div>

      

       <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
       
       <div className="flex flex-wrap max-sm:justify-center gap-4">
        {mockArticles.slice(0,4).map((article, index)=>(
          <ArticleCard key={index} {...article}/>
        ))}
       </div>
        


       <div className="flex justify-center mt-20">
        <button onClick={()=>{navigate('/movies'); scrollTo(0,0)}} className="px-10
        py-3 text-sm bg-primary hover:bg-primary-dull transition
        rounded-md font-medium cursor-pointer">
         Show more 
        </button>
       </div>
    </div>
  ) : <Loading/>
}

export default ArticleDetails
