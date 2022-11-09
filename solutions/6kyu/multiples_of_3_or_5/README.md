# Multiples of 3 or 5

### Link

[Kata](https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript)

### Description
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).


### My decision

```javascript
function solution(number) {
    let sum = 0;

    for (let i = 1; i < number; i+=1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum;
}
```

### BEST practice

```javascript
function solution(number){
    var sum = 0;

    for(var i = 1;i< number; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    return sum;
}
```
