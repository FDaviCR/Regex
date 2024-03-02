var exemplo = "a,b,c,d,1,2,3,4.5 a!@";

const regex = /,/;

console.log(exemplo.split(regex));
console.log(exemplo.match(regex));

console.log(exemplo.match(/,/g));
console.log(exemplo.match(/D/g));
console.log(exemplo.match(/D/gi));
console.log(exemplo.match(/2/g));

console.log(exemplo.match(/4.5 a/));
