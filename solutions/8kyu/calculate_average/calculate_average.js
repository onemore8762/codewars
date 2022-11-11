function findAverage(array) {
    if (array.length === 0) return 0
    return array.reduce((sum, currentValue) => sum + currentValue, 0) / array.length
}


console.log(findAverage([1, 1, 1])) // 1
console.log(findAverage([1, 2, 3])) // 2
console.log(findAverage([1, 2, 3, 4])) // 2,5