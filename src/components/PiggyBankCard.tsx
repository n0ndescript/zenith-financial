import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PiggyBank } from '../types';
import { formatCurrency, calculateProgress } from '../utils/formatters';

interface PiggyBankCardProps {
  piggyBanks: PiggyBank[];
}

const PiggyBankCard: React.FC<PiggyBankCardProps> = ({ piggyBanks }) => {
  return (
    <div className="bg-dark-800 rounded-lg border border-dark-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <span className="mr-2">Piggy banks</span>
          <ExternalLink className="w-4 h-4 text-gray-400 hover:text-firefly-400 cursor-pointer" />
        </h3>
      </div>

      <div className="space-y-4 mb-6">
        {piggyBanks.map((piggyBank) => {
          const progress = calculateProgress(piggyBank.currentAmount, piggyBank.targetAmount);
          
          return (
            <div key={piggyBank.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">{piggyBank.name}</span>
                <span className="text-sm text-gray-400">
                  {formatCurrency(piggyBank.currentAmount, piggyBank.currency)}
                </span>
              </div>
              <div className="w-full bg-dark-600 rounded-full h-2">
                <div 
                  className="bg-firefly-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{progress.toFixed(1)}% complete</span>
                <span>Target: {formatCurrency(piggyBank.targetAmount, piggyBank.currency)}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-dark-700">
        <button className="flex items-center text-sm text-firefly-400 hover:text-firefly-300 transition-colors">
          <ExternalLink className="w-4 h-4 mr-2" />
          Go to your piggy banks
        </button>
      </div>
    </div>
  );
};

export default PiggyBankCard;