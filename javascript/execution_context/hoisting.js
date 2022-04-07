// function a(x) {
//   console.log(x);
//   var x;
//   console.log(x);
//   var x = 2;
//   console.log(x);
// };

// a(1);

// function a() {
//   console.log(b);
//   var b = 'bbb';
//   console.log(b);
//   function b() { }
//   console.log(b);
// };

// a();

// // ->
// function a() {
//   var b;
//   var b = function () { };

//   console.log(b);
//   b = 'bbb';
//   console.log(b);
//   console.log(b);
// }

// console.log(sum(1, 2));
// console.log(multiply(3, 4));

// function sum(a, b) {
//   return a + b;
// }

// var multiply = function (a, b) {
//   return a * b;
// }

// ->

// var sum = function sum(a, b){ // 함수 선언문은 전체를 호이스팅.
//   return a + b;
// }

// var multiply;

// console.log(sum(1, 2));
// console.log(multiply(3, 4));

// multiply = function(a, b){
//   return a*b;
// }

// error, undefined


// Caution to using function declaration
// console.log(sum(3, 4));

// function sum(x, y) {
//   return x + y;
// }

// var a = sum(1, 2);

// function sum(x, y) {
//   return x + ' + ' + y + ' = ' + (x + y);
// }

// var c = sum(1, 2);
// console.log(c);

// -> 
// var a;
// var c;

// var sum = function sum(x, y){
//   return x+y;
// }

// sum = function sum(x, y) {
//   return x + ' + ' + y + ' = ' + (x + y);
// }

// console.log(sum(3, 4));

// a = sum(1, 2);
// c = sum(1, 2);
// console.log(c);

// 상대적으로 함수 표현식이 안전!

console.log(sum(3, 4)); // sum is not a function!

var sum = function (x, y) {
  return x + y;
}

var a = sum(1, 2);

var sum = function (x, y) {
  return x + ' + ' + y + ' = ' + (x + y);
}

var c = sum(1, 2);
console.log(c);
