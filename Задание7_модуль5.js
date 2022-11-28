// Задание 7
let arr = [1, 2, 4, 3, 5, 8, 7, 9];
let evenElem = arr.filter(elem => elem % 2 == 0);
console.log( evenElem.length );
let oddElem = arr.filter(elem => elem % 2 != 0);
console.log( oddElem.length )