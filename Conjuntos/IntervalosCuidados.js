const exemplo = 'ABC [abc] a-c 1234';

console.log(exemplo.match(/[a-c]/g))
console.log(exemplo.match(/a-c/g)) // não define um range
console.log(exemplo.match(/[A-z]/g)) // intervalos usam a ordem da tabela UNICODE

// tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g))
// console.log(texto.match(/[4-1]/g))
