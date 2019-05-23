// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  let arrayOfStrings = n.toString().split('').reverse();
  let arrayOfNumbers = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
   let num = Number(arrayOfStrings[i]);
   arrayOfNumbers.push(num);
  } return arrayOfNumbers;
}

// Turn num into string, then turn string into an array and reverse it
// Use a "for" loop to convert each array item (each of which is a string) into a number
// Push each number into another array and return it when the loop ends