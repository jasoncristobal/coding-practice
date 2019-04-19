// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2

function charFreq(message) {
  let arrayed = message.split("");
  let outputObj = {};
  
  for (let i = 0; i < message.length; i++) {
    if (outputObj[message[i]]) {
      outputObj[message[i]] += 1;
    } else if (!outputObj[message[i]]) {
      outputObj[message[i]] = 1;
    }
  }
  return outputObj;
  
}
