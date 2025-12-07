import { Users, BookOpen, MessageSquare } from 'lucide-react';

const Stats = () => {

const stats = [
    { icon: Users, label: 'Développeurs', value: '2500+' },
    { icon: BookOpen, label: 'Articles', value: '450+' },
    { icon: MessageSquare, label: 'Discussions', value: '1200+' },
  ];
  return (
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary-dull rounded-lg backdrop-blur-sm">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
  );
};

export default Stats;
