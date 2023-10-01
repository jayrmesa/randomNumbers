import React, { useState } from 'react';
import InputValue from './components/InputValue';
import ResultDisplay from './components/ResultDisplay';

function App() {
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

  return (
    <div>
      <h1>Shuffler</h1>
      <InputValue
        minValue={minValue}
        maxValue={maxValue}
        onInputChange={handleInputChange}
      />
      <ResultDisplay />
    </div>
  );
}

export default App;

