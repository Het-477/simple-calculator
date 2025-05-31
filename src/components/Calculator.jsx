import { useState } from 'react'
import { evaluate } from 'mathjs';

const keypadButtons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
];


function Calculator() {
    const [inputValue, setInputValue] = useState("");

    function handleClick(buttonValue) {
        // console.log(buttonValue);
        if (buttonValue === 'C') {
            setInputValue("");
        }
        else if (buttonValue === '=') {
            try {
                const result = evaluate(inputValue).toString();
                setInputValue(result);
            } catch (error) {
                setInputValue("Error")
                console.log(error)
            }
        }
        else {
            setInputValue((prevValue) => prevValue + buttonValue)
        }
    }

    return (
        <div className="calculator">
            <div className="display">{inputValue || 0}</div>
            <div className="keypad-buttons">
                {keypadButtons.map((buttonValue, index) => {
                    return <button
                        key={index}
                        className={
                            buttonValue === 'C' ?
                                "clear" :
                                buttonValue === '=' ?
                                    "equals" :
                                    ['+', '-', '*', '/'].includes(buttonValue) ?
                                        "operator" : ""
                        }
                        onClick={() => handleClick(buttonValue)}>
                        {buttonValue}</button>
                })}
            </div>
        </div>
    )
}

export default Calculator

