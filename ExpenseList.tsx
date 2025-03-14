import React from 'react';
import ExpenseItem from './ExpenseItem';

interface Expense {
  id: number;
  description: string;
  amount: number;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
  onUpdateExpense: (expense: Expense) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDeleteExpense, onUpdateExpense }) => {
  return (
    <div>
      <h2>Danh sách chi tiêu</h2>
      <ul>
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} onDeleteExpense={onDeleteExpense} onUpdateExpense={onUpdateExpense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;