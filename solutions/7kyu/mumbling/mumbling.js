function accum(s) {
    let value = []
    for (let i = 0; i < s.length; i++) {
        value.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase())
    }
    return value.join('-')
}


console.log(accum("ZpglnRxqenU"))