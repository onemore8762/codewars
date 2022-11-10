# Name

### Link

[Kata](https://www.codewars.com/kata/551b4501ac0447318f0009cd/solutions/javascript)

### Description

Implement a function which convert the given boolean value into its string representation.


### My decision

```javascript
function booleanToString(b){
    return b + '' // or String() or toString() or b? 'true':'false'
}

```

### BEST practice

```javascript
function booleanToString(b){
    return b.toString();
}
```
