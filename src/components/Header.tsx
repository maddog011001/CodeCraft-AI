import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import Button from './Button';
import AuthModal from './AuthModal';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, signOut } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#features', text: 'Features' },
    { href: '#how-it-works', text: 'How it Works' },
    { href: '#pricing', text: 'Pricing' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-400" />
            <span className="font-bold text-xl text-gray-100">CodeCraft AI</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-300">{user.email}</span>
                <Button variant="secondary" onClick={signOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="secondary" 
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Sign In
                </Button>
                <Button onClick={handleGetStarted}>
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-b border-gray-700">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-indigo-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            {user ? (
              <>
                <div className="text-gray-300 py-2">{user.email}</div>
                <Button variant="secondary" onClick={signOut} className="w-full">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  Sign In
                </Button>
                <Button onClick={handleGetStarted} className="w-full">
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}