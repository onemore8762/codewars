function DNAStrand(dna){
    return dna.split('').map(t => t === 'T'?'A': t === 'A'?'T': t==='C'? 'G': 'C' ).join('')
}


console.log(DNAStrand("AAAA")) // "TTTT"
console.log(DNAStrand("ATTGC")) // "TAACG"