
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlurCircle from "./BlurCircle.tsx";
import { mockArticles, mockEvents, mockQuestions } from "../data/mockData.ts";
import QuestionCard from "./QuestionCard.tsx";
import EventCard from "./EventCard.tsx";
import ArticleCard from "./ArticleCard.tsx";


const FeaturesSection = () =>  {

    const navigate = useNavigate()

    return (
        //Questions sections
        <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">

            <div className="relative flex items-center justify-between pt-20 pb-10">
                <BlurCircle top="0" right="-80px"/>
                <p className="text-gray-300 font-medium text-lg">Questions</p>
                <button onClick={() => navigate('/questions')} className="group flex 
                items-center gap-2 text-sm text-gray-300 cursor-pointer">
                    View All
                    <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5"/>
                    </button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {mockQuestions.slice(0, 3).map((question) => (
              <QuestionCard key={question.id} {...question} />
            ))}
            </div>
              
            
            <div className="flex justify-center mt-20">
                <button onClick={() => {navigate('/questions'); scrollTo(0,0)}}
                    className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition
                    rounded-md font-medium cursor-pointer">
                    Show more</button>

            </div>

        



         
         {/*Events sections*/}
        
            {mockEvents.length > 0 ?(
                <div>
                    <div className="relative flex items-center justify-between pt-20 pb-10">
                <BlurCircle top="0" right="-80px"/>
                <p className="text-gray-300 font-medium text-lg">Evenements</p>
                <button onClick={() => navigate('/events')} className="group flex 
                items-center gap-2 text-sm text-gray-300 cursor-pointer">
                    View All
                    <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5"/>
                    </button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {mockEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
            </div>
              
            
            <div className="flex justify-center mt-20">
                <button onClick={() => {navigate('/events'); scrollTo(0,0)}}
                    className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition
                    rounded-md font-medium cursor-pointer">
                    Show more</button>

            </div>
                </div>
            ):(
                <div className="flex flex-col items-center justify-center h-screen">
                  <h1 className="text-3xl font-bold text-center">Aucun Evenements disponible </h1>
                </div>
            )}
            






             
         {/*Blog sections*/}
        
            {mockArticles.length > 0 ?(
                <div>
                    <div className="relative flex items-center justify-between pt-20 pb-10">
                <BlurCircle top="0" right="-80px"/>
                <p className="text-gray-300 font-medium text-lg">Blog</p>
                <button onClick={() => navigate('/blog')} className="group flex 
                items-center gap-2 text-sm text-gray-300 cursor-pointer">
                    View All
                    <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5"/>
                    </button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {mockArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
            </div>
              
            
            <div className="flex justify-center mt-20">
                <button onClick={() => {navigate('/blog'); scrollTo(0,0)}}
                    className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition
                    rounded-md font-medium cursor-pointer">
                    Show more</button>

            </div>
                </div>
            ):(
                <div className="flex flex-col items-center justify-center h-screen">
                  <h1 className="text-3xl font-bold text-center">Aucun Blog disponible </h1>
                </div>
            )}
            
        </div>
    )
}

export default FeaturesSection