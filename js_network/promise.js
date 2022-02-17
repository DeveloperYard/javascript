'use strict';

// js의 자유분방한 면이 문제가 되어서 나온 언어
// -> typescript!, 변수의 타입을 명확히 지정하도록 한 것
// 정제된 고급 개발을 통해 타입이 필요!

// basical variable declare
// let a = 1;
// let b = 'hello';

// python -> non-type language!
// 요즘은 함수를 만들때도 명확히 타입을 지정하도록 바뀌어 가고 있음
let request = new XMLHttpRequest(); // class
request.open('GET', 'http://localhost:3000/_1_hello_world/hello.html', false); // http protocol command, using loop back!
// 5501: port number
// host 내에서 프로세스를 구분하기 위해! 한 프로세스는 하나의 포트 번호를 받음
request.send(null);

// status, statusCode, 
if (request.status === 200){
  console.log(request.responseText);
}

for(let i = 0; i < 10; i++){
  console.log(i);
}
