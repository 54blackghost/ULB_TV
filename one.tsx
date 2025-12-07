import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import QuestionCard from './components/QuestionCard';
import EventCard from './components/EventCard';
import Footer from './components/Footer';
import { mockArticles, mockQuestions, mockEvents } from './data/mockData';
import { BookOpen, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import Button from './components/ui/Button';

import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      {/* Articles Section */}
      <section id="blogs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-laravel-red/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-laravel-red" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-700">Blogs récents</h2>
                <p className="text-gray-500 mt-1">Découvrez les derniers blogs de notre communauté</p>
              </div>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              Voir tous les blogs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline">
              Voir tous les articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section id="questions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-700">Questions & Réponses</h2>
                <p className="text-gray-500 mt-1">Posez vos questions et aidez la communauté</p>
              </div>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              Poser une question
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockQuestions.map((question) => (
              <QuestionCard key={question.id} {...question} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline">
              Poser une question
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-700">Événements à venir</h2>
                <p className="text-gray-500 mt-1">Participez aux événements de la communauté</p>
              </div>
            </div>
            <Button variant="outline" className="hidden sm:flex">
              Voir tous les événements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline">
              Voir tous les événements
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-laravel">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rejoignez notre communauté dès aujourd'hui
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Plus de 2500 développeurs partagent leurs connaissances, s'entraident et 
            font évoluer l'écosystème Tech au Cameroun et en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-laravel-red hover:bg-gray-100">
              Créer un compte gratuit
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-laravel-red">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );




 
}

export default App;