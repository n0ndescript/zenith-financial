import React from 'react';
import { ExternalLink, CreditCard, PieChart, Tag } from 'lucide-react';

interface NavigationCardProps {
  title: string;
  actionText: string;
  icon: 'accounts' | 'budgets' | 'categories';
  href: string;
}

const iconMap = {
  accounts: CreditCard,
  budgets: PieChart,
  categories: Tag
};

const NavigationCard: React.FC<NavigationCardProps> = ({ title, actionText, icon, href }) => {
  const Icon = iconMap[icon];

  return (
    <div className="bg-dark-800 rounded-lg border border-dark-700 p-6 hover:border-dark-600 transition-colors">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <span className="mr-2">{title}</span>
        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-firefly-400 cursor-pointer" />
      </h3>
      
      <button className="flex items-center text-sm text-firefly-400 hover:text-firefly-300 transition-colors">
        <Icon className="w-4 h-4 mr-2" />
        {actionText}
      </button>
    </div>
  );
};

export default NavigationCard;