# Name

### Link

[Kata](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript)

### Description
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


### Example

``` 
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
```


### My decision

```javascript
function invert(array) {
    return array.map(el => -el)
}
```

### BEST practice

```javascript
const invert = array => array.map(num => -num);
```
