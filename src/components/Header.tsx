import React, { useState } from 'react';
import { Menu, X, Search, User, LogIn } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Articles', href: '#articles', active: true },
    { name: 'Questions', href: '#questions' },
    { name: 'Discussions', href: '#discussions' },
    { name: 'Événements', href: '#events' },
    { name: 'Packages', href: '#packages' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-45 h-10 bg-gradient-laravel rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">Laravel.cm</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    item.active
                      ? 'bg-laravel-red text-white'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-laravel-red'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Right side - Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-laravel-red transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>
            
            <Button variant="outline" size="sm">
              <LogIn className="h-4 w-4 mr-2" />
              Connexion
            </Button>
            
            <Button variant="primary" size="sm">
              <User className="h-4 w-4 mr-2" />
              S'inscrire
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-laravel-red hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  item.active
                    ? 'bg-laravel-red text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-laravel-red'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100 mt-4">
              <Button variant="outline" size="sm" className="justify-center">
                <LogIn className="h-4 w-4 mr-2" />
                Connexion
              </Button>
              <Button variant="primary" size="sm" className="justify-center">
                <User className="h-4 w-4 mr-2" />
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;