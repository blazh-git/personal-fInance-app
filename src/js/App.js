import React from "react";
import InputWindow from "./Components/InputWindow";

const App = () => {
    return(
        <div className="main-cont">
            <div className="center-cont">
                <header>
                    <h1>Your personal<br/> <span className="special">financial tracker</span></h1>
                    <div className="balance-cont">
                        <div className="balance-column left">
                            <h3 className="your-balance">Your balance:</h3>
                            <div className="balance">€ 24.235,00</div>
                        </div>
                        <div className="balance-column right">
                            <div className="total-cont">
                                <p className="p-total">Total Income:</p>
                                <p className="placeholder">€ 10.250</p>
                            </div>
                            <div className="total-cont">
                                <p className="p-total">Total Expenses:</p>
                                <p className="placeholder">€ 10.250</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="finances">
                    <InputWindow
                        title="Income"
                        financialClass="income"/>
                </div>
            </div>
        </div>
    )
}

export default App;