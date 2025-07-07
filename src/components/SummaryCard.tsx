import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { SummaryCard as SummaryCardType } from '../types';

interface SummaryCardProps {
  card: SummaryCardType;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ card }) => {
  const colorClasses = {
    teal: 'bg-teal-500/10 border-teal-500/20',
    blue: 'bg-blue-500/10 border-blue-500/20',
    green: 'bg-green-500/10 border-green-500/20',
    red: 'bg-red-500/10 border-red-500/20',
    purple: 'bg-purple-500/10 border-purple-500/20'
  };

  const iconColorClasses = {
    teal: 'text-teal-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
    red: 'text-red-400',
    purple: 'text-purple-400'
  };

  const getTrendIcon = () => {
    switch (card.trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className={`p-6 rounded-lg border ${colorClasses[card.color]} hover:border-opacity-40 transition-colors cursor-pointer`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            {card.title}
          </h3>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white">
              {card.value}
            </p>
            {card.subValue && (
              <p className="text-sm text-gray-400">
                {card.subValue}
              </p>
            )}
          </div>
        </div>
        <div className={`ml-4 ${iconColorClasses[card.color]}`}>
          {getTrendIcon()}
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;