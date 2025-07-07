export interface Transaction {
  id: string;
  description: string;
  amount: number;
  currency: string;
  date: string;
  category?: string;
  account: string;
  isSplit?: boolean;
  splitDetails?: string;
  isForeign?: boolean;
  foreignAmount?: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  balance: number;
  currency: string;
  transactions: Transaction[];
}

export interface SummaryCard {
  id: string;
  title: string;
  value: string;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
  color: 'teal' | 'blue' | 'green' | 'red' | 'purple';
  link?: string;
}

export interface PiggyBank {
  id: string;
  name: string;
  currentAmount: number;
  targetAmount: number;
  currency: string;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
  children?: NavigationItem[];
}