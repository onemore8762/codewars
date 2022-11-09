function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return []
    let positiveCount = 0
    let sumNegative = 0
    input.reduce((sum, current) => {
        if (current > 0) {
            positiveCount += 1
        } else {
            sumNegative += current
        }
    }, 0)
    return [positiveCount, sumNegative]
}


console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // [8, -50]