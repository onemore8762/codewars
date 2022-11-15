# Beginner Series #2 Clock

### Link

[Kata](https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript)

### Description

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

### Example

``` 
h = 0
m = 1
s = 1

result = 61000
```

### My decision

```javascript
function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000
}
```

### BEST practice

```javascript
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
}
```
