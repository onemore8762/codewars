function check(a, x) {
    return a.includes(x)
}


console.log(check([1, 2, 3]), 2) //true
console.log(check([1, 5, 7, 'test']), 67) //false