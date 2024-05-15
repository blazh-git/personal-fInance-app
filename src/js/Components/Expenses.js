import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../scss/_variables.scss";

function Expenses() {
    const [expensesType, setExpensesType] = useState("");
    const [amount, setAmount] = useState("");
    const [expensesDate, setExpensesDate] = useState(null);
    const [expensesList, setExpensesList] = useState([]);

    const handleAddExpenses = () => {
        if (!expensesType || !amount || !expensesDate || amount < 0.01) {
            alert("Select category, enter amount, and select a date.");
            return;
        }

        const newExpenses = {
            type: expensesType,
            amount: parseFloat(amount).toFixed(2),
            date: expensesDate.toLocaleDateString()
        };

        setExpensesList([...expensesList, newExpenses]);
        setExpensesType("");
        setAmount("");
        setExpensesDate(null);
    };

    const getBackgroundColor = (expensesType) => {
        switch (expensesType) {
            case "salary":
                return "#5cd04a";
            case "freelancing":
                return "#4690ff";
            case "dividends":
                return "#c86cec";
            case "gift":
                return "#eca66c";
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
                <img src="../../assets/icon-expense.svg" className="finance-icon" alt="Expenses icon"/>
                <h2 className="expenses">Expenses</h2>
            </div>
            <div className="input-cont">
                <div className="select-cont">
                    <select value={expensesType}
                            className="category"
                            onChange={(e) => setExpensesType(e.target.value)}
                            style={{
                                backgroundColor: getBackgroundColor(expensesType),
                                color: getFontColor(expensesType) }}>
                        <option value="" selected disabled>category</option>
                        <option value="salary">salary</option>
                        <option value="freelancing">freelancing</option>
                        <option value="dividends">dividends</option>
                        <option value="gift">gift</option>
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
                />
                <DatePicker
                    selected={expensesDate}
                    onChange={date => setExpensesDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Date"
                    calendarClassName="calendar"
                />
                <button onClick={handleAddExpenses} className="add-btn"><span>+</span></button>
            </div>
            <ul className="list">
                {expensesList.map((expenses, index) => (
                    <li key={index}>
                        <span className={expenses.type}>{expenses.type}</span>
                        <span className="li-amount">€ {expenses.amount}</span>
                        <span className="li-date">{expenses.date}</span>
                        <button onClick={() => handleRemoveExpenses(index)} className="remove-btn"><img src="../../assets/icon-remove.svg"/></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Expenses;
