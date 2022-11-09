# Vowel one

### Link

[Kata](https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript)

### Description

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.


### Example 

```
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
```



### My decision

```javascript
function vowelOne(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return s.split('').map(t => vowels.indexOf(t.toLowerCase()) === -1 ? 0 : 1).join('')
}
```

### BEST practice

```javascript
function vowelOne(s){
    return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
}
```
