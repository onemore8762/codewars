function validParentheses(parens) {
    let n = 0

    for (let i = 0; i < parens.length && n >= 0; i += 1) {
        n += (parens[i] === '(' ? 1 : -1)
    }
    return n === 0
}


console.log(validParentheses('(())()()()')) // true
console.log(validParentheses('(()()(()(()()'))// false