import React, { useState } from 'react';
import InputValue from './components/InputValue';
import ResultDisplay from './components/ResultDisplay';
import { validateInput } from './helpers/validation';
import { arrayNum, shuffleArr } from './helpers/shuffling';
import './App.css';

function App() {
  const [shuffleNum, setShuffleNum] = useState([]);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    handleValue(name, value);
  };

  const handleValue = (name, value) => {
    // regular expressions for a valid integer
    const isValid = /^\d+$/.test(value);

    if (isValid) {
      if (name === 'min') {
        setMin(parseInt(value, 10));
      } else if (name === 'max') {
        setMax(parseInt(value, 10));
      }
      // Clear error message when field is valid
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
      // Set the error message from the validation
      setErrorMsg(errorMessage);
    } else {
      const uniqueNumbers = arrayNum(min, max);
      const shuffledNumbers = shuffleArr(uniqueNumbers);
      setShuffleNum(shuffledNumbers);
      setShowResults(true);
    }
  };

  return (
    <div>
      <div className="navbar">Shuffler</div>
      <div className="sidebar">
        <h2>About</h2>
        <p>An app that generates a list of 10,000 numbers in random order each time it is run.</p>
        <h3>Default range</h3>
        <p>Min = 1</p>
        <p>Max = 10,000</p>
      </div>

      <div className="app-container">  
      <h2>Enter Range</h2>
      <InputValue
        min={min}
        max={max}
        onInput={handleInput}
      />
      <button 
      onClick={handleShuffle}>Shuffle</button>
      {errorMsg && <div className="error">{errorMsg}</div>}
      {showResults && <ResultDisplay shuffledNumbers={shuffleNum} />}
      </div>
    </div>
  );
}

export default App;

