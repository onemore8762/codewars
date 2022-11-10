# Moving Zeros To The End


### Link

[Kata](https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/javascript)

### Description

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

### Example

``` 
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```

### My decision

```javascript
function moveZeros(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            count+=1
        }
    }
    arr = arr.filter(el => el !== 0)
    while (count){
        arr.push(0)
        count-=1
    }
    return arr
}
```

### BEST practice

```javascript
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
```
