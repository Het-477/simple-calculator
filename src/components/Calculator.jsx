import React from 'react'

const keypadButtons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
];


function Calculator() {
    

    return (
        <div className="calculator">
            <div className="display">0</div>
            <div className="keypad-buttons">
                {keypadButtons.map((buttonValue, index) => {
                    return <button
                        key={index}
                        className={
                            (buttonValue === 'C' ?
                                "clear" :
                                buttonValue === '=' ?
                                    "equals" :
                                    ['+', '-', '*', '/'].includes(buttonValue) ?
                                        "operator" : "")
                        }>
                        {buttonValue}</button>
                })}
            </div>
        </div>
    )
}

export default Calculator

