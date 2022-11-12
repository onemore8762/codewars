# Two to One

### Link

[Kata](https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript)

### Description

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

### Example

``` 
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

### My decision

```javascript
function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('')
}
```

### BEST practice

```javascript
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
```
