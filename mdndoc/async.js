// An async function is a function declared with the async keyword, and the await keyword is permitted within in.

function resolveAfter2seconds() {
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall(){
  console.log('calling...');
  const result = await resolveAfter2seconds();
  console.log(result);
}

asyncCall();

// Return value
// A Promise which will be resolved with the value returned by the async function, or rejected with an
// exception thrown from, or uncaught within, the async function.

// Async function can contain zero or more await expressions. Await expressions make promise-returning functions
// behave as through they're synchronous by suspendiing execution until the returned promises is fulfilled or rejected.
// The resolved value of the promise is treated as the return value of the await expression.
// Use of async and await enables the use of ordinary try / catch block asynchronous code.

// If you use await keyword outside of an async function's body, you will get a Syntax Error.

async function foo(){
  return 1;
}

// is similar to

function poo(){
  return Promise.resolve(1);
}

const p = new Promise((res, rej)=>{
  res(1);
})

async function asyncReturn(){
  return p;
}

function basicReturn(){
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // True
console.log(p === asyncReturn()); // False
// The promise will always log pending as long as its results are not resolved yet. You must call 
//.then on the promise to capture the results regardless of the promise state (resolved or still pending):

console.log(basicReturn());
console.log(asyncReturn());

// Until description...