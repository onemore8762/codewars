function findShort(s){
    return s.split(' ').reduce((min, currentValue) => currentValue.length < min ? currentValue.length : min, Infinity)
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))