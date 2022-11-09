function digitalRoot(n) {
    while (n >= 10){
        n = String(n).split('').reduce((sum, currentValue) => {
            sum+= Number(currentValue)
            return sum
        },0)
    }
    return n
}

console.log(digitalRoot(16)) // 7
console.log(digitalRoot(456)) // 6