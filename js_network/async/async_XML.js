'use strict'

// JavaScipt ---> promise for using asynchronous

let request = new XMLHttpRequest();
request.open('GET', 'http://127.0.0.1:3000/_1_hello_world/hello.html', false);
request.send(null);
const a = new Promise((resolve, reject)=>{
  
});

a
.then((v)=>{
  console.log(`then receive: ${v}`); // 3초 후에 실행이 될 것이니까 기다리고 있음!
});

