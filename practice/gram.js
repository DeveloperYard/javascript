// console.log(parseInt('11', 2));

// console.log(parseInt('11', 3));

// console.log('hello'.charAt(4));

// const a = ()=>{};

// console.log(typeof('3'+a));
// console.log(typeof(a));

// console.log(123 != '123'); // 타입 강제변환 후 검사
// console.log(123 !== '123'); // 타입 변환 없이 검사

// array = [1, 2, 3]
// obj = {'1':1, '2':2};
// for (prop in obj) {
//   console.log(prop);
//   console.log(typeof(prop));
// }
// // for (prop of obj){
// //   console.log(prop);
// //   console.log(typeof(prop));
// // }

// for (prop in array) {
//   console.log(prop); 
//   console.log(typeof(prop)); // 왜 전부 string?
// }

// for (prop of array){
//   console.log(prop);
//   console.log(typeof(prop));
// }

// switch(action) {
//   case 'draw':
//       drawIt();
//       break;
//   case 'eat':
//       eatIt();
//       break;
//   default:
//       doNothing();
// }


// var triangle = {a:1, b:2, c:3};

// function ColoredTriangle() {
//   this.color = "red";
// }

// ColoredTriangle.prototype = triangle;

// function show_own_props(obj, objName) {
//   var result = "";

//   for (var prop in obj) {
//     if( obj.hasOwnProperty( prop ) ) {
//       result += objName + "." + prop + " = " + obj[prop] + "\n";
//     }
//   }

//   return result;
// }

// o = new ColoredTriangle();
// console.log(show_own_props(o, "o")); /* alerts: o.color = red */

// var obj = {
//   name: "Carrot",
//   "for": "Max",
//   details: {
//       color: "orange",
//       size: 12
//   }
// }

// console.log(obj.details.color);
// console.log(obj["details"]["size"]); // 이와 같이 연속적인 접근이 가능!

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // 객체를 정의한다
// var you = new Person('You', 24);
// // "You"라는 이름의 24세인 새로운 사람을 생성중이다.

// console.log(you.name);
// you.name = "hi";
// var name = obj.name;
// console.log(name);
// console.log(you);

// // bracket 표기법
// obj["name"] = "Simon";
// var name = obj["name"];
// key를 정의하기 위해 변수도 쓸수 있습니다.
// var user = prompt('what is your key?')
// obj[user] = prompt('what is its value?')

// obj.for = "Simon"; // 구문 오류, for 가 예약된 단어(키워드)이기 때문에
// obj["for"] = "Simon"; // 정상 동작

// 배열

// var a = new Array();
// a[0] = "dog";
// a[1] = "cat";
// a[2] = "hen";
// console.log(a.length); // 3

// using array literal
// var a = ['dog', 'cat', 'hen'];
// console.log(a.length); // 3

// // ECMAScript 5 adding forEach()
// ['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
//   // currentValue나 array[index]로 뭔가를 수행
//   console.log(currentValue);
// })

// // 배열에 항목을 추가하고 싶다면?
// a.push('hi');

// for (val of a){
//   console.log(val);
// } // element print

// for (val in a){
//   console.log(val);
// }// index print


// function

// rest parameter
// ... -> 함수가 정해지지 않은 수의 매개변수를 배열로 받을 수있음!
// 반드시 마지막에 쓸 것!
// ex) arg1, arg2, ...args

// function avg(...args) {
//   var sum = 0;
//   for (let value of args) {
//       sum += value;
//   }
//   return sum / args.length;
// }

// console.log(avg(2, 3, 4, 5)); // 3.5

// function avgArray(arr) {
//   var sum = 0;
//   for (var i = 0, j = arr.length; i < j; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(avgArray([2, 3, 4, 5])); // 3.5

// // apply의 두 번째 매개변수는 '매개변수들'로 사용하고자 하는 배열
// // 이는 함수가 역시 객체임을 명확히 해주는 사실
// console.log(avg.apply(null, [2,3,4,5]));

// anonymous function
// function() {
//   var sum = 0;
//   for (var i = 0, j = arguments.length; i < j; i++) {
//     sum += arguments[i];
//   }
//   return sum / arguments.length;
// };

// var a = 1;
// var b = 2;

// (function() {
//     var b = 3;
//     a += b;
// })();

// a; // 4
// b; // 2

// 사용자 정의 객체

// 아래와 같은 방식은 전역 이름공간에 관련 함수들이 너무 많음!
// function makePerson(first, last) {
//   return {
//     first: first,
//     last: last
//   }
// }
// function personFullName(person) {
//   return person.first + ' ' + person.last;
// }
// function personFullNameReversed(person) {
//   return person.last + ', ' + person.first
// }

// var s = makePerson("Simon", "Willison");
// personFullName(s); // "Simon Willison"
// personFullNameReversed(s); // "Willison, Simon"

// 위의 코드 개선!
// function makePerson(first, last) {
//   return {
//     first: first,
//     last: last,
//     fullName:function () {
//       return this.first + ' ' + this.last;
//     }
//     ,
//     reverseFullName: function() {
//       return this.last + ' ' + this.first;
//     }
//   }
// }

// var s = makePerson("Simon", "Willison");
// console.log(s.fullName()); // "Simon Willison"
// // 함수는 bracket notation 이용 불가!
// console.log(s.reverseFullName()); // "Willison, Simon"

// dot 표기법
// let obj = {
// 	cat: 'meow',
// 	dog: 'woof'
// };

// let sound = obj.cat; // objectName.propertyName;
// console.log(sound); // meow

// bracket notation
// let obj = {
// 	cat: 'meow',
// 	dog: 'woof'
// };

// let sound = obj['cat']; // objectName.propertyName;
// console.log(sound); // meow

// 위 makePerson을 더 개선!
// this의 이점을 살림.
// function Person(first, last) {
//   this.first = first;
//   this.last = last;
//   this.fullName = function() {
//     return this.first + ' ' + this.last;
//   };
//   this.fullNameReversed = function() {
//     return this.last + ', ' + this.first;
//   };
// }
// var s = new Person('Simon', 'Willison');

// // s가 this로서 활용이 됨!
// console.log(s.fullName());
// console.log(s.fullNameReversed());

// 우리의 person 객체가 점점 개선되고 있지만, 아직 좀 보기 안좋은 면이 있습니다. 
// 매번 person 계열의 객체를 만들 때마다 내부에서 2개의 새로운 함수 객체를 만들고 있습니다. 이 코드가 객체간에 공유된다면 더 낫지 않을까요?

// function personFullName() {
//   return this.first + ' ' + this.last;
// }
// function personFullNameReversed() {
//   return this.last + ', ' + this.first;
// }
// function Person(first, last) {
//   this.first = first;
//   this.last = last;
//   this.fullName = personFullName;
//   this.fullNameReversed = personFullNameReversed;
// }
// 메소드 함수를 한 번만 만들고, 컨스트럭터 내에 해당 메소드를 참조하도록 할당. 이보다 더 개선할 수 있음!

// function Person(first, last){
//   this.first = first;
//   this.last = last;
// }

// Person.prototype.fullName = () =>{
//   return this.first + ' ' + this.last;
// }

// Person.prototype.fullNameReversed = () => {
//   return this.last + ' ' + this.first;
// }

// var s = new Person("Simon", "Willison");
// //s.firstNameCaps(); //TypeError on line 1: s.firstNameCaps is not a function

// // prototype을 이용해 언제든지 메소드 추가 가능!
// Person.prototype.firstNameCaps = function() {
//     return this.first.toUpperCase()
// };
// console.log(s.firstNameCaps()); // "SIMON"

// var a = "hello, world!";

// String.prototype.reversed = function(){
//   var r = "";
//   for (var i = this.length-1 ; i >= 0; i--){
//     r+=this[i];
//   }

//   return r;
// }
// 왜 arrow function으로는 실행이 안될까? 완벽하게 function() {} , ()=>{} 이 두 가지는 동치가 아닌가?
// ************* arrow function은 prototype property가 없음!!! *************
// // String.prototype.reversed = ()=>{
// //   var r = "";
// //   for (var i = this.length-1 ; i >= 0; i--){
// //     r+=this[i];
// //   }

// //   return r;
// // }

// console.log(a.reversed());

// // var s = "Simon";
// // //s.reversed(); // TypeError on line 1: s.reversed is not a function

// // String.prototype.reversed = function() {
// //     var r = "";
// //     for (var i = this.length - 1; i >= 0; i--) {
// //         r += this[i];
// //     }
// //     return r;
// // };

// // console.log(s.reversed()); // nomiS


// Inner function!

// function parentFunc(){
//   var a = 1;
//   function nestedFunc(){
//     var b = 4;
//     return a+b;
//   }
//   return nestedFunc();
// }

// console.log(parentFunc());

// Closure!

function makeAdder(a){
  return function (b) {
    return a+b;
  }
}

var add5 = makeAdder(5);
var add20 = makeAdder(20);

console.log(add5(6));
console.log(add20(7));