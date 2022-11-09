function spinWords(string){
    return string.split(' ').map(el => el.length >= 5 ? el.split('').reverse().join('') : el).join(' ')
}


console.log(spinWords('Hey fellow warriors')) // "Hey wollef sroirraw"