function test() {
   console.log(a);
   console.log(foo());

   var a = 1;	// can not use let
   function foo() {
      return 2;
   }	
   /*	can not use const
   const foo = () => {
   	return 2;
   }	*/
}

function test2() {
   let a;
   /*
   function foo() {
      return 2;
   }	*/
   const foo = () => {
   	return 2;
   }
   console.log(a);
   console.log(foo());
   a = 1;
}

test();
test2();