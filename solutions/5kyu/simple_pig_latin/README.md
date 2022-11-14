# Simple Pig Latin


### Link

[Kata](https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript)

### Description

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

### Example

``` 
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

### My decision

```javascript
function pigIt(str) {
    return str.split(' ').map(el => '!,.?'.includes(el) ? el : `${el.slice(1)}${el[0]}ay`).join(' ')
}
```

### BEST practice

```javascript
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
```
