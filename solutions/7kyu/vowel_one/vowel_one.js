function vowelOne(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return s.split('').map(t => vowels.indexOf(t.toLowerCase()) === -1 ? 0 : 1).join('')
}

console.log(vowelOne("vowelOne")) // "01010101"
console.log(vowelOne("123, arou")) // "000001011"