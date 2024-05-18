import React, { useState } from "react";
import Summary from "./Components/Summary";
import Income from "./Components/Income";
import Expenses from "./Components/Expenses";

const App = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    return(<>
        <div className="main-cont">
            <div className="center-cont">
                <header>
                    <h1>Your personal<br/> <span className="special">financial tracker</span></h1>
                    <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} />
                </header>
                <div className="finances">
                    <Income setTotalIncome={setTotalIncome} />
                    <Expenses setTotalExpenses={setTotalExpenses} />
                </div>
            </div>
        </div>
        <footer>
            <p className="copyright">Developed and designed by <a href="https://github.com/blazh-git" target="_blank">blazh</a></p>
        </footer>
    </>)
}

export default App;