'use strict';

// js의 자유분방한 면이 문제가 되어서 나온 언어
// -> typescript!, 변수의 타입을 명확히 지정하도록 한 것
// 정제된 고급 개발을 통해 타입이 필요!

// basical variable declare
// let a = 1;
// let b = 'hello';

// python -> non-type language!
// 요즘은 함수를 만들때도 명확히 타입을 지정하도록 바뀌어 가고 있음
// 서버로부터 응답이 왔을 때 실행할 이벤트 핸들러를 지정해 응답을 처리

// 비동기식 요청 -> 코드가 쓰여진 순서와는 상관없이 진행되는 방식
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/_1_hello_world/hello.html', true); // 마지막 인수 -> 비동기식인지 물어보는 것
request.send(null);
// 비동기 방식
//request.onload : 요청에 대한 응답이 로딩될 때
// request.onload = ()=>{
//   // 보내기 전에 미리 설정! 실행되는 순서에 유의
//   if (request.status === 200){
//     console.log('응답이 제대로 왔음');
//     console.log(request.responseText);
//   } 
//   else{
//     console.log('응답이 제대로 오지 않았음');
//   } 
// };
// request.open('GET', 'http://localhost:3000/_1_hello_world/hello.html', true); // 마지막 인수 -> 비동기식인지 물어보는 것
// request.send(null);

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }

// if (request.status === 200){
//   console.log(request.responseText);
// }

// 동기식 요청 -> 코드가 쓰여진 순서로 실행

// let request = new XMLHttpRequest(); // class
// request.open('GET', 'http://localhost:3000/_1_hello_world/hello.html', false); // http protocol command, using loop back!
// // 5501: port number
// // host 내에서 프로세스를 구분하기 위해! 한 프로세스는 하나의 포트 번호를 받음
// request.send(null);

// // status, statusCode, 
// if (request.status === 200){
//   console.log(request.responseText);
// }

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }
// 서버로부터 받아오는 부분과는 상관없음, 그러나 이 부분이 끝날때까지 기다리고 있음

