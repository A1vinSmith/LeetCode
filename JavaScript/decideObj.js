let obj = {};
let arr = [];

console.log(typeof obj === 'object');  //true
console.log(typeof arr === 'object');  //true
console.log(typeof null === 'object');  //true
console.log(Object.prototype.toString.call(obj) === "[object Object]");  //[object Object]
console.log(Object.prototype.toString.call(arr) === "[object Object]");  //[object Array]
console.log(Object.prototype.toString.call(null) === "[object Object]");  //[object Null]