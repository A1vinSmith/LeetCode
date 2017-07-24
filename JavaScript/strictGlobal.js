(function() {
   'use strict';
   let a = window.b = 5;
})();

console.log(b);

/*
(function() {
   'use strict';
   let a = b = 5;
})();

console.log(b);
Uncaught ReferenceError: b is not defined
*/