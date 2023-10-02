import React from 'react';

function InputValue({ min, max, onInput }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter min number..."
        name="min"
        value={min === null ? '' : min}
        onChange={onInput}
      />
      <input
        type="text"
        placeholder="Enter max number..."
        name="max"
        value={max === null ? '' : max}
        onChange={onInput}
      />
    </div>
  );
}

export default InputValue;



