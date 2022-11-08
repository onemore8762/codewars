# Valid Parentheses

### Link

[Kata](https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript)

### Description

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The
function should return true if the string is valid, and false if it's invalid.
### Example

```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```
### My decision

```javascript
function validParentheses(parens) {
    let n = 0
    for (let i = 0; i < parens.length && n >= 0; i += 1) {
        n += (parens[i] === '(' ? 1 : -1)
    }
    return n === 0
}
```

### BEST practice

```javascript
function validParentheses(parens) {
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}
```
