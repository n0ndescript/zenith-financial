import React from 'react';
import { Plus, ExternalLink } from 'lucide-react';
import { Account, Transaction } from '../types';
import { formatCurrency } from '../utils/formatters';

interface AccountCardProps {
  account: Account;
  transactions: Transaction[];
}

const AccountCard: React.FC<AccountCardProps> = ({ account, transactions }) => {
  const displayTransactions = transactions.slice(0, 10);

  return (
    <div className="bg-dark-800 rounded-lg border border-dark-700 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-dark-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <span className="mr-2">{account.name}</span>
            <ExternalLink className="w-4 h-4 text-gray-400 hover:text-firefly-400 cursor-pointer" />
          </h3>
        </div>
      </div>

      {/* Transactions List */}
      <div className="px-6 py-4">
        <div className="space-y-3 mb-4">
          {displayTransactions.length > 0 ? (
            displayTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-2 px-3 rounded hover:bg-dark-700 cursor-pointer transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300 hover:text-white">
                      {transaction.description}
                    </span>
                    <div className="text-right">
                      <span className={`text-sm font-medium ${
                        transaction.amount >= 0 ? 'text-green-400' : 'text-gray-300'
                      }`}>
                        {formatCurrency(transaction.amount, transaction.currency)}
                      </span>
                      {transaction.isForeign && transaction.foreignAmount && (
                        <span className="text-xs text-gray-500 ml-1">
                          ({transaction.foreignAmount})
                        </span>
                      )}
                    </div>
                  </div>
                  {transaction.isSplit && (
                    <span className="text-xs text-gray-500">Split transaction</span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No recent transactions</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-dark-700/50 border-t border-dark-700">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">
            {formatCurrency(account.balance, account.currency)}
          </span>
          <button className="flex items-center px-3 py-1.5 bg-firefly-600 hover:bg-firefly-700 text-white text-sm rounded-md transition-colors">
            <Plus className="w-4 h-4 mr-1" />
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;