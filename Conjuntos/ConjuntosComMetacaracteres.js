// [] define um conjunto

const exemplo = '.$+*?-';
const regex = /[02468]/g;

console.log(exemplo.match(/[+.?*$]./g)) // não precisa de escape dentro do conjunto
console.log(exemplo.match(/[$-?]/g)) // isso é um intervalo (range)

// NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))
// pode precisar de escape dentro do conjunto: - [ ] ^