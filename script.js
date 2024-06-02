document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                currentInput += ` ${button.value} `;
            } else {
                currentInput += button.value;
            }
            display.value = currentInput;
        });
    });

    clearButton.addEventListener('click', () => {
        currentInput = '';
        display.value = currentInput;
    });

    equalsButton.addEventListener('click', () => {
        try {
            display.value = eval(currentInput);
            currentInput = display.value;
        } catch {
            display.value = 'Error';
        }
    });
});