function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx'
    for (let i = 0; i < numbers.length; i+=1) {
        format = format.replace('x', numbers[i])
    }
    return format
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //"(123) 456-7890"