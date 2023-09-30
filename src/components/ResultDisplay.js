import React from 'react';

function ResultDisplay({ shuffledNumbers }) {
  return (
    <div>
      <h2>Shuffled Numbers:</h2>
      <ul>
        {shuffledNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultDisplay;
