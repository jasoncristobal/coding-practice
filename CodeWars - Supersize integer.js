// https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer

function superSize(num) {
    let arrOfNums = []
    num.toString().split("").forEach((item) => {(arrOfNums.push(parseInt(item)))})
    return parseInt(arrOfNums.sort((a,b) => b-a).join(""))
}
