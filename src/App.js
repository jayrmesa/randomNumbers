import React, { useState } from 'react';
import InputValue from './components/InputValue';
import ResultDisplay from './components/ResultDisplay';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DownloadButton from './components/DownloadButton';

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
      <Navbar />
      <Sidebar />
      <div className="app-container">
        <h2>Enter Range</h2>
        <InputValue
          min={min}
          max={max}
          onInput={handleInput}
        />
        <button onClick={handleShuffle}>Shuffle</button>
        {errorMsg && <div className="error">{errorMsg}</div>}
        {showResults && !errorMsg && <ResultDisplay shuffledNumbers={shuffledNumbers} />}
        {showResults && !errorMsg && <DownloadButton onClick={() => saveResults(shuffledNumbers)} />}
      </div>
    </div>
  );
}

export default App;
