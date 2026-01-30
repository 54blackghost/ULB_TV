import React, { useState } from 'react';
import { Clock, MessageSquare } from 'lucide-react';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm';
import { AnswerDetail } from './types'; // We'll create a new types file for shared types

interface AnswerProps {
  answer: AnswerDetail;
  onReplySubmit: (content: string, parentId: number) => void;
}

const Answer: React.FC<AnswerProps> = ({ answer, onReplySubmit }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReply = (content: string) => {
    onReplySubmit(content, answer.id);
    setShowReplyForm(false); // Hide form after submitting
  };

  return (
    <div className="flex items-start space-x-3">
      <img
        src={answer.author.avatar}
        alt={answer.author.name}
        className="w-8 h-8 rounded-full mt-1"
      />
      <div className="flex-1">
        {/* Answer content */}
        <div className="p-3 bg-neutral-800/50 rounded-lg">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-gray-300">{answer.author.name}</p>
            <span className="text-gray-500 text-xs">·</span>
            <div className="flex items-center text-xs text-gray-500 space-x-1">
              <Clock className="h-3 w-3" />
              <span>{answer.postedAt}</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-1">{answer.content}</p>
        </div>

        {/* Actions (Reply button) */}
        <div className="mt-1.5 flex items-center">
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-400 transition-colors"
          >
            <MessageSquare className="h-3 w-3" />
            <span>Répondre</span>
          </button>
        </div>

        {/* Reply Form (conditional) */}
        {showReplyForm && (
          <div className="mt-2 animate-fade-in">
            <AnswerForm onSubmit={handleReply} />
          </div>
        )}

        {/* Nested Replies */}
        {answer.replies && answer.replies.length > 0 && (
          <div className="mt-3 pl-4 border-l-2 border-neutral-800">
            <AnswerList answers={answer.replies} onReplySubmit={onReplySubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Answer;
