# Mumbling

### Link

[Kata](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript)

### Description

This time no story, no theory. The examples below show you how to write function accum:

### Example

``` 
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```


### My decision

```javascript
function accum(s) {
	  let value = []
    for (let i = 0; i < s.length; i++) {
        value.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase())
    }
    return value.join('-')
}
```

### BEST practice

```javascript
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
```
