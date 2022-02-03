// sort -> 값들 사이의 순서를 정해주는 것 즉 정렬!

const c = [45, 33, 22, 11, 7, 99];
console.log('c is : '+c);

// 요소 두 개를 뽑아 콜백함수 즉 규칙으로 판단!
// 매핑과는 성격이 다름! 원래 배열에 대해서 진행됨, 즉 입력 배열에 그대로 덮어씀!
// const sc = c.slice().sort((a, b)=>{
//   if (a < b) return -1; // negative
//   else if (a >b) return 1; // positive, b를 앞으로 땡겨 옴!
//   else return 0; // zero
// });

const sc = c.slice().sort((a, b)=> a-b ); // 매우 간단히 정렬함수 구현!, b-a 리턴 시 내림차순!

console.log(c);
console.log(sc);

// 4. 복사본 만들어서 정렬 -> slice(start_idx, end_idx); end index isn't included!
// [1, 2, 3]
// slice(1) -> [2, 3]
// slice(0, 1) -> [1]

// const a = [1, 2, 3];
// console.log(a);
// console.log(a.slice(0, 1));
// console.log(a.slice(0, 0));
// console.log(a.slice(1, 3));
// console.log(a.slice(2, 3));

// a.splice() 
//console.log(a.splice(0, 1)); // -> a 원본이 달라짐!
//const cp_c = c.slice() // 새로운 배열이 똑같이 만들어져 복사됨!


// sort => 구 배열에 바로 정렬을 진행시키므로 slice를 이용해 복사본을 만들어 진행!