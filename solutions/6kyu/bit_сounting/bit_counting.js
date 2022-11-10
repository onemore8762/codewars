let countBits = function(n) {
    return (n).toString(2).split('').reduce((sum, currentValue) => currentValue === '1'?sum + +currentValue: sum, 0)
};

console.log(countBits(4)) // 1
console.log(countBits(10)) // 2