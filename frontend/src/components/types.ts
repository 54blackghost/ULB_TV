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
