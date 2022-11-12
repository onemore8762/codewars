function getMiddle(s) {
    return s.length % 2 === 0 ? s[Math.floor((s.length - 1) / 2)] + s[Math.ceil((s.length - 1) / 2)] : s[(s.length - 1) / 2]
}


console.log(getMiddle('testing')) // t
console.log(getMiddle('test')) // es