import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-laravel-red focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-laravel-red text-white hover:bg-laravel-red-hover hover:-translate-y-0.5 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-0.5',
    outline: 'border-2 border-laravel-red text-laravel-red hover:bg-laravel-red hover:text-white hover:-translate-y-0.5',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;