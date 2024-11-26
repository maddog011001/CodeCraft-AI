import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors">
      <div className="bg-indigo-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}