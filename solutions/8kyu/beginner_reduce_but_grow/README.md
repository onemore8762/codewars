# Beginner - Reduce but Grow

### Link

[Kata](https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript)

### Description

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

### Example

``` 
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
```

### My decision

```javascript
function grow(x) {
    return x.reduce((acc, current) => acc * current, 1)
}
```

### BEST practice

```javascript
    
```
