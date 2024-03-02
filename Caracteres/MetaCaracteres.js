// . ? * + - ^ $ | [ ] { } ( ) \ :

const exemplo = '1,2,3,@,4,5,6,7,8,9,0.a,b,c,$,d,e,f,g,h';
const regex = /\.|\@|\$/g;

console.log(exemplo.split(regex));
console.log(exemplo.match(regex));
