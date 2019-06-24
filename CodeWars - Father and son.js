// https://www.codewars.com/kata/coding-3min-father-and-son

function sc(s){
	let output = ""

	for (let i=0; i < s.length; i++) {

		if (s.includes(s[i].toLowerCase()) && s.includes(s[i].toUpperCase())) {
			output+=s[i]
		}		
	}
	return output
}

/*
Look at the 1st char
Does the string include an uppercase of it and a lowercase of it?
Yes? Then add to output
No? Move on and check the next char
*/
