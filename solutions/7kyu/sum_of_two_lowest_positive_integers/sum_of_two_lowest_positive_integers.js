function sumTwoSmallestNumbers(numbers) {
    let min = Infinity
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] + numbers[j] < min) {
                min = numbers[i] + numbers[j]
            }
        }
    }
    return min
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // 6