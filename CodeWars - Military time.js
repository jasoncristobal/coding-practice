// https://www.codewars.com/kata/what-time-is-it

var getMilitaryTime = function(input) {
  let array = input.slice(0,-2).split(":")
  let hourNum = parseInt(array[0], 10)
  let hourStr = hourNum.toString()
  let minSecsStr = array.join(":").slice(2,10)
  let AMPM = input.slice(-2)

  if (hourNum === 12 && AMPM === "AM") {
    return "00" + minSecsStr
  } else if (hourNum < 10 && AMPM === "AM") {
    return "0" + hourStr + minSecsStr
  } else if (hourNum < 12 && AMPM === "PM") {
    return (hourNum+12).toString() + minSecsStr
  } else {
    return hourStr + minSecsStr
  }
 
};