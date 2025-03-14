export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(amount);
};

export const calculateTotal = (expenses: { amount: number }[]): number => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
};