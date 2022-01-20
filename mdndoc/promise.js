// promise엔 세 가지 상태가 존재
// pending : initial state, neither fulfilled nor rejected
// fulfilled : meaning that the operation was completely successfully
// rejected : meaning that the operation failed

// then, catch methods return promises, they can be chained.

// Chained Promises

const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('foo');
  }, 300);
});

myPromise
.then(handleResolvedA, handleRejectedA)
.then(handleResolvedB, handleRejectedB)
.then(handleResolvedC, handleRejectedC)

// then() has consequences further down the promise chain.
// catch is used to catch error.

myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);

// ..until Incumbent settings object tracking part

// realm : 영역, 범위

// incumbent : 재임자, (의무의 일부로) 필요한(해야 하는)


