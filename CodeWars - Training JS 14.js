// https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r,g,b){

  let hex = "#";
  
  if (r === 0) {
    hex += "00";
  } else if (r > 0 && r < 10) {
    hex += "0"+r;
  } else if (r.toString(16).includes("0") && r.toString(16).length === 2) {
    hex += r.toString(16);
  } else if (r.toString(16).length === 1) {
    hex += "0"+r.toString(16);
  } else {
    hex += r.toString(16);
  }

  if (g === 0) {
    hex += "00";
  } else if (g > 0 && g < 10) {
    hex += "0"+g;
  } else if (g.toString(16).includes("0") && g.toString(16).length === 2) {
    hex += g.toString(16);
  } else if (g.toString(16).length === 1) {
    hex += "0"+g.toString(16);
  } else {
    hex += g.toString(16);
  }

  if (b === 0) {
    hex += "00";
  } else if (b > 0 && b < 10) {
    hex += "0"+b;
  } else if (b.toString(16).includes("0") && b.toString(16).length === 2) {
    hex += b.toString(16);
  } else if (b.toString(16).length === 1) {
    hex += "0"+b.toString(16);
  } else {
    hex += b.toString(16);
  }

  return hex;
 
}  


/* Clear English version of instructions
Write a Fn called "colorOf" that takes 3 parameters: r, g, and b. 
Each one is a number between 0-255. What you return starts with "#", 
then 2 characters each for r, g, and b. 
*/