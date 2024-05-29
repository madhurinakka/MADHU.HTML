
function Test(params) {
  //body
  console.log(params); //function statement
 
  return 60;
}
 
const data = Test(20);
 
console.log(data);
 
//Higher order functions - A function that accepts another function as a parameter
 
function Hello() {
  console.log("hello !! welcome"); //--> call back function
}
 
function greet(anotherFunctionParam) {
  anotherFunctionParam(); //--> Higher order function
}
 
greet(Hello);
 
// Arrow Functions ES6
 
let arrowFunction = (a, b) => {
  console.log(a + b); //function expression
};
 
arrowFunction(50, 60);
 
let arr2 = (_) => {
  console.log("New Arrow fun");
};
 
//Anonymous function
 
let AnonymousFunction = function () {
  console.log("Calling from anonymous function");
};
 
AnonymousFunction();
 