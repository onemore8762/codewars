# Isograms

### Link

[Kata](https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript)

### Description

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

### Example

``` 
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
```

### My decision

```javascript
function isIsogram(str){
    return str.length === [...new Set(str.toLowerCase())].length
}
```

### BEST practice

```javascript
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
}
```
