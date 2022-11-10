function moveZeros(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0){
            count+=1
        }
    }
    arr = arr.filter(el => el !== 0)
    while (count){
        arr.push(0)
        count-=1
    }
    return arr
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))