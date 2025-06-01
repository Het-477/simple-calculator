function handleAndSetInputVals(inputValue, buttonValue, setInputValue) {

    const lastChar = inputValue.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // If last char is an operator and new input is also an operator, replace it
    if (operators.includes(buttonValue) && operators.includes(lastChar)) {
        setInputValue((prev) => prev.slice(0, -1) + buttonValue);
    } else {
        setInputValue((prev) => prev + buttonValue);
    }
}

export default handleAndSetInputVals