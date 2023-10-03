import { handleShuffle } from '../handleShuffle';
import * as validation from '../validation'; 
import * as shuffling from '../shuffling'; 


const mockValidateInput = jest.fn();
const mockArrayNum = jest.fn();
const mockShuffleArr = jest.fn();
const setShuffledNumbers = jest.fn();
const setShowResults = jest.fn();
const setErrorMsg = jest.fn();

validation.validateInput = mockValidateInput;
shuffling.arrayNum = mockArrayNum;
shuffling.shuffleArr = mockShuffleArr;

describe('handleShuffle', () => {
  it('should handle input validation error', () => {

    mockValidateInput.mockReturnValue('Invalid input');

    handleShuffle({
      min: 0,
      max: 10001, 
      setShuffledNumbers,
      setShowResults,
      setErrorMsg,
    });

    expect(mockValidateInput).toHaveBeenCalledWith(0, 10001);
    expect(setErrorMsg).toHaveBeenCalledWith('Invalid input');
    expect(setShowResults).toHaveBeenCalledWith(false);
    expect(mockArrayNum).not.toHaveBeenCalled();
    expect(mockShuffleArr).not.toHaveBeenCalled();
  });

  it('should handle valid input and shuffle numbers', () => {
  
    mockValidateInput.mockReturnValue('');

    const uniqueNumbers = [1, 2, 3, 4, 5];
    const shuffledNumbers = [3, 1, 2, 5, 4];
    mockArrayNum.mockReturnValue(uniqueNumbers);
    mockShuffleArr.mockReturnValue(shuffledNumbers);

    handleShuffle({
      min: 1,
      max: 5,
      setShuffledNumbers,
      setShowResults,
      setErrorMsg,
    });

    expect(mockValidateInput).toHaveBeenCalledWith(1, 5);
    expect(mockArrayNum).toHaveBeenCalledWith(1, 5);
    expect(mockShuffleArr).toHaveBeenCalledWith(uniqueNumbers);
    expect(setShuffledNumbers).toHaveBeenCalledWith(shuffledNumbers);
    expect(setShowResults).toHaveBeenCalledWith(true);
  });
});
