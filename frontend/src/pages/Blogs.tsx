import React, { useEffect, useState } from "react"
import BlurCircle from "../components/ui/BlurCircle"
//import { mockArticles } from "../data/mockData"
import BlogCard from "../components/site/BlogCard"



const Blogs = () =>{
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




  //boucle pour tester la presence d'une donnee
  return data.length > 0 ?(
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44
    overflow-hidden min-h[80vh]">


      <BlurCircle top="150px" left="0px"/>
      <BlurCircle bottom="50px" right="50px"/>  


     <h1 className="text-lg font-medium my-4">Now Blogs</h1>

      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {data.map((blog) => (
          //fonction permettant d'afficher les donnees stocker en fonction de l'id
          <BlogCard blog={blog} key={blog.id}/>
        ))}
      </div>
    </div>
  ) : (
     <div className="flex flex-col items-center justify-center h-screen">
       <h1 className="text-3xl font-bold text-center">No blogs availabble </h1>
     </div>
  )
}
export default Blogs