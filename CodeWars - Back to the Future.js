// https://www.codewars.com/kata/back-to-the-future

function backToTheFuture(str) {
 if (str.includes("October") || str.includes("July") || 
     str.includes("December") || str.includes("November") || 
     str.includes("August") || str.includes("May") || str.includes("June")) {
  return "Doc, I can't get back to the future!";
 }
 else if (str.includes("January")) {
  let departureDate = str.replace("January", "October")
  return "I'm leaving here on " + departureDate + "!";
 }
 else if (str.includes("April")) {
  let departureDate = str.replace("April", "July")
  return "I'm leaving here on " + departureDate + "!";
 }
 else if (str.includes("September")) {
  let departureDate = str.replace("September", "December")
  return "I'm leaving here on " + departureDate + "!";
 }
 else if (str.includes("February")) {
  let departureDate = str.replace("February", "March")
  return "I'm leaving here on " + departureDate + "!";
 }
 else if (str.includes("March") && str.includes("31")) {
  return "Doc, I can't get back to the future!";
 }
 else if (str.includes("March")) {
  let departureDate = str.replace("March", "November")
  return "I'm leaving here on " + departureDate + "!";
 }

}