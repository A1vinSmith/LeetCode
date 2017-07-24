String.prototype.repeatify = String.prototype.repeatify || function(times) {
   let str = '';

   for (let i = 0; i < times; i++) {
      str += this;
   }

   return str;
};

console.log('hello'.repeatify(3));	// hellohellohello