import { useEffect } from 'react';

function useKeyboardInput(handleClick, setInputValue, inputValue) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            console.log(key)

            if (key === 'Enter' || key === '=') {
                if (inputValue.trim() !== "" && !/[\+\-\*\/\.]$/.test(inputValue)) {
                    handleClick('=');
                }
            } else if ((key === 'Escape') || (key === 'Control' && (key === 'c' || key === 'C'))) {
                handleClick('C');
            } else if (key === 'Backspace' || key === 'Delete') {
                setInputValue((prev) => prev.slice(0, -1));
            } else if (/[0-9+\-*/.]/.test(key)) {
                handleClick(key);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleClick, inputValue, setInputValue]);
}

export default useKeyboardInput;
