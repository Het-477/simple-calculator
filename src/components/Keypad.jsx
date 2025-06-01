import KeypadButton from './KeypadButton';

function Keypad({ buttonsArray, onButtonClick }) {
    return (
        <div className="keypad-buttons">
            {buttonsArray.map((buttonValue, index) => (
                <KeypadButton
                    key={index}
                    value={buttonValue}
                    onClick={() => onButtonClick(buttonValue)}
                />
            ))}
        </div>
    );
}

export default Keypad;
