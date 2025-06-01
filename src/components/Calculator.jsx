import { useState } from 'react';
import { evaluate } from 'mathjs';
import Keypad from './Keypad';  // Import Keypad component
import useKeyboardInput from '../functions/useKeyboardInput';

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
        if (buttonValue === 'C') {
            setInputValue("");
        } else if (buttonValue === '=') {
            if (inputValue.trim() === "") return;  // prevent evaluating empty string
            try {
                const result = evaluate(inputValue).toString();
                setInputValue(result);
            } catch (error) {
                setInputValue("Error");
                console.log(error);
            }
        } else {
            setInputValue((prevValue) => prevValue + buttonValue);
        }
    }

    // handle input from keyboard 
    useKeyboardInput(handleClick, setInputValue, inputValue);

    return (
        <div className="calculator">
            <div className="display">{inputValue || "0"}</div>
            <Keypad buttonsArray={keypadButtons} onButtonClick={handleClick} />
        </div>
    );
}

export default Calculator;
