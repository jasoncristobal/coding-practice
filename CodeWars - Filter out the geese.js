// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let noGeese = [];
  
  for (let i = 0; i < birds.length; i++) {
    let goose = "";
    let goosePresent = false;
    
    for (let j = 0; j < geese.length; j++) {
      goose = geese[j];
      
      if (birds[i] === geese[j]) {
        goosePresent = true;
      } 
    }
    
    if (goosePresent === false) {
      noGeese.push(birds[i]);
    } 

  } return noGeese;
}  
    
  // return an array containing all of the strings in the input array except those that match strings in geese


/* Brainstorming notes:
-What do I want to do with "Mallard"? I want to compare it with every goose.
-Don't move on from Mallard until it's been compared to the last goose.
-So when does the outer loop move on? When the last goose is done.
-What happens as you loop through the geese?
-First goose is defined as "goose". 
-When does the inner loop move on? After it's been compared.
*/