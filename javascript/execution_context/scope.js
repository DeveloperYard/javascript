// ES6부터 함수 스코프, 블록 스코프라는 용어를 사용
// 블록 스코프는 기존의 var으로는 안되고, 오직 새로 생긴 let, const, class, strict mode에서의
// 함수 선언 등에 대해서만 범위로서의 역할을 수행

// function a() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(`final : ${i}`);
// }
// // 0..4 출력 후 final : 5 까지 출력!

// function a() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(`final : ${i}`);
// }
// // 0..4 출력 후 해당 블록 스코프 바깥에서 i를 참조하였으므로 i is not defined라는 ReferenceError가 발생!
// a();

// scope chain
var a = 1;
var outer = function () {
  var inner = function () {
    // LexicalEnvironmnet에 a 식별자가 존재하므로 스코프 체인 검색을 더 진행하지 않고 LexicalEnvironment of inner scope에 a 식별자가 존재하므로
    // 스코프 체인 검색을 더 진행하지 않고 즉시 inner LexicalEnvironmnet 상의 a를 반환하게 됨.
    // 즉, inner 함수 내부에서 a 변수를 선언했기 때문에 전역 공간에서 선언한 동일한 이름의 a 변수에는 접근할 수 없는 셈
    // 이를 변수 은닉화, variable shadowing이라고 함
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a);
};

outer();
console.log(a);