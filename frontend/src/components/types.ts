// src/components/types.ts

// Représente un auteur pour une question ou une réponse
export interface Author {
  name: string;
  avatar: string;
}

// Représente une réponse ou une sous-réponse.
// La structure est récursive grâce à la propriété optionnelle `replies`.
export interface AnswerDetail {
  id: number;
  author: Author;
  content: string;
  postedAt: string;
  replies?: AnswerDetail[];
}

// From Backend
export interface BackendUser {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface BackendArticle {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author: BackendUser;
  coverImage: string;
  createdAt: string;
  updatedAt: string;
}

export interface BackendPodcast {
  _id: string;
  title: string;
  slug: string;
  description: string;
  duration: number; // Duration in seconds
  audioFile: string;
  author: BackendUser;
  createdAt: string;
  updatedAt: string;
}

export interface BackendVideo {
  _id: string;
  title: string;
  slug: string;
  description: string;
  duration: number; // Duration in seconds
  videoUrl: string;
  thumbnail: string;
  author: BackendUser;
  createdAt: string;
  updatedAt: string;
}
