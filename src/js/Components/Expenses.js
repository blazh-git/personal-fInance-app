import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../scss/_variables.scss";

function Expenses({ setTotalExpenses }) {
    const [expensesType, setExpensesType] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [expensesDate, setExpensesDate] = useState(null);
    const [expensesList, setExpensesList] = useState([]);

    useEffect(() => {
        const total = expensesList.reduce((acc, expenses) => acc + parseFloat(expenses.amount), 0);
        setTotalExpenses(total);
    }, [expensesList, setTotalExpenses]);

    const handleAddExpenses = () => {
        if (!expensesType || !amount || !expensesDate || amount < 0.01) {
            alert("Select category, enter amount, and select a date.");
            return;
        }

        const newExpenses = {
            type: expensesType,
            amount: parseFloat(amount).toFixed(2),
            description: description,
            date: expensesDate.toLocaleDateString()
        };

        setExpensesList([...expensesList, newExpenses]);
        setExpensesType("");
        setAmount("");
        setDescription("");
        setExpensesDate(null);
    };

    const getBackgroundColor = (expensesType) => {
        switch (expensesType) {
            case "food":
                return "#cec04e";
            case "mortgage":
                return "#d9358c";
            case "insurance":
                return "#35d9a8";
            case "vehicle":
                return "#d94e35";
            case "phone":
                return "#3f88c2";
            case "other":
                return "#d3d3d3";
            default:
                return "#2d2574"; //default color
        }
    };

    const getFontColor = (expensesType) => {
        switch (expensesType) {
            case "":
                return "#eaeaea";
            default:
                return "#271e53";
        }
    };

    const handleRemoveExpenses = (indexToRemove) => {
        setExpensesList(expensesList.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="finances-cont">
            <div className="h2-cont">
                <img src="../../assets/icon-expense.svg" className="finance-icon" alt="Expenses icon" />
                <h2 className="expenses">Expenses</h2>
            </div>
            <div className="input-cont">
                <div className="select-cont">
                    <select
                        value={expensesType}
                        className="category"
                        onChange={(e) => setExpensesType(e.target.value)}
                        style={{
                            backgroundColor: getBackgroundColor(expensesType),
                            color: getFontColor(expensesType)
                        }}
                        id="categ-expenses"
                    >
                        <option value="" disabled>
                            category
                        </option>
                        <option value="food">food</option>
                        <option value="mortgage">mortgage</option>
                        <option value="insurance">insurance</option>
                        <option value="vehicle">vehicle</option>
                        <option value="phone">phone</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <input
                    className="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    min="0"
                    id="amount-exp"
                />
                <input
                    className="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description (optional)"
                    maxLength="30"
                    id="desc-exp"
                />
                <DatePicker
                    selected={expensesDate}
                    onChange={(date) => setExpensesDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Date"
                    calendarClassName="calendar"
                    id="date-exp"
                />
                <button onClick={handleAddExpenses} className="add-btn">
                    <span>+</span>
                </button>
            </div>
            <div className="list-cont">
                <ul className="list">
                    {expensesList.map((expenses, index) => (
                        <li key={index}>
                            <span className={expenses.type}>{expenses.type}</span>
                            <span className="li-amount">{expenses.amount} €</span>
                            <span className="li-desc">{expenses.description}</span>
                            <span className="li-date">{expenses.date}</span>
                            <button onClick={() => handleRemoveExpenses(index)} className="remove-btn">
                                <img src="../../assets/icon-remove.svg" alt="Remove" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Expenses;
