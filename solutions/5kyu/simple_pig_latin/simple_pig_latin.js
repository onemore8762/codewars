function pigIt(str) {
    return str.split(' ').map(el => '!,.?'.includes(el) ? el : `${el.slice(1)}${el[0]}ay`).join(' ')
}


console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay

console.log(',.!'.includes('!'))