function findOdd(A) {
    let arr = A.sort()
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length ; j++) {
            if(arr[i] === arr[j]){
                count+=1
            }
        }
        if (count % 2 !== 0){
            return arr[i]
        }
    }

    return arr
}


console.log(findOdd([1,2,2,7,3,3,3,4,4,3,3,3,2,2,1])) // 4
