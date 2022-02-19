import fetch from 'node-fetch';
import express from 'express';

'use strict'


// promise를 이용한 비동기 서버 요청
// XMLHttpRequest : event handler --> async processing
// Promise : fetch

// fetch : 서버로부터 웹페이지를 가져오다!
// a는 promise
const app = express();
// 외부 서버에 요청할 때는 무조건 fetch use!
fetch('http://127.0.0.1:5501/_1_hello_world/hello.html') // 반환값이 Promise
.then((response)=>{ // fetch가 성공하여 서버로부터 응답이 제대로 왔을 때 실행
  console.log('서버 응답 도착');
  // response.text(); // 반환값이 문자열이 아님!!! 
  return response.text(); // 또 다른 promise를 반환함
})// promise chaining!
.then((data)=>{
  console.log(`문자열로 바꾼 응답 : ${data}`);
})
.catch((err)=>{
  console.log(`서버 응답 에러 : ${err}`);
});

// for 문을 넣는 이유 : 비동기 요청과 상관 없는 부분이 별도로 실행되는지 확인하기 위해서
for (let i = 0; i < 10; i++){
  console.log(i);
}




app.listen(5501);
