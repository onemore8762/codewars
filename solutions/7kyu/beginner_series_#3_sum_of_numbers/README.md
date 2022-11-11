# Beginner Series #3 Sum of Numbers

### Link

[Kata](https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript)

### Description

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

### Example

``` 
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
```


### My decision

```javascript
function getSum(a, b) {
    let sum = 0
    if (a < b) {
        for (; a <= b; a += 1) {
            sum += a
        }
    } else {
        for (; b <= a; b += 1) {
            sum += b
        }
    }
    return sum
}
```

### BEST practice

```javascript
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}
```
