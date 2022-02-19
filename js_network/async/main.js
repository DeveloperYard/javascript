'use strict'

// JavaScipt ---> promise for using asynchronous

// Promise

const a = new Promise((resolve, reject)=>{
  //---------------
  // to do
  console.log('to do');
  //resolve('ended!'); // 해야할 일이 전부 끝났다고 호출!
  // 실패하면 rejected call!
  // fulfill, resolve, reject
  setTimeout(()=>{ // 3sec 후에 콜백함수를 실행하겠다는 뜻
    resolve('ended!'); // 코드의 순서와 관계 없이 비동기 방식으로 수행!
  }, 3000);
});

a
.then((v)=>{
  console.log(`then receive: ${v}`); // 3초 후에 실행이 될 것이니까 기다리고 있음!
});

for (let i = 0; i<10; i++){
  console.log(i);
}

