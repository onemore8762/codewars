function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000
}

console.log(past(0,1,1)) //61000
console.log(past(1,1,1)) //3661000