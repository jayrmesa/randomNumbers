import React from 'react';

function InputValue({ minValue, maxValue, onInputChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter min number..."
        name="minValue"
        value={minValue}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="Enter max number..."
        name="maxValue"
        value={maxValue}
        onChange={onInputChange}
      />
    </div>
  );
}

export default InputValue;


