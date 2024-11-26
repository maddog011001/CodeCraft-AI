import React from 'react';
import { Code, GitMerge, Cpu, Shield, Zap, Users } from 'lucide-react';
import Card from './Card';

export default function Features() {
  const features = [
    {
      icon: Code,
      title: "Intelligent Code Review",
      description: "AI-powered code analysis that catches bugs and suggests optimizations before they reach production."
    },
    {
      icon: GitMerge,
      title: "Version Control Integration",
      description: "Seamlessly integrates with Git workflows and provides smart conflict resolution suggestions."
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Automated performance analysis and recommendations for improving code efficiency."
    },
    {
      icon: Shield,
      title: "Security Analysis",
      description: "Real-time security vulnerability detection and mitigation recommendations."
    },
    {
      icon: Zap,
      title: "Automated Refactoring",
      description: "Smart code refactoring suggestions to improve maintainability and readability."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for code review, knowledge sharing, and team coordination."
    }
  ];

  return (
    <section id="features" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to write better code, faster. Powered by advanced AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}