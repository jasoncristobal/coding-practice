// https://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr,d,n){

  let arrayCopy = arr;

if (d === "right") {
    for (let i = 0; i < n; i++) {
    arrayCopy[0].unshift(arrayCopy[2].pop()); 
		// this adds the last num of arr[2] to the start of the arr[0]
		// arr[0] now has a new num at the start
		arrayCopy[1].unshift(arrayCopy[0].pop()); 
		// this adds the last num of arr[0] to start of arr[1]
		// arr[1] now has a new num at the start
		arrayCopy[2].unshift(arrayCopy[1].pop()); 
		// this adds the last num of arr[1] to start of arr[2]
		// at this point, everything should've shifted by one
    } return arrayCopy;
  } 
  
  else if (d === "left") {
    for (let i = 0; i < n; i++) {
    arrayCopy[2].push(arrayCopy[0].shift()); 
    arrayCopy[0].push(arrayCopy[1].shift());
    arrayCopy[1].push(arrayCopy[2].shift());
    } return arrayCopy;
  } 
  
}

/* Remember: 
.shift() pops off an item from the start.
.unshift() adds an item at the start
*/