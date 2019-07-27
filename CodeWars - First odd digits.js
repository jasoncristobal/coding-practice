// https://www.codewars.com/kata/give-me-the-k-first-digits-odd-digits

function findOddDigits(n, k) {
	let array = n.toString().split("").map(item => parseInt(item))
	let arrayOdd = []
    let oddCount = 0
  
    for (let i = 0; i < array.length && arrayOdd.length < k; i++) {
    	if (array[i] % 2 != 0) {
    		arrayOdd.push(array[i])
            oddCount++
    	}  
    }
    
    if (k > n || oddCount === 0 || oddCount < k) {
        return 0
      } else {
      	return parseInt(arrayOdd.join(""))
      }    
}