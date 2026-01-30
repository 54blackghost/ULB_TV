import React from 'react';
import { MessageCircle, ThumbsUp, Clock, CheckCircle } from 'lucide-react';
import Card from './ui/Card';
import Badge from './ui/Badge';

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
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  excerpt,
  author,
  postedAt,
  answers,
  votes,
  tags,
  solved
}) => {
  return (
    <Card>
      <div className="space-y-4">
        {/* Header with status */}
        <div className="flex  items-start justify-between ">
          <div className="flex-1 ">
            <div className="flex items-center space-x-2 mb-2">
              {solved && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">Résolu</span>
                </div>
              )}
            </div>
            <h3 className="text-lg max-w-80 font-bold text-gray-700 hover:text-laravel-red transition-colors duration-300 cursor-pointer line-clamp-2">
              {title}
            </h3>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            />
            <div>
              <p className="text-sm w-50 font-medium text-gray-700">{author.name}</p>
              <div className="flex items-center text-xs text-gray-500 space-x-1">
                <Clock className="h-3 w-3" />
                <span>{postedAt}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-500">
              <ThumbsUp className="h-4 w-4" />
              <span>{votes}</span>
            </div>
            <div className="flex items-center space-x-1 text-laravel-red">
              <MessageCircle className="h-4 w-4" />
              <span>{answers} réponses</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;