import React from 'react';
import { ArrowRight, Users, BookOpen, MessageSquare } from 'lucide-react';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Développeurs', value: '2500+' },
    { icon: BookOpen, label: 'Articles', value: '450+' },
    { icon: MessageSquare, label: 'Discussions', value: '1200+' },
  ];

  return (
    <section className="bg-gradient-laravel text-white py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            La plus grande communauté de
            <span className="block text-yellow-200">développeurs Laravel & PHP</span>
            <span className="block">au Cameroun</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Bienvenue sur le site de la communauté des développeurs PHP et Laravel du Cameroun, 
            le plus gros rassemblement de développeurs au Cameroun
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="secondary" size="lg" className="bg-white text-laravel-red hover:bg-gray-100">
              Rejoindre la communauté
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-laravel-red">
              Découvrir les articles
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;