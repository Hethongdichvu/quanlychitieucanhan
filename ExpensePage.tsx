import React, { useState, useEffect } from 'react';
import ExpenseList from '../components/ExpenseList';
import AddExpenseForm from '../components/AddExpenseForm';
import { getExpenses, addExpense, deleteExpense, updateExpense, Expense } from '../services/expenseService';

const months = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
];

const SELECTED_MONTH_KEY = 'selectedMonth';

const ExpensePage: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<number>(parseInt(localStorage.getItem(SELECTED_MONTH_KEY) || `${new Date().getMonth()}`));

    useEffect(() => {
        const fetchExpenses = async () => {
            const fetchedExpenses: Expense[] = await getExpenses(selectedMonth);
            setExpenses(fetchedExpenses);
        };
        fetchExpenses();
    }, [selectedMonth]);

    const handleAddExpense = async (expense: Expense) => {
        const newExpense = await addExpense(selectedMonth, expense);
        setExpenses([...expenses, newExpense]);
    };

    const handleDeleteExpense = async (id: number) => {
        await deleteExpense(selectedMonth, id);
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const handleUpdateExpense = async (updatedExpense: Expense) => {
        const expense = await updateExpense(selectedMonth, updatedExpense);
        setExpenses(expenses.map(exp => exp.id === expense.id ? expense : exp));
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const monthIndex = parseInt(event.target.value);
        setSelectedMonth(monthIndex);
        localStorage.setItem(SELECTED_MONTH_KEY, monthIndex.toString());
    };

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const isOverLimit = totalExpenses > 5000000;

    return (
        <div className="container">
            <h1>Quản lý chi tiêu</h1>
            <div className="month-selector">
                <label htmlFor="month-select">Chọn tháng:</label>
                <select id="month-select" value={selectedMonth} onChange={handleMonthChange}>
                    {months.map((month, index) => (
                        <option key={index} value={index}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>
            <AddExpenseForm onAddExpense={handleAddExpense} />
            <h2 style={{ color: isOverLimit ? 'red' : 'inherit' }}>Danh sách chi tiêu - {months[selectedMonth]}</h2>
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} onUpdateExpense={handleUpdateExpense} />
        </div>
    );
};

export default ExpensePage;