import React, { useState } from "react";
import Income from "./Income";
import Expenses from "./Expenses";
import Summary from "./Summary";
import "./In_Out.scss"


const InputWindow = () => {
    return(<>
        <div className="app">
            <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} />
            <Income setTotalIncome={setTotalIncome} />
            <Expenses setTotalExpenses={setTotalExpenses} />
        </div>
    </>)
}

export default InputWindow;