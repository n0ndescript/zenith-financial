import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { navigationData } from './data/mockData';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-dark-900">
      {/* Sidebar */}
      <Sidebar navigationItems={navigationData} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header 
          currentPeriod="July 1st, 2025 - July 31st, 2025"
          userEmail="demo@firefly-iii.org"
        />
        
        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-dark-900">
          <div className="container mx-auto px-6 py-8">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;