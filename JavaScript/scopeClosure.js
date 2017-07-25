var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            // func in IIFE has independent scope, so in scope this is undefined

            console.log("inner func:  self.foo = " + self.foo);
        }());
        (function(test) {   // use closure to fix it.
            console.log("inner func:  this.foo = " + test.foo);  //'bar'
            console.log("inner func:  self.foo = " + self.foo);
        }(self));
    }
};
myObject.func();
// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar
// inner func:  this.foo = bar
// inner func:  self.foo = bar
