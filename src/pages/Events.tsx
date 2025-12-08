
import { mockEvents } from '../data/mockData'
import EventCard from '../components/EventCard'
import BlurCircle from '../components/BlurCircle'

const Events = () => {
   //boucle pour tester la presence d'une donnee
  return mockEvents.length > 0 ?(
    <div className="relative my-40 mb-60 px-6 md:px lg:px-40 xl:px-44
    overflow-hidden min-h[80vh]">


      <BlurCircle top="150px" left="0px"/>
      <BlurCircle bottom="50px" right="50px"/>  


     <h1 className="text-lg font-medium my-4">Evenements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockEvents.map((event) => (
          //fonction permettant d'afficher les donnees stocker en fonction de l'id
         // <MovieCard movie={movie} key={movie._id}/>
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  ) : (
     <div className="flex flex-col items-center justify-center h-screen">
       <h1 className="text-3xl font-bold text-center">Aucun Evenements disponible </h1>
     </div>
  )
}

export default Events
