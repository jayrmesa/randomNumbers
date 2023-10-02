import React from 'react';

function ResultDisplay({ shuffledNumbers }) {
  return (
    <div className="result-box">
      <h3>Results</h3>
      <ul>
        {shuffledNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultDisplay;
