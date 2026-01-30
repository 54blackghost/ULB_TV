import React from 'react';
import Answer from './Answer';
import { AnswerDetail } from './types';

interface AnswerListProps {
  answers: AnswerDetail[];
  onReplySubmit: (content: string, parentId: number) => void;
}

const AnswerList: React.FC<AnswerListProps> = ({ answers, onReplySubmit }) => {
  if (!answers || answers.length === 0) {
    return (
      <div className="text-center text-gray-500 py-6">
        Aucune réponse pour le moment.
      </div>
    );
  }

  return (
    <div className="space-y-5 mt-4">
      {answers.map((answer) => (
        <Answer key={answer.id} answer={answer} onReplySubmit={onReplySubmit} />
      ))}
    </div>
  );
};

export default AnswerList;
