import React, { useEffect } from 'react';
import { Users, BookOpen, MessageSquare } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

// 1. Création d'un composant dédié pour l'animation du nombre
function AnimatedNumber({ value }: { value: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const animatedValue = useSpring(0, {
    damping: 20,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      animatedValue.set(value);
    }
  }, [isInView, value, animatedValue]);

  // CORRECTION : Utilisation de useTransform pour formater la valeur
  // On transforme la valeur animée (un nombre potentiellement à virgule) en un entier (string)
  const displayValue = useTransform(animatedValue, (latest) => {
    return latest.toFixed(0);
  });

  // On affiche la MotionValue transformée
  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const Stats = () => {
  const stats = [
    { icon: Users, label: 'Développeurs', value: '2500+' },
    { icon: BookOpen, label: 'Articles', value: '450+' },
    { icon: MessageSquare, label: 'Discussions', value: '1200+' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
      {stats.map((stat, index) => {
        const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
        const suffix = stat.value.replace(/[0-9]/g, '');

        return (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary-dull rounded-lg backdrop-blur-sm">
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">
              <AnimatedNumber value={numericValue} />
              {suffix}
            </div>
            <div className="text-white/80 text-sm">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
