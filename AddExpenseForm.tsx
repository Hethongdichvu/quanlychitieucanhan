import React, { useState } from 'react';
import { Expense } from '../services/expenseService';

interface AddExpenseFormProps {
    onAddExpense: (expense: Expense) => void;
}

const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ onAddExpense }) => {
    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (amount > 0 && description.trim()) {
            const newExpense: Expense = {
                id: Date.now(), // Tạo id duy nhất cho mỗi chi tiêu
                amount,
                description
            };
            onAddExpense(newExpense);
            setAmount(0);
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Số tiền:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Mô tả:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Thêm chi tiêu</button>
        </form>
    );
};

export default AddExpenseForm;