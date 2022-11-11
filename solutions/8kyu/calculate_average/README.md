# Calculate average

### Link

[Kata](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript)

### Description

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


### My decision

```javascript
function findAverage(array) {
    if (array.length === 0) return 0
    return array.reduce((sum, currentValue) => sum + currentValue, 0) / array.length
}
```

### BEST practice

```javascript
var find_average = (array) => {
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}    
```
