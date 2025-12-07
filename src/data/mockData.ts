

export const mockArticles = [
  {
    id: 1,
    title: "Guide complet pour débuter avec Laravel 10 en 2024",
    excerpt: "Découvrez toutes les nouveautés de Laravel 10 et apprenez à créer votre première application web moderne avec ce framework PHP puissant.",
    author: {
      name: "Arthur Monney",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    publishedAt: "12 Jan 2024",
    readTime: "8 min de lecture",
    views: 1240,
    likes: 89,
    category: "Laravel",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Optimisation des performances PHP : Les meilleures pratiques",
    excerpt: "Apprenez à optimiser vos applications PHP pour des performances maximales avec des techniques avancées et des outils professionnels.",
    author: {
      name: "Stephane Mounong",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    publishedAt: "10 Jan 2024",
    readTime: "12 min de lecture",
    views: 987,
    likes: 76,
    category: "PHP",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "API REST avec Laravel Sanctum : Authentification moderne",
    excerpt: "Créez des APIs sécurisées avec Laravel Sanctum et implémentez une authentification robuste pour vos applications mobiles et web.",
    author: {
      name: "Bovealexandre",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    publishedAt: "8 Jan 2024",
    readTime: "15 min de lecture",
    views: 1456,
    likes: 102,
    category: "API",
    image: "https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const mockQuestions = [
  {
    id: 1,
    title: "Comment gérer les relations Many-to-Many avec des données pivot dans Laravel ?",
    excerpt: "J'ai une relation many-to-many entre User et Role avec des données supplémentaires dans la table pivot. Comment puis-je récupérer et manipuler ces données ?",
    author: {
      name: "Jean Dupont",
      avatar: "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    postedAt: "Il y a 2 heures",
    answers: 3,
    votes: 5,
    tags: ["Laravel", "Eloquent", "Relations"],
    solved: false
  },
  {
    id: 2,
    title: "Problème de performance avec Query Builder sur une grande table",
    excerpt: "Ma requête prend trop de temps à s'exécuter sur une table avec plus de 100k enregistrements. Quelles sont les meilleures pratiques d'optimisation ?",
    author: {
      name: "Marie Kouam",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    postedAt: "Il y a 4 heures",
    answers: 7,
    votes: 12,
    tags: ["Performance", "Database", "Optimization"],
    solved: true
  },
  {
    id: 3,
    title: "Validation personnalisée avec Laravel Form Request",
    excerpt: "Comment créer une règle de validation personnalisée pour vérifier qu'un email n'existe pas déjà dans plusieurs tables ?",
    author: {
      name: "Paul Ndjock",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    postedAt: "Il y a 6 heures",
    answers: 2,
    votes: 8,
    tags: ["Validation", "Form Request", "Laravel"],
    solved: false
  }
];

export const mockEvents = [
  {
    id: 1,
    title: "Laravel Cameroun Meetup #15",
    description: "Rejoignez-nous pour notre meetup mensuel où nous discuterons des dernières nouveautés Laravel, partagerons nos expériences et networkerons.",
    date: "25 Janvier 2024",
    time: "18h00 - 21h00",
    location: "ActivSpaces Douala",
    attendees: 45,
    maxAttendees: 80,
    type: "meetup" as const,
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Atelier : Développement d'APIs avec Laravel",
    description: "Atelier pratique de 4 heures pour apprendre à créer des APIs REST robustes avec Laravel, authentification JWT et documentation Swagger.",
    date: "3 Février 2024",
    time: "9h00 - 13h00",
    location: "Silicon Mountain, Buea",
    attendees: 12,
    maxAttendees: 20,
    type: "workshop" as const,
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Conférence PHP Cameroun 2024",
    description: "La plus grande conférence PHP du Cameroun avec des speakers internationaux, des ateliers et des sessions de networking exceptionnelles.",
    date: "15-16 Mars 2024",
    time: "8h00 - 18h00",
    location: "Hôtel Hilton, Yaoundé",
    attendees: 156,
    maxAttendees: 300,
    type: "conference" as const,
    image: "https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];