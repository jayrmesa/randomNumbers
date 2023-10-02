import { validateInput }  from './validation';
import { arrayNum, shuffleArr } from './shuffling';

export function handleShuffle({min, max, setShuffledNumbers, setShowResults, setErrorMsg}) {
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
}
