# Shortest Word


### Link

[Kata](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript)

### Description

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


### My decision

```javascript
function findShort(s){
    return s.split(' ').reduce((min, currentValue) => currentValue.length < min ? currentValue.length : min, Infinity)
}
```

### BEST practice

```javascript
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}
```
