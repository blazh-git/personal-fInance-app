import React from "react";
import "./In_Out.scss"

function Summary({ totalIncome, totalExpenses }) {
    return (
        <div className="balance-cont">
            <div className="balance-column left">
                <h3 className="your-balance">Your balance:</h3>
                <div className="balance">{(totalIncome - totalExpenses).toFixed(2)} €</div>
            </div>
            <div className="balance-column right">
                <div className="total-cont">
                    <p className="p-total">Total Income:</p>
                    <p className="placeholder">{totalIncome.toFixed(2)} €</p>
                </div>
                <div className="total-cont">
                    <p className="p-total">Total Expenses:</p>
                    <p className="placeholder">{totalExpenses.toFixed(2)} €</p>
                </div>
            </div>
        </div>
    );
}

export default Summary;
