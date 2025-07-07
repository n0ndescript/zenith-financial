import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SimpleCardProps {
  title: string;
  actionText: string;
  description?: string;
  href?: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, actionText, description }) => {
  return (
    <div className="bg-dark-800 rounded-lg border border-dark-700 p-6 hover:border-dark-600 transition-colors">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <span className="mr-2">{title}</span>
        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-firefly-400 cursor-pointer" />
      </h3>
      
      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}
      
      <button className="flex items-center text-sm text-firefly-400 hover:text-firefly-300 transition-colors">
        <ExternalLink className="w-4 h-4 mr-2" />
        {actionText}
      </button>
    </div>
  );
};

export default SimpleCard;