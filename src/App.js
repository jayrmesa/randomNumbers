import React, { useState } from 'react';
import InputValue from './components/InputValue';
import ResultDisplay from './components/ResultDisplay';
import { validateInput } from './helpers/validation';
import { arrayNum, shuffleArr } from './helpers/shuffling';

function App() {
  const [shuffleNum, setShuffleNum] = useState([]);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInput = (event) => {
    const { name, value } = event.target;
    handleValue(name, value);
  };

  const handleValue = (name, value) => {
    // Use regular expressions to ensure the input is a valid integer
    const isValid = /^\d+$/.test(value);

    if (isValid) {
      if (name === 'min') {
        setMin(parseInt(value, 10));
      } else if (name === 'max') {
        setMax(parseInt(value, 10));
      }
      // Clear error message when input is valid
      setErrorMsg('');
    } else if (value === '') {
      // Handle the case where the text field is empty 
      clearInput(name);
      // Set an error message for blank field
      setErrorMsg('Please enter a number');
    } else {
      // Set the error message from the validation result
      setErrorMsg(validateInput(min, max));
    }
  };

  const clearInput = (name) => {
    if (name === 'min') {
      setMin('');
    } else if (name === 'max') {
      setMax('');
    }
  };

  const handleShuffle = () => {
    const errorMessage = validateInput(min, max);

    if (errorMessage) {
      // Set the error message from the validation result
      setErrorMsg(errorMessage);
    } else {
      const uniqueNumbers = arrayNum(min, max);
      const shuffledNumbers = shuffleArr(uniqueNumbers);
      setShuffleNum(shuffledNumbers);
    }
  };

  return (
    <div>
      <h1>Shuffler</h1>
      <InputValue
        min={min}
        max={max}
        onInput={handleInput}
      />
      <button onClick={handleShuffle}>Shuffle</button>
      {errorMsg && <div className="error">{errorMsg}</div>}
      <ResultDisplay shuffledNumbers={shuffleNum} />
    </div>
  );
}

export default App;

