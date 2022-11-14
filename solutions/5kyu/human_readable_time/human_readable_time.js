function humanReadable(seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor(seconds % 3600 / 60)
    seconds = seconds % 3600 % 60
    return `${hours > 9 ? hours : '0' + hours}`
           `:${minutes > 9 ? minutes : '0' + minutes}`
           `:${seconds > 9 ? seconds : '0' + seconds}`
}


console.log(humanReadable(359999)) // 99:59:59
console.log(humanReadable(45296)) // 12:34:56
console.log(humanReadable(125)) // 00:02:05