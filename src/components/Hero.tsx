import React, { useState } from 'react';
import { Brain, Sparkles, BookOpen } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import AuthModal from './AuthModal';

export default function Hero() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleStartTrial = () => {
    setIsAuthModalOpen(true);
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            Elevate Your Code with
            <span className="text-indigo-400"> AI-Powered</span> Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your development workflow with intelligent code analysis, personalized learning paths, 
            and real-time collaboration powered by advanced AI.
          </p>
          <div className="flex justify-center space-x-4">
            <Button icon={Sparkles} onClick={handleStartTrial}>
              Start Free Trial
            </Button>
            <Button variant="secondary" icon={BookOpen} onClick={handleLearnMore}>
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card
            icon={Brain}
            title="AI-Powered Analysis"
            description="Advanced code analysis and optimization suggestions in real-time."
          />
          <Card
            icon={Sparkles}
            title="Smart Learning Paths"
            description="Personalized development roadmaps based on your goals and skills."
          />
          <Card
            icon={BookOpen}
            title="Team Collaboration"
            description="Seamless integration with your existing workflow and tools."
          />
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900 rounded-full opacity-10 blur-3xl"></div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}