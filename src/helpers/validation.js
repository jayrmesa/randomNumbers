// Validate if the input values are within the specified range
export function validateInput(min, max) {
  if (min >= 1 && max <= 10000 && min <= max) {
    return true;
  } else {
    return false;
  }
}

// Handle invalid input with appropriate error messages
export function handleInvalidInput(minValue, maxValue) {
  if (minValue < 1 || maxValue > 10000) {
    alert('Please enter values within the range [1, 10,000].');
  } else if (minValue > maxValue) {
    alert('The minimum value must be less than or equal to the maximum value.');
  } else {
    alert('Invalid input. Please enter valid values.');
  }
}

// Clear input value if it's empty
export function clearInputValue(name, setMinValue, setMaxValue) {
  if (name === 'minValue') {
    setMinValue('');
  } else if (name === 'maxValue') {
    setMaxValue('');
  }
}