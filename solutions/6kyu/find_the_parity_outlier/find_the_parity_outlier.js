function findOutlier(integers) {
    let odd = 0
    for (let i = 0; i < 3; i+=1) {
        if (integers[i] % 2 === 0) {
            odd += 1
        }
    }
    return odd > 1? +integers.filter((el) => el%2!==0).join(''): integers.filter((el) => el%2===0 ).join('')
}

console.log(findOutlier([2,6,8,10,3])) // 3
console.log(findOutlier([1,1,0,1,1])) // 0