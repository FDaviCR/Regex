// [-] define um intervalo dentro de um conjunto

const exemplo = '0,a,1,b,2,c,3,d,4,e,5,!,@';
const regex = /[1-3a-c]/g;

console.log(exemplo.match(regex));
