# How good are you really?

### Link

[Kata](https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript)

### Description

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!


### My decision

```javascript
function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce((sum,currentValue) => sum+currentValue) / classPoints.length) <  yourPoints
}

```

### BEST practice

```javascript
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}  
```
