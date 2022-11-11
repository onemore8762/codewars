function getSum(a, b) {
    let sum = 0
    if (a < b) {
        for (; a <= b; a += 1) {
            sum += a
        }
    } else {
        for (; b <= a; b += 1) {
            sum += b
        }
    }
    return sum
}

console.log(getSum(-343, -571)) // -104653