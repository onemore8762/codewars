# Human Readable Time

### Link

[Kata](https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript)

### Description

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


### My decision

```javascript
function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor(seconds % 3600 / 60)
    seconds = seconds % 3600 % 60
    return `${hours > 9 ? hours : '0' + hours}`
           `:${minutes > 9 ? minutes : '0' + minutes}`
           `:${seconds > 9 ? seconds : '0' + seconds}`
}
```

### BEST practice

```javascript
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}
```
