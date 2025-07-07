import React from 'react';
import { ChevronLeft, ChevronRight, User, Settings } from 'lucide-react';

interface HeaderProps {
  currentPeriod: string;
  userEmail: string;
}

const Header: React.FC<HeaderProps> = ({ currentPeriod, userEmail }) => {
  return (
    <header className="bg-dark-800 border-b border-dark-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">
            <span className="text-firefly-500">Firefly</span>
            <span className="text-gray-300">III</span>
          </div>
        </div>

        {/* Period Navigator */}
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:bg-dark-700 rounded">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <span className="text-sm font-medium text-gray-300 min-w-[200px] text-center">
            {currentPeriod}
          </span>
          <button className="p-1 hover:bg-dark-700 rounded">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">{userEmail}</span>
          <button className="p-1 hover:bg-dark-700 rounded">
            <Settings className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-1 hover:bg-dark-700 rounded">
            <User className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;