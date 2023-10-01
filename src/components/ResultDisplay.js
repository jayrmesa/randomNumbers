import React from 'react';

function ResultDisplay({ shuffledNumbers }) {
  return (
    <div>
      <h2>Results:</h2>
      <ul>
        {shuffledNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultDisplay;
