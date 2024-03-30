const exemplo = `1,2,3,4,5,6,a.b c!d?e\r -
f_g`;

console.log(exemplo.match(/\d/g)) // números [0-9]
console.log(exemplo.match(/\D/g)) // não números [^0-9]
console.log(exemplo.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(exemplo.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]
console.log(exemplo.match(/\s/g)) // espaço [ \t\n\r\f]
console.log(exemplo.match(/\S/g)) // não espaço [^ \t\n\r\f]
