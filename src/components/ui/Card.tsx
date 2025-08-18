import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-card border border-gray-100 p-6',
        hover && 'hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;