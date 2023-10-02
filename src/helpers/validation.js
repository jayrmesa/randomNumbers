// Check the input values are within the range and return an error if not

export const validateInput = (min, max) => {
  if (min === '' || max === '') {
    return 'Please enter both minimum and maximum values.';
  } else if (min === max) {
    return 'Minimum and maximum values cannot be the same.';
  } else if (min < 1 || max > 10000) {
    return 'Please enter values within the range of 1 to 10,000.';
  } else if (min > max) {
    return 'The minimum value must be less than to the maximum value.';
  } else {
    return ''; // No error
  }
};

