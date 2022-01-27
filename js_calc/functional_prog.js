// 함수형 프로그래밍 -> 프로그램 작성 시 함수를 인수라던지 리턴값으로 돌려줄 수 있는 언어를 이용해 짜는 것 , function as a argument or return value
// 함수를 원시타입처럼 사용!
// ex)
// return function
// higher order function - 모든 함수가 이것은 아닐 수도 있음! 아래 두 가지가 higher order function, 고차 함수!
function funcA(k) {
  return () => { console.log('hello'); }; // 함수 반환
}
// argument is funcK
function funcB(k, funcK) { // 함수를 argument로 받는 함수
  funcK(k);
}
funcB(3, (v) => { console.log(v + '를 입력하셨습니다.') });