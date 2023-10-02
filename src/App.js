import React, { useState } from 'react';
import InputValue from './components/InputValue';
import ResultDisplay from './components/ResultDisplay';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DownloadButton from './components/DownloadButton';

import { handleInput } from './helpers/handleInput';
import { handleShuffle } from './helpers/handleShuffle';
import { saveResults } from './helpers/saveResults';

import './App.css';

function App() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [shuffledNumbers, setShuffledNumbers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="app-container">
        <h2>Enter Range</h2>
        <InputValue
          min={min}
          max={max}
          onInput={(event) => handleInput(event, { min, max, setMin, setMax, setErrorMsg })}
        />
        <button onClick={() => handleShuffle({ min, max, setErrorMsg, setShuffledNumbers, setShowResults })}>Shuffle</button>
        {errorMsg && <div className="error">{errorMsg}</div>}
        {showResults && !errorMsg && <ResultDisplay shuffledNumbers={shuffledNumbers} />}
        {showResults && !errorMsg && <DownloadButton onClick={() => saveResults(shuffledNumbers)} />}
      </div>
    </div>
  );
}

export default App;
