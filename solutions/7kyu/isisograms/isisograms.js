function isIsogram(str) {
    return str.length === [...new Set(str.toLowerCase())].length
}

console.log(isIsogram("Dermatoglyphics"))