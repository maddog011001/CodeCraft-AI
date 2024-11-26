import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import AuthModal from './AuthModal';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  onSelect: () => void;
}

function PricingTier({ name, price, description, features, highlighted = false, onSelect }: PricingTierProps) {
  return (
    <div className={`p-8 rounded-xl border ${
      highlighted 
        ? 'border-indigo-500 bg-gray-800/50' 
        : 'border-gray-700 bg-gray-800/30'
    }`}>
      <h3 className="text-xl font-semibold text-gray-100 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-100">{price}</span>
        {price !== 'Free' && <span className="text-gray-400">/month</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-indigo-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'primary' : 'secondary'}
        className="w-full"
        onClick={onSelect}
      >
        Get Started
      </Button>
    </div>
  );
}

export default function Pricing() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individual developers',
      features: [
        'Basic code analysis',
        'Personal learning path',
        'Community support',
        'Basic Git integration'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Best for professional developers',
      features: [
        'Advanced code analysis',
        'Custom learning paths',
        'Priority support',
        'Full Git integration',
        'Team collaboration tools',
        'Security analysis'
      ],
      highlighted: true
    },
    {
      name: 'Team',
      price: '$99',
      description: 'For growing development teams',
      features: [
        'Everything in Pro',
        'Team management',
        'Custom workflows',
        'Advanced security',
        'API access',
        'Dedicated support'
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier 
              key={index} 
              {...tier} 
              onSelect={() => setIsAuthModalOpen(true)}
            />
          ))}
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </section>
  );
}