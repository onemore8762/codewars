function grow(x) {
    return x.reduce((acc, current) => acc * current, 1)
}

console.log(grow([4, 1, 1, 1, 4])) // 16
console.log(grow([2, 2, 2, 2, 2, 2])) // 64