# A Needle in the Haystack

### Link

[Kata](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript)

### Description

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

### Example

```
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
```

### My decision

```javascript
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
}
```

### BEST practice

```javascript
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}
```
