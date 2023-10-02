import { validateInput }  from './validation';

export function handleInput(event, { min, max, setMin, setMax, setErrorMsg }) {
  const { name, value } = event.target;
  handleValue(name, value, { min, max, setMin, setMax, setErrorMsg });
}

export function handleValue(name, value, { min, max, setMin, setMax, setErrorMsg }) {
  const isValid = /^\d+$/.test(value);

  if (isValid) {
    if (name === 'min') {
      setMin(parseInt(value, 10));
    } else if (name === 'max') {
      setMax(parseInt(value, 10));
    }
    setErrorMsg('');
  } else if (value === '') {
    clearInput(name, { setMin, setMax });
    setErrorMsg('Please enter a number');
  } else {
    setErrorMsg(validateInput(min, max));
  }
}

export function clearInput(name, { setMin, setMax }) {
  if (name === 'min') {
    setMin('');
  } else if (name === 'max') {
    setMax('');
  }
}

