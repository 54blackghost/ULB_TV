import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Variante pour l'animation du conteneur principal
// 'visible' déclenche l'animation des enfants avec un décalage (stagger) de 0.3s entre eux
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Variante pour les éléments enfants (titre, paragraphe, bouton)
// Ils apparaissent avec un fondu (opacity) et un léger déplacement vertical (slide)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    // Utilisation de motion.div pour animer le conteneur de la section
    // L'animation se déclenche quand le composant entre dans le viewport (whileInView)
    // et ne se joue qu'une seule fois (viewport={{ once: true }})
    <motion.div
      className="flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-16 bg-[url('/logo.png')] bg-cover bg-center h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animation du titre h1 */}
      <motion.h1
        className="text-5xl md:text-[65px] md:leading-16 font-semibold max-w-120"
        variants={itemVariants}
      >
        ULBTV Tech & Innovations
      </motion.h1>

      {/* Animation du paragraphe */}
      <motion.p
        className="max-w-md text-gray-300"
        variants={itemVariants}
      >
        Bienvenue sur le site ULB TV, ici nous parlons Tech, Innovations, Infos et les plus gros rassemblement de
        développeurs du Cameroun et de l'Afrique
      </motion.p>

      {/* Animation du bouton */}
      <motion.button
        onClick={() => navigate('/blog')}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary text-laravel-red transition rounded-full font-medium cursor-pointer"
        variants={itemVariants}
        // Animation au survol : le bouton grossit légèrement
        whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a' }}
        // Animation de pulsation subtile et continue
        animate={{
          scale: [1, 1.02, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        Explore Blogs
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default HeroSection;