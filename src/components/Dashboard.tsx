import React from 'react';
import { ExternalLink } from 'lucide-react';
import SummaryCard from './SummaryCard';
import AccountCard from './AccountCard';
import PiggyBankCard from './PiggyBankCard';
import QuickActionsCard from './QuickActionsCard';
import NavigationCard from './NavigationCard';
import SimpleCard from './SimpleCard';
import { summaryCardsData, accountsData, piggyBanksData, quickActionsData, transactionsData } from '../data/mockData';

const PageHeader: React.FC = () => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center">
          <span className="text-firefly-500 mr-2">Firefly III</span>
          <span className="text-gray-400 font-normal text-xl">What's playing?</span>
        </h1>
      </div>
      <div className="flex items-center text-sm">
        <span className="px-3 py-1.5 bg-dark-700 rounded-md text-gray-300 border border-dark-600">
          Home
        </span>
      </div>
    </div>
    
    <div className="bg-dark-800 border border-dark-700 rounded-lg p-4">
      <p className="text-gray-300 text-sm leading-relaxed">
        Welcome to <strong className="text-white">Firefly III</strong>! On this page you get a quick overview of your finances. 
        For more information, check out Accounts → <a href="#" className="text-firefly-400 hover:text-firefly-300 underline">Asset Accounts</a> and 
        of course the <a href="#" className="text-firefly-400 hover:text-firefly-300 underline">Budgets</a> and{' '}
        <a href="#" className="text-firefly-400 hover:text-firefly-300 underline">Reports</a> pages. 
        Or just take a look around and see where you end up.
      </p>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageHeader />
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCardsData.map((card) => (
          <SummaryCard key={card.id} card={card} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-3 space-y-8">
          {/* Navigation Shortcuts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NavigationCard
              title="Your accounts"
              actionText="View your asset accounts"
              icon="accounts"
              href="/accounts/asset"
            />
            <NavigationCard
              title="Budgets and spending"
              actionText="Go to your budgets"
              icon="budgets"
              href="/budgets"
            />
            <NavigationCard
              title="Categories"
              actionText="Go to your categories"
              icon="categories"
              href="/categories"
            />
          </div>

          {/* Account Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AccountCard
              account={accountsData[0]}
              transactions={transactionsData.filter(t => t.account === 'checking')}
            />
            <AccountCard
              account={accountsData[1]}
              transactions={transactionsData.filter(t => t.account === 'savings')}
            />
          </div>

          {/* Piggy Banks and Subscriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PiggyBankCard piggyBanks={piggyBanksData} />
            <SimpleCard
              title="Subscriptions"
              actionText="Go to your subscriptions"
              description="A quick reminder of subscription management availability."
              href="/subscriptions"
            />
          </div>

          {/* Account Type Summaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SimpleCard
              title="Expense accounts"
              actionText="See your expense accounts"
              href="/accounts/expense"
            />
            <SimpleCard
              title="Revenue accounts"
              actionText="See your revenue accounts"
              href="/accounts/revenue"
            />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <QuickActionsCard actions={quickActionsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;