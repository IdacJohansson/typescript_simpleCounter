// Initial count value
let count = 0;

// Update the count display
const updateCountDisplay = () => {
    const countElement = document.getElementById('count');
    countElement.textContent = count;
};

// Increment the count
const increment = () => {
    count += 1;
    updateCountDisplay();
};

// Decrement the count
const decrement = () => {
    count -= 1;
    updateCountDisplay();
};

// Reset the count
const reset = () => {
    count = 0;
    updateCountDisplay();
};

// Attach event listeners to buttons
document.getElementById('increment-button').onclick = increment;
document.getElementById('decrement-button').onclick = decrement;
document.getElementById('reset-button').onclick = reset;
