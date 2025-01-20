"use strict";
const numberValue = 1;
const resetValue = 0;
// Initial count value
let count = 0;
// Update the count display
const updateCountDisplay = () => {
    const countElement = document.getElementById('count');
    countElement.textContent = count.toString();
};
// Increment the count
const increment = () => {
    count += numberValue;
    updateCountDisplay();
};
// Decrement the count
const decrement = () => {
    count -= numberValue;
    updateCountDisplay();
};
// Reset the count
const reset = () => {
    count = resetValue;
    updateCountDisplay();
};
// Attach event listeners to buttons
document.getElementById('increment-button').onclick = increment;
document.getElementById('decrement-button').onclick = decrement;
document.getElementById('reset-button').onclick = reset;
