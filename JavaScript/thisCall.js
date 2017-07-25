var fullName = 'John Doe';  // use let, would console undefined in console.log(test());
let obj = {
   fullName: 'Colin Ihrig',
   prop: {
      fullName: 'Aurelio De Rosa',
      getFullName: function() {
         return this.fullName;
      }
   }
};

console.log(obj.prop.getFullName());

let test = obj.prop.getFullName;
console.log(test());

console.log(test.call(obj.prop));
console.log(test.apply(obj.prop));
/*
打印出Aurelio De Rosa和John Doe
原因是在 JavaScript 中，一个函数的上下文环境，也就是this关键词所引用对象，是依赖于函数是如何被调用的，而不是依赖于函数如何b被定义的

在第一个console.log()调用中， getFullName()是作为obj.prop的函数被调用的
因此，这里的上下文环境指向后者并且函数返回this对象的 fullName 属性
相反，当 getFullName() 被赋为test变量的值时，那个语境指向全局对象(window)
这是因为，test被隐式设置为全局对象的属性
因此，函数调用返回window的fullName属性值，在此段代码中，这个值是通过第一行赋值语句设置的
*/