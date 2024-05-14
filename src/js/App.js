import React from "react";
import Window from "./Components/Window";

const App = () => {
    return(
        <div className="main-cont">
            <div className="center-cont">
                <h1>Your personal<br/> <span className="special">financial tracker</span></h1>
                <div className="finances">
                    <Window
                        title="Income"
                        financialClass="income"/>
                </div>
            </div>
        </div>
    )
}

export default App;