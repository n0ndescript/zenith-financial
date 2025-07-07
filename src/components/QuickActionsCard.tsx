import React from 'react';
import { 
  ArrowDown, ArrowUp, ArrowLeftRight, CreditCard, TrendingDown, TrendingUp,
  AlertTriangle, PieChart, Tag, PiggyBank, Repeat, Settings, RotateCcw
} from 'lucide-react';
import { QuickAction } from '../types';

const iconMap = {
  ArrowDown, ArrowUp, ArrowLeftRight, CreditCard, TrendingDown, TrendingUp,
  AlertTriangle, PieChart, Tag, PiggyBank, Repeat, Settings, RotateCcw
};

interface QuickActionsCardProps {
  actions: QuickAction[];
}

const QuickActionsCard: React.FC<QuickActionsCardProps> = ({ actions }) => {
  return (
    <div className="bg-dark-800 rounded-lg border border-dark-700 p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Create new stuff</h3>
      
      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = iconMap[action.icon as keyof typeof iconMap] || Settings;
          
          return (
            <button
              key={action.id}
              className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-300 hover:bg-dark-700 hover:text-white rounded-lg transition-colors"
            >
              <Icon className="w-4 h-4 mr-3 text-firefly-400" />
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionsCard;