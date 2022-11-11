# Sum of two lowest positive integers

### Link

[Kata](https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript)

### Description
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.


### Example

``` 
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
```


### My decision

```javascript
function sumTwoSmallestNumbers(numbers) {  
  let min = Infinity
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] + numbers[j] < min) {
                min = numbers[i] + numbers[j]
            }
        }
    }

    return min
}
```

### BEST practice

```javascript
function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};  
```
