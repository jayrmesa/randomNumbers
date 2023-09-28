// Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).

// Define a function that takes the length parameter for our random unique number we want to generate

function generateRandomNumber(length) {
  if (length > 10000) { // length handle, range between (1,10,000)
    console.log("Error: Length cannot exceed 10,000");
    return;
  }
  
  const randomList  = [];

  //create an array of numbers 
  const arrayNum = [];
  for (let index = 1; index <= 10000; index++) {
    arrayNum.push(index);
  }

  for (let i = 0; i < length; i++) {
    //get a random index from the remaining number using Math random and floor to calculate the range
    const randomIndex = Math.floor(Math.random() * arrayNum.length);

    //then remove the selected number from the remaining numbers
    const selectedNum = arrayNum.splice(randomIndex, 1)[0];

    //push the selected number to the random list
    randomList.push(selectedNum);
  }

  return randomList;
}

//call the random numbers function with an argument 10000 to generate the list of unique numbers
const randomNumbers = generateRandomNumber(10000);
console.log (randomNumbers);
