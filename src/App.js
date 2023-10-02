import React, { useState } from 'react';
import InputValue from './components/InputValue';
import ResultDisplay from './components/ResultDisplay';
import { validateInput } from './helpers/validation';
import { arrayNum, shuffleArr } from './helpers/shuffling';
import './App.css';

function App() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [shuffledNumbers, setShuffledNumbers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    handleValue(name, value);
  };

  const handleValue = (name, value) => {
    const isValid = /^\d+$/.test(value);

    if (isValid) {
      if (name === 'min') {
        setMin(parseInt(value, 10));
      } else if (name === 'max') {
        setMax(parseInt(value, 10));
      }
      setErrorMsg('');
    } else if (value === '') {
      clearInput(name);
      setErrorMsg('Please enter a number');
    } else {
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
      setErrorMsg(errorMessage);
      setShowResults(false);
    } else {
      const uniqueNumbers = arrayNum(min, max);
      const shuffledNumbers = shuffleArr(uniqueNumbers);
      setShuffledNumbers(shuffledNumbers);
      setShowResults(true);
    }
  };

  const saveResults = () => {
    const resultsText = shuffledNumbers.join('\n');
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'shuffled_numbers.txt';
    link.click();
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
        <button onClick={handleShuffle}>Shuffle</button>
        {errorMsg && <div className="error">{errorMsg}</div>}
        {showResults && <ResultDisplay shuffledNumbers={shuffledNumbers} />}
        {showResults && <button onClick={saveResults}>Download</button>}
      </div>
    </div>
  );
}

export default App;
