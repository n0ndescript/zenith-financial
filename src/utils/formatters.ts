export const formatCurrency = (amount: number, currency: string = 'EUR'): string => {
  const formatters: Record<string, Intl.NumberFormat> = {
    EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
    USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
    GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
  };
  
  const formatter = formatters[currency] || formatters.EUR;
  return formatter.format(amount);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

export const formatDateShort = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
};

export const calculateProgress = (current: number, target: number): number => {
  return Math.min((current / target) * 100, 100);
};