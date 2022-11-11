# 
Fake Binary

### Link

[Kata](https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript)

### Description

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.



### My decision

```javascript
function fakeBin(x){
    return x.split('').map(el => el < 5 ? 0 : 1).join('')
}
```

### BEST practice

```javascript
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}    
```
