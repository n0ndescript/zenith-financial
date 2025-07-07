import { Transaction, Account, SummaryCard, PiggyBank, QuickAction, NavigationItem } from '../types';

export const summaryCardsData: SummaryCard[] = [
  {
    id: 'in-out',
    title: 'In + out this period',
    value: '-€1,165.87',
    subValue: '-€1,243.64 + €77.77',
    trend: 'down',
    color: 'red',
    link: '/reports/period'
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions to pay',
    value: '-€252.50',
    subValue: 'Paid: €21.11',
    trend: 'neutral',
    color: 'purple',
    link: '/subscriptions'
  },
  {
    id: 'left-to-spend',
    title: 'Left to spend',
    value: '€1,044.09, £200.00, $150.00',
    subValue: 'Per day: €41.76, £200.00, $150.00',
    trend: 'neutral',
    color: 'green',
    link: '/budgets'
  },
  {
    id: 'net-worth',
    title: 'Net worth',
    value: '€3,204.82',
    subValue: '',
    trend: 'up',
    color: 'blue',
    link: '/reports/net-worth'
  }
];

export const transactionsData: Transaction[] = [
  {
    id: '1',
    description: 'Drinks with friends',
    amount: -37.38,
    currency: 'EUR',
    date: '2025-07-07',
    category: 'Entertainment',
    account: 'checking'
  },
  {
    id: '2',
    description: 'More coffee!',
    amount: -6.79,
    currency: 'EUR',
    date: '2025-07-07',
    category: 'Food & Drinks',
    account: 'checking'
  },
  {
    id: '3',
    description: 'Gas and electricity',
    amount: -112.62,
    currency: 'EUR',
    date: '2025-07-05',
    category: 'Utilities',
    account: 'checking'
  },
  {
    id: '4',
    description: 'Cup of coffee to go',
    amount: -5.11,
    currency: 'EUR',
    date: '2025-07-05',
    category: 'Food & Drinks',
    account: 'checking'
  },
  {
    id: '5',
    description: 'Round of groceries',
    amount: -11.07,
    currency: 'EUR',
    date: '2025-07-05',
    category: 'Groceries',
    account: 'checking'
  },
  {
    id: '6',
    description: 'Get gas',
    amount: -66.40,
    currency: 'EUR',
    date: '2025-07-04',
    category: 'Transportation',
    account: 'checking'
  },
  {
    id: '7',
    description: 'More coffee!',
    amount: -4.62,
    currency: 'EUR',
    date: '2025-07-03',
    category: 'Food & Drinks',
    account: 'checking'
  },
  {
    id: '8',
    description: 'Rent',
    amount: -850.00,
    currency: 'EUR',
    date: '2025-07-02',
    category: 'Housing',
    account: 'checking'
  },
  {
    id: '9',
    description: 'Doing groceries',
    amount: -14.23,
    currency: 'EUR',
    date: '2025-07-02',
    category: 'Groceries',
    account: 'checking'
  },
  {
    id: '10',
    description: 'Equally triple split deposit: Split 3 of 3 (cat + bud)',
    amount: 33.22,
    currency: 'EUR',
    date: '2025-07-01',
    category: 'Income',
    account: 'checking',
    isSplit: true
  },
  {
    id: '11',
    description: 'Equally triple split deposit: Split 2 of 3 (foreign)',
    amount: 22.33,
    currency: 'EUR',
    date: '2025-07-01',
    category: 'Income',
    account: 'checking',
    isForeign: true,
    foreignAmount: 'Ft 43.12'
  },
  {
    id: '12',
    description: 'Save money',
    amount: 200.00,
    currency: 'EUR',
    date: '2025-07-01',
    category: 'Transfer',
    account: 'savings'
  }
];

export const accountsData: Account[] = [
  {
    id: 'checking',
    name: 'Checking Account',
    type: 'checking',
    balance: 404.82,
    currency: 'EUR',
    transactions: transactionsData.filter(t => t.account === 'checking')
  },
  {
    id: 'savings',
    name: 'Savings Account',
    type: 'savings',
    balance: 2800.00,
    currency: 'EUR',
    transactions: transactionsData.filter(t => t.account === 'savings')
  }
];

export const piggyBanksData: PiggyBank[] = [
  {
    id: '1',
    name: 'New couch',
    currentAmount: 120.00,
    targetAmount: 500.00,
    currency: 'EUR'
  },
  {
    id: '2',
    name: 'New phone',
    currentAmount: 333.00,
    targetAmount: 600.00,
    currency: 'EUR'
  },
  {
    id: '3',
    name: 'New camera',
    currentAmount: 735.00,
    targetAmount: 1000.00,
    currency: 'EUR'
  }
];

export const quickActionsData: QuickAction[] = [
  { id: '1', label: 'New withdrawal', icon: 'ArrowDown', href: '/transactions/create/withdrawal' },
  { id: '2', label: 'New deposit', icon: 'ArrowUp', href: '/transactions/create/deposit' },
  { id: '3', label: 'New transfer', icon: 'ArrowLeftRight', href: '/transactions/create/transfer' },
  { id: '4', label: 'New asset account', icon: 'CreditCard', href: '/accounts/create/asset' },
  { id: '5', label: 'New expense account', icon: 'TrendingDown', href: '/accounts/create/expense' },
  { id: '6', label: 'New revenue account', icon: 'TrendingUp', href: '/accounts/create/revenue' },
  { id: '7', label: 'New liability', icon: 'AlertTriangle', href: '/accounts/create/liability' },
  { id: '8', label: 'New budget', icon: 'PieChart', href: '/budgets/create' },
  { id: '9', label: 'New category', icon: 'Tag', href: '/categories/create' },
  { id: '10', label: 'New piggy bank', icon: 'PiggyBank', href: '/piggy-banks/create' },
  { id: '11', label: 'New subscription', icon: 'Repeat', href: '/subscriptions/create' },
  { id: '12', label: 'New rule', icon: 'Settings', href: '/rules/create' },
  { id: '13', label: 'New recurring transaction', icon: 'RotateCcw', href: '/recurring/create' }
];

export const navigationData: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'Home',
    href: '/',
    isActive: true
  },
  {
    id: 'budgets',
    label: 'Budgets',
    icon: 'PieChart',
    href: '/budgets'
  },
  {
    id: 'subscriptions',
    label: 'Subscriptions',
    icon: 'Repeat',
    href: '/subscriptions'
  },
  {
    id: 'piggy-banks',
    label: 'Piggy banks',
    icon: 'PiggyBank',
    href: '/piggy-banks'
  },
  {
    id: 'transactions',
    label: 'Transactions',
    icon: 'ArrowLeftRight',
    href: '/transactions',
    children: [
      { id: 'expenses', label: 'Expenses', icon: 'ArrowDown', href: '/transactions/expenses' },
      { id: 'income', label: 'Revenue / income', icon: 'ArrowUp', href: '/transactions/income' },
      { id: 'transfers', label: 'Transfers', icon: 'ArrowLeftRight', href: '/transactions/transfers' }
    ]
  },
  {
    id: 'automation',
    label: 'Automation',
    icon: 'Settings',
    href: '/automation',
    children: [
      { id: 'rules', label: 'Rules', icon: 'Settings', href: '/automation/rules' },
      { id: 'recurring', label: 'Recurring', icon: 'RotateCcw', href: '/automation/recurring' }
    ]
  },
  {
    id: 'accounts',
    label: 'Accounts',
    icon: 'CreditCard',
    href: '/accounts',
    children: [
      { id: 'asset', label: 'Asset accounts', icon: 'CreditCard', href: '/accounts/asset' },
      { id: 'expense', label: 'Expense accounts', icon: 'TrendingDown', href: '/accounts/expense' },
      { id: 'revenue', label: 'Revenue accounts', icon: 'TrendingUp', href: '/accounts/revenue' }
    ]
  },
  {
    id: 'classification',
    label: 'Classification',
    icon: 'Tag',
    href: '/classification',
    children: [
      { id: 'categories', label: 'Categories', icon: 'Tag', href: '/categories' },
      { id: 'tags', label: 'Tags', icon: 'Hash', href: '/tags' }
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'BarChart',
    href: '/reports'
  },
  {
    id: 'export',
    label: 'Export data',
    icon: 'Download',
    href: '/export'
  },
  {
    id: 'options',
    label: 'Options',
    icon: 'Settings',
    href: '/options',
    children: [
      { id: 'preferences', label: 'Preferences', icon: 'User', href: '/options/preferences' },
      { id: 'profile', label: 'Profile', icon: 'UserCircle', href: '/options/profile' }
    ]
  }
];