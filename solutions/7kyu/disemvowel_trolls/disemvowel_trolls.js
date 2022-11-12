function disemvowel(str) {
    return str.split('').filter(el => !['a', 'e', 'i', 'o', 'u'].includes(el.toLowerCase())).join('')
}


console.log(disemvowel("This website is for losers LOL!")) // Ths wbst s fr lsrs LL!
