// https://www.codewars.com/kata/nba-full-48-minutes-average

function pointsPer48(ppg, mpg) {
	if (ppg === 0) { return 0 } else { return Number((48/(mpg/ppg)).toFixed(1)) }
}