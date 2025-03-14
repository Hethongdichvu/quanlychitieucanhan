import { Expense } from '../types/expense';

const EXPENSES_KEY = 'expenses';

let mockExpenses: { [key: string]: Expense[] } = JSON.parse(localStorage.getItem(EXPENSES_KEY) || '{}');

export const getExpenses = async (month: number): Promise<Expense[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockExpenses[month] || []);
    }, 500);
  });
};

export const addExpense = async (month: number, expense: Expense): Promise<Expense> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!mockExpenses[month]) {
        mockExpenses[month] = [];
      }
      mockExpenses[month].push(expense);
      localStorage.setItem(EXPENSES_KEY, JSON.stringify(mockExpenses));
      resolve(expense);
    }, 500);
  });
};

export const deleteExpense = async (month: number, id: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (mockExpenses[month]) {
        mockExpenses[month] = mockExpenses[month].filter(expense => expense.id !== id);
        localStorage.setItem(EXPENSES_KEY, JSON.stringify(mockExpenses));
      }
      resolve();
    }, 500);
  });
};

export const updateExpense = async (month: number, updatedExpense: Expense): Promise<Expense> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (mockExpenses[month]) {
        mockExpenses[month] = mockExpenses[month].map(expense => 
          expense.id === updatedExpense.id ? updatedExpense : expense
        );
        localStorage.setItem(EXPENSES_KEY, JSON.stringify(mockExpenses));
      }
      resolve(updatedExpense);
    }, 500);
  });
};

export { Expense };
