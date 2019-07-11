// https://www.codewars.com/kata/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision

function howManySmaller(arr,n){
  let count = 0
  arr.map(item => item.toFixed(2)).map(item => count += item<n)
  return count
}