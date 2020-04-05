var fullName = 'John Doe';  // console.log(test()); get undefined with `let`
let obj = {
   fullName: 'Colin Irreg',
   prop: {
      fullName: 'Aurelio De Rosa',
      getFullName: function() {
         return this.fullName;
      }
   }
};

console.log(obj.prop.getFullName()); // Aurelio De Rosa

let test = obj.prop.getFullName;
console.log(test()); // John Doe, undefined with `let`

console.log(test.call(obj.prop)); // Aurelio De Rosa
console.log(test.apply(obj.prop)); // Aurelio De Rosa