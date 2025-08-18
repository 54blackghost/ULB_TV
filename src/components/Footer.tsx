import React from 'react';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Communauté',
      links: [
        { name: 'À propos', href: '#' },
        { name: 'Membres', href: '#' },
        { name: 'Événements', href: '#' },
        { name: 'Partenaires', href: '#' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Articles', href: '#' },
        { name: 'Tutoriels', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Forum', href: '#' },
        { name: 'Discord', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Signaler un bug', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-32 h-8 bg-gradient-laravel rounded-md flex items-center justify-center">
                <span className="text-white font-bold">Laravel.cm</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              La plus grande communauté de développeurs Laravel & PHP au Cameroun. 
              Ensemble, nous apprenons, partageons et grandissons.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-600 rounded-lg hover:bg-laravel-red transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2024 Laravel.cm - Tous droits réservés
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <span>Fait avec</span>
              <Heart className="h-4 w-4 text-laravel-red mx-1 animate-pulse" />
              <span>par la communauté Laravel Cameroun</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;