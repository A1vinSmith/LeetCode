var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
/*
打印出Aurelio De Rosa和John Doe
原因是在 JavaScript 中，一个函数的上下文环境，也就是this关键词所引用对象，是依赖于函数是如何被调用的，而不是依赖于函数如何b被定义的

在第一个console.log()调用中， getFullname()是作为obj.prop的函数被调用的
因此，这里的上下文环境指向后者并且函数返回this对象的 fullname属性
相反，当 getFullname() 被赋为test变量的值时，那个语境指向全局对象(window)
这是因为，test被隐式设置为全局对象的属性
因此，函数调用返回window的fullname属性值，在此段代码中，这个值是通过第一行赋值语句设置的
*/