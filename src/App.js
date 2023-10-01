import React, { useState } from 'react';
import InputValue from './components/InputValue';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [shuffledNumbers, setShuffledNumbers] = useState([]);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(10000);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    handleInputValueChange(name, value);
  };

  const handleInputValueChange = (name, value) => {
    // Use regular expressions to ensure the input is a valid integer
    const isValidInput = /^\d+$/.test(value);

    if (isValidInput) {
      if (name === 'minValue') {
        setMinValue(parseInt(value, 10));
      } else if (name === 'maxValue') {
        setMaxValue(parseInt(value, 10));
      }
    } else if (value === '') {
      // Handle the case where the input field is empty (no value)
      clearInputValue(name);
    }
  };

  const clearInputValue = (name) => {
    if (name === 'minValue') {
      setMinValue('');
    } else if (name === 'maxValue') {
      setMaxValue('');
    }
  };

  const handleShuffle = () => {
    const isValidInput = validateInput(minValue, maxValue);

    if (isValidInput) {
      const uniqueNumbers = prepareArray(minValue, maxValue);
      const shuffledNumbers = shuffleArray(uniqueNumbers);
      setShuffledNumbers(shuffledNumbers);
    }
  };

  const validateInput = (min, max) => {
    if (min >= 1 && max <= 10000 && min <= max) {
      return true;
    } else {
      handleInvalidInput();
      return false;
    }
  };

  const handleInvalidInput = () => {
    if (minValue < 1 || maxValue > 10000) {
      alert('Please enter values within the range [1, 10,000].');
    } else if (minValue > maxValue) {
      alert('The minimum value must be less than or equal to the maximum value.');
    } else {
      alert('Invalid input. Please enter valid values.');
    }
  };

  const prepareArray = (min, max) => {
    const uniqueNumbers = [];
    for (let i = min; i <= max; i++) {
      uniqueNumbers.push(i);
    }
    return uniqueNumbers;
  };

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      <h1>Random Number Shuffler</h1>
      <InputValue
        minValue={minValue}
        maxValue={maxValue}
        onInputChange={handleInputChange}
      />
      <button onClick={handleShuffle}>Shuffle</button>
      <ResultDisplay shuffledNumbers={shuffledNumbers} />
    </div>
  );
}

export default App;

//