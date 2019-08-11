// https://www.codewars.com/kata/chicken-sexing

function correctness(b, e) {
	let total = 0
	for (let i = 0; i < b.length; i++) {
		if (b[i] === e[i]) {
			total++
		} else if ((b[i] === "?" && e[i] != "?") 
			|| (e[i] === "?" && b[i] != "?")) { total += 0.5 }
	}
	return total
}