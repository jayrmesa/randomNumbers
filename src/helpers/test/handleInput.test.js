import { handleInput } from '../handleInput';

describe('handleInput', () => {
  it('should handle input correctly for valid values', () => {

    const setMin = jest.fn();
    const setMax = jest.fn();
    const setErrorMsg = jest.fn();

    const event = {
      target: { name: 'min', value: '5' },
    };

    handleInput(event, { min: 0, max: 10, setMin, setMax, setErrorMsg });

  });

  it('should handle input correctly for invalid values', () => {

    const setMin = jest.fn();
    const setMax = jest.fn();
    const setErrorMsg = jest.fn();

    const event = {
      target: {
        name: 'min',
        value: 'invalid',
      },
    };

    handleInput(event, { min: 0, max: 10, setMin, setMax, setErrorMsg });

  });
});






