String.prototype.camelCase=function(){
    return this.split(' ').map(el => el? el[0].toUpperCase() + el.slice(1): '').join('')
}

console.log("test case".camelCase()) // TestCase