import React, { useState } from 'react';
import { 
  Search, Home, PieChart, Repeat, PiggyBank, ArrowLeftRight, Settings, 
  CreditCard, Tag, BarChart, Download, LogOut, ChevronDown, ChevronRight,
  ArrowDown, ArrowUp, Hash, User, UserCircle, RotateCcw, TrendingDown, TrendingUp
} from 'lucide-react';
import { NavigationItem } from '../types';

const iconMap = {
  Home, PieChart, Repeat, PiggyBank, ArrowLeftRight, Settings,
  CreditCard, Tag, BarChart, Download, ArrowDown, ArrowUp, Hash,
  User, UserCircle, RotateCcw, TrendingDown, TrendingUp
};

interface SidebarProps {
  navigationItems: NavigationItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ navigationItems }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderNavigationItem = (item: NavigationItem, level = 0) => {
    const Icon = iconMap[item.icon as keyof typeof iconMap] || Home;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const isActive = item.isActive;

    return (
      <div key={item.id}>
        <div
          className={`flex items-center px-4 py-2 text-sm cursor-pointer transition-colors ${
            level === 0 ? 'mx-2 rounded-lg' : 'ml-6 mr-2'
          } ${
            isActive 
              ? 'bg-firefly-600 text-white' 
              : 'text-gray-300 hover:bg-dark-700 hover:text-white'
          }`}
          onClick={() => hasChildren ? toggleExpanded(item.id) : undefined}
        >
          <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
          <span className="flex-1">{item.label}</span>
          {hasChildren && (
            isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-4">
            {item.children!.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-dark-800 border-r border-dark-700 flex flex-col h-full">
      {/* Search */}
      <div className="p-4 border-b border-dark-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-firefly-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1">
          {/* Financial control section */}
          <div className="px-4 py-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Financial control
            </h3>
          </div>
          {navigationItems.slice(0, 4).map(item => renderNavigationItem(item))}
          
          {/* Accounting section */}
          <div className="px-4 py-2 mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Accounting
            </h3>
          </div>
          {navigationItems.slice(4, 6).map(item => renderNavigationItem(item))}
          
          {/* Others section */}
          <div className="px-4 py-2 mt-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Others
            </h3>
          </div>
          {navigationItems.slice(6).map(item => renderNavigationItem(item))}
        </div>
      </div>

      {/* Logout */}
      <div className="border-t border-dark-700 p-4">
        <div className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-dark-700 hover:text-white cursor-pointer rounded-lg transition-colors">
          <LogOut className="w-4 h-4 mr-3" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;