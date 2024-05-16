import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../scss/_variables.scss";

function Income() {
    const [incomeType, setIncomeType] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("")
    const [incomeDate, setIncomeDate] = useState(null);
    const [incomeList, setIncomeList] = useState([]);

    const handleAddIncome = () => {
        if (!incomeType || !amount || !incomeDate || amount < 0.01) {
            alert("Select category, enter amount, and select a date.");
            return;
        }

        const newIncome = {
            type: incomeType,
            amount: parseFloat(amount).toFixed(2),
            description: description,
            date: incomeDate.toLocaleDateString()
        };

        setIncomeList([...incomeList, newIncome]);
        setIncomeType("");
        setAmount("");
        setDescription("");
        setIncomeDate(null);
    };

    const getBackgroundColor = (incomeType) => {
        switch (incomeType) {
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
                return "#2d2574";
        }
    };

    const getFontColor = (incomeType) => {
        switch (incomeType) {
            case "":
                return "#eaeaea";
            default:
                return "#271e53";
        }
    };

    const handleRemoveIncome = (indexToRemove) => {
        setIncomeList(incomeList.filter((_, index) => index !== indexToRemove));
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
                <input
                    className="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description (optional)"
                    maxLength="30"
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
            <div className="list-cont">
                <ul className="list">
                    {incomeList.map((income, index) => (
                        <li key={index}>
                            <span className={income.type}>{income.type}</span>
                            <span className="li-amount">€ {income.amount}</span>
                            <span className="li-date">{income.date}</span>
                            <span className="li-desc">{income.description}</span>
                            <button onClick={() => handleRemoveIncome(index)} className="remove-btn"><img src="../../assets/icon-remove.svg"/></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Income;
