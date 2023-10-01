// Create an array with numbers from min to max (inclusive)
export function prepareArray(min, max) {
  const uniqueNumbers = [];
  for (let i = min; i <= max; i++) {
    uniqueNumbers.push(i);
  }
  return uniqueNumbers;
}

// Shuffle an array using the Fisher-Yates shuffle algorithm
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

