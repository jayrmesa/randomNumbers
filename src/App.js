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

    if (name === 'minValue') {
      setMinValue(parseInt(value, 10));
    } else if (name === 'maxValue') {
      setMaxValue(parseInt(value, 10));
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
      <h1>Shuffler</h1>
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

