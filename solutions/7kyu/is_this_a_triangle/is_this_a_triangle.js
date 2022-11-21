function isTriangle(a,b,c)
{
    return a + b > c && a + c > b && b + c > a
}

console.log(isTriangle(6,4,3)) // true
console.log(isTriangle(6,4,10)) // false