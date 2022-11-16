function nbYear(p0, percent, aug, p) {
    let count = 0
    while (p0 <= p){
        count+=1
        p0 += Math.floor(p0 * (percent/100)) + aug
    }
    return count
}

console.log(nbYear(1500, 5, 100, 5000)) // 15