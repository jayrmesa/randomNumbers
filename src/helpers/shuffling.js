// Create an array with numbers from min to max 
export const arrayNum = (min, max) => {
  const uniqueNumbers = [];
  for (let i = min; i <= max; i++) {
    uniqueNumbers.push(i);
  }
  return uniqueNumbers;
};

export const shuffleArr = (array) => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
