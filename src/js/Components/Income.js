import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../scss/_variables.scss";

function Income() {
    const [incomeType, setIncomeType] = useState("");
    const [amount, setAmount] = useState("");
    const [incomeDate, setIncomeDate] = useState(null);
    const [incomeList, setIncomeList] = useState([]);

    const handleAddIncome = () => {
        if (!incomeType || !amount || !incomeDate) {
            alert("Select category, enter amount, and select a date.");
            return;
        }

        const newIncome = {
            type: incomeType,
            amount: parseFloat(amount),
            date: incomeDate.toLocaleDateString()
        };

        setIncomeList([...incomeList, newIncome]);
        setIncomeType("");
        setAmount("");
        setIncomeDate(null);
    };

    const getBackgroundColor = (incomeType) => {
        switch (incomeType) {
            case "salary":
                return "#5cd04a";
            case "freelancing":
                return "lightgreen";
            default:
                return "#2d2574"; //default color
        }
    };

    const getFontColor = (incomeType) => {
        switch (incomeType) {
            case "salary":
                return "#000";
            default:
                return "#eaeaea";
        }
    };

    return (
        <div className="finances-cont">
            <div className="h2-cont">
                <img src="../../assets/icon-income.svg" className="finance-icon" alt="Income icon"/>
                <h2 className="income">Income</h2>
            </div>
            <div className="input-cont">
                <div className="select-cont">
                    <select value={incomeType}
                            className="category"
                            onChange={(e) => setIncomeType(e.target.value)}
                            style={{
                                backgroundColor: getBackgroundColor(incomeType),
                                color: getFontColor(incomeType) }}>
                        <option value="" selected disabled>Category</option>
                        <option value="salary" style={{ color: getFontColor("salary") }}>Salary</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="dividends">Dividends</option>
                        <option value="gift">Gift</option>
                        <option value="other">Other</option>
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
                    selected={incomeDate}
                    onChange={date => setIncomeDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Date"
                    calendarClassName="calendar"
                />
                <button onClick={handleAddIncome} className="add-btn"><span>+</span></button>
            </div>
            <ul className="list">
                {incomeList.map((income, index) => (
                    <li key={index}>
                        <span className={income.type}>{income.type}</span>
                        <span className="li-amount">€ {income.amount}</span>
                        <span className="li-date">{income.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Income;
