// . é um caractere especial que representa qualquer caractere(um coringa).


const exemplo = '1,2,3,@,4,5,6,7,8,9,0.a,b,c,$,d,e,f,g,h';
const regex = /4.5/g;
const regex2 = /4..5/g;
const regex3 = /4...6/g;

console.log(exemplo.match(regex));
console.log(exemplo.match(regex2));
console.log(exemplo.match(regex3));
