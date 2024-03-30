const exemplo = '1,2,3,a.b c!d?e[f';

console.log(exemplo.match(/\D/g))
console.log(exemplo.match(/[^0-9]/g))
console.log(exemplo.match(/[^\d!\?\[\s,\.]/g))

const exemplo2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';
console.log(exemplo2.match(/[^!-/:-@\s]/g))
