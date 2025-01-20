const numberValue: number = 1;
const resetValue: number = 0;

// Initial count value
let count: number = 0;

// Update the count display
const updateCountDisplay = (): void => {
  const countElement = document.getElementById("count") as HTMLElement;
  countElement.textContent = count.toString();
};

// Increment the count
const increment = (): void => {
  count += numberValue;
  updateCountDisplay();
};

// Decrement the count
const decrement = (): void => {
  count -= numberValue;
  updateCountDisplay();
};

// Reset the count
const reset = (): void => {
  count = resetValue;
  updateCountDisplay();
};

// Attach event listeners to buttons
(document.getElementById("increment-button") as HTMLElement).onclick =
  increment;
(document.getElementById("decrement-button") as HTMLElement).onclick =
  decrement;
(document.getElementById("reset-button") as HTMLElement).onclick = reset;
