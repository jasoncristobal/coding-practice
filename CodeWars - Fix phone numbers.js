// https://www.codewars.com/kata/fix-my-phone-numbers

function isItANum(str) {
	let array = str.match(/[0-9]/g)	
	if (array === null || array[0] != 0 || array.length != 11) 
	{ return 'Not a phone number' } else { return array.join("") }
}