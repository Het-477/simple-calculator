function KeypadButton({ value, onClick }) {
    const className =
        value === 'C'
            ? 'clear'
            : value === '='
                ? 'equals'
                : ['+', '-', '*', '/'].includes(value)
                    ? 'operator'
                    : '';

    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
}

export default KeypadButton;
