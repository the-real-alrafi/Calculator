// Simple calculator logic
const screen = document.querySelector('.calculator-screen');
const keys = document.querySelectorAll('.key');
let screenValue = '0';

// Function to update the screen
function updateScreen(value) {
  screen.value = value;
}

// Function to handle key clicks
keys.forEach(key => {
  key.addEventListener('click', function() {
    let keyValue = this.textContent;

    if (keyValue === 'OFF') {
      // Turn off the screen
      updateScreen(''); // Clear the screen value
      screen.disabled = true; // Disable input
    } else if (keyValue === 'AC') {
      screenValue = '0';
      updateScreen(screenValue);
    } else if (keyValue === '←') {
      screenValue = screenValue.slice(0, -1);
      if (screenValue === '') screenValue = '0';
      updateScreen(screenValue);
    } else if (keyValue === '=') {
      try {
        screenValue = eval(screenValue);
        updateScreen(screenValue);
      } catch {
        screenValue = 'Error';
        updateScreen(screenValue);
      }
    } else {
      if (screenValue === '0') screenValue = keyValue;
      else screenValue += keyValue;
      updateScreen(screenValue);
    }
  });
});
