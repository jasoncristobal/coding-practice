// https://www.codewars.com/kata/coding-3min-hacker-and-change

function change(name,items,payment) {

  let sum = items.reduce((a, b) => a + b)
  let change = payment-sum
  
  function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
  
  let roundedChange = round(change, 2)

  if (name != "John") {
    return roundedChange
  }
  else if (name === "John" && change < 0) {
    return 0
  } 
  else if (name === "John" && change > 0) {
    
  let indexOfDecimalPoint = roundedChange.toString().indexOf(".") // turn to string
  let digitsBeforeDecimalPoint = Number(roundedChange.toString().substr(0, indexOfDecimalPoint)) // turn back to num
  let digitsAfterDecimalPoint = Number("0."+roundedChange.toString().substr(indexOfDecimalPoint+1))*2
  
  return digitsBeforeDecimalPoint + digitsAfterDecimalPoint
    
  }

}