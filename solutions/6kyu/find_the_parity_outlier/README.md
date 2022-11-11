# Find The Parity Outlier

### Link

[Kata](https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript)

### Description

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

### Example

``` 
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

### My decision

```javascript
let odd = 0
    for (let i = 0; i < 3; i+=1) {
        if (integers[i] % 2 === 0) {
            odd += 1
        }
    }
    return odd > 1? +integers.filter((el) => el%2!==0).join(''): integers.filter((el) => el%2===0 ).join('')
```

### BEST practice

```javascript
function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}
```
