function splitAndMerge(str,sp){
  let splitToWords = str.split(" ");
  let splitToChars = "";
  for (let i = 0; i < splitToWords.length; i++) {
    splitToChars += splitToWords[i].split("").join(" ");
  } return splitToChars;
}

/* Clear English version of instructions
Write a Fn called "splitAndMerge" that takes 2 parameters: a string and a character. 
DONE - Turn the sentence into an array in which each word is an item (use space as a separator). 
Divide each item/word into characters (use empty string as a separator). 
Merge each item back together with the "sp" character. It's still an array at this point.
Merge all the items so that it's not an array anymore, with spaces between each word
*/

// https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/train/javascript