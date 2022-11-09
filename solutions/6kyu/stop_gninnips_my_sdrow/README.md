# Stop gninnipS My sdroW!

### Link

[Kata](https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript)

### Description

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

### Example

``` 
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
```

### My decision

```javascript
function spinWords(string){
    return string.split(' ').map(el => el.length >= 5 ? el.split('').reverse().join('') : el).join(' ')
}

```

### BEST practice

```javascript
function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}
```
