import React, { useState } from 'react';

interface AnswerFormProps {
  // La fonction à appeler lors de la soumission du formulaire
  onSubmit: (content: string) => void;
}

const AnswerForm: React.FC<AnswerFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent(''); // Vider le textarea après soumission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className={`relative border rounded-lg transition-colors duration-300 ${isFocused ? 'border-green-400' : 'border-neutral-700'}`}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Votre réponse..."
          className="w-full p-3 bg-transparent text-gray-300 rounded-lg focus:outline-none placeholder-gray-500"
          rows={3}
        />
        <div className="absolute bottom-2 right-2">
          <button
            type="submit"
            disabled={!content.trim()}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-colors"
          >
            Répondre
          </button>
        </div>
      </div>
    </form>
  );
};

export default AnswerForm;
