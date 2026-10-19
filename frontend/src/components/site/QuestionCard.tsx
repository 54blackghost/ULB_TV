import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Clock, CheckCircle } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm';
import { AnswerDetail } from './types'; // Importer le type partagé

interface QuestionCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  postedAt: string;
  answers: number;
  votes: number;
  tags: string[];
  solved: boolean;
  answerDetails?: AnswerDetail[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  excerpt,
  author,
  postedAt,
  votes,
  tags,
  solved,
  answerDetails = [],
}) => {
  const [isAnswerSectionVisible, setIsAnswerSectionVisible] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState<AnswerDetail[]>(answerDetails);

  // Fonction améliorée pour gérer les réponses directes et les sous-réponses
  const handleAddAnswer = (content: string, parentId: number | null = null) => {
    const newAnswer: AnswerDetail = {
      id: Date.now(), // Utiliser un ID unique (timestamp pour la démo)
      author: {
        name: 'Vous',
        avatar: 'https://i.pravatar.cc/100?u=currentuser',
      },
      content,
      postedAt: "à l'instant",
      replies: [],
    };

    if (parentId === null) {
      // Ajouter comme une nouvelle réponse principale
      setCurrentAnswers((prev) => [newAnswer, ...prev]);
    } else {
      // Ajouter comme une sous-réponse (logique récursive)
      const addReplyRecursively = (answers: AnswerDetail[]): AnswerDetail[] => {
        return answers.map((answer) => {
          if (answer.id === parentId) {
            // Parent trouvé, on ajoute la sous-réponse
            return { ...answer, replies: [newAnswer, ...(answer.replies || [])] };
          }
          if (answer.replies && answer.replies.length > 0) {
            // Recherche dans les sous-réponses
            return { ...answer, replies: addReplyRecursively(answer.replies) };
          }
          return answer;
        });
      };
      setCurrentAnswers((prev) => addReplyRecursively(prev));
    }
  };

  const totalAnswersCount = currentAnswers.reduce(function count(sum, answer) {
    return sum + 1 + (answer.replies || []).reduce(count, 0);
  }, 0);

  return (
    <Card className="bg-neutral-900 border-neutral-800 p-5 flex flex-col h-full">
      {/* ... (partie supérieure de la carte, inchangée) ... */}
      <div className="flex items-center space-x-3 mb-4">
        <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full border-2 border-neutral-700" />
        <div>
          <p className="text-sm font-medium text-gray-200">{author.name}</p>
          <div className="flex items-center text-xs text-gray-500 space-x-1">
            <Clock className="h-3 w-3" />
            <span>{postedAt}</span>
          </div>
        </div>
      </div>

      <div className="flex-grow space-y-3">
        <h3 className="text-lg font-semibold text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">{excerpt}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-neutral-800">
        <div className="flex flex-wrap gap-2 mb-4">
          {/* ... (tags et badge résolu, inchangés) ... */}
          {solved && (
            <div className="flex items-center text-xs font-medium text-green-400 bg-green-900/50 px-2 py-1 rounded-full">
              <CheckCircle className="h-4 w-4 mr-1.5" />
              Résolu
            </div>
          )}
          {tags.map((tag, index) => (
            <Badge key={index} className="text-xs bg-neutral-800 text-gray-400 border-transparent">{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center justify-end space-x-5 text-sm">
          <div className="flex items-center space-x-1.5 text-gray-500">
            <ThumbsUp className="h-4 w-4" />
            <span>{votes}</span>
          </div>
          <button
            onClick={() => setIsAnswerSectionVisible(!isAnswerSectionVisible)}
            className="flex items-center space-x-1.5 text-green-400 font-medium hover:text-green-300 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{totalAnswersCount} réponses</span>
          </button>
        </div>
      </div>

      {isAnswerSectionVisible && (
        <div className="mt-4 pt-4 border-t border-neutral-800 animate-fade-in">
          {/* Formulaire pour les réponses principales (parentId est null) */}
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Ajouter une réponse</h4>
          <AnswerForm onSubmit={(content) => handleAddAnswer(content, null)} />
          
          <h4 className="text-sm font-semibold text-gray-300 mt-6 mb-2">Réponses</h4>
          <AnswerList answers={currentAnswers} onReplySubmit={handleAddAnswer} />
        </div>
      )}
    </Card>
  );
};

export default QuestionCard;