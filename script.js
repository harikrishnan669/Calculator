let previousContent = '';
let currentContent = '';
let operator = null;

const previousContentDisplay = document.getElementById('previous-content');
const currentContentDisplay = document.getElementById('current-content');

function updateDisplay() {
    previousContentDisplay.innerText = previousContent;
    currentContentDisplay.innerText = currentContent;
}

function clearDisplay() {
    previousContent = '';
    currentContent = '';
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentContent = currentContent.slice(0, -1) || '';
    updateDisplay();
}

function appendCharacter(char) {
    currentContent += char;
    updateDisplay();
}

function calculateResult() {
    try {
        previousContent = currentContent + ' =';
        currentContent = eval(currentContent).toString();
    } catch (error) {
        currentContent = 'Error';
    }
    updateDisplay();
}

