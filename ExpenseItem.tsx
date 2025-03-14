import React, { useState } from 'react';
import { formatCurrency } from '../utils/helpers';
import { Expense } from '@/types/expense';

interface ExpenseItemProps {
    expense: {
        id: number;
        amount: number;
        description: string;
    };
    onDeleteExpense: (id: number) => void;
    onUpdateExpense: (expense: Expense) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onDeleteExpense, onUpdateExpense }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [amount, setAmount] = useState(expense.amount);
    const [description, setDescription] = useState(expense.description);

    const handleSave = () => {
        onUpdateExpense({ ...expense, amount, description });
        setIsEditing(false);
    };

    return (
        <div className="expense-item">
            {isEditing ? (
                <>
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button onClick={handleSave}>Lưu</button>
                </>
            ) : (
                <>
                    <h2>{expense.description}</h2>
                    <p>{formatCurrency(expense.amount)}</p>
                    <button onClick={() => setIsEditing(true)}>Sửa</button>
                    <button onClick={() => onDeleteExpense(expense.id)}>Xóa</button>
                </>
            )}
        </div>
    );
};

export default ExpenseItem;