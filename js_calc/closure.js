const numFunc = (n) => { // n : string '0', '1', ... any number is able to argument
  // 함수를 만들어서 리턴한다. 진정한 고차 함수! higher order function
  // 숫자키를 받아다가 문자열을 붙여주는 함수를 반환해줌!

  return () => { // 여기 인수에 n이 없는데 갖다 씀! -> 클로저
    // 여기서는 n을 전역변수 쓰듯이!
    if (op_input === null) {
      num_first += n; // n은 상위함수의 인수인데 어떻게 써?
      cp_input_num.value = num_first;
    }
    else {
      num_second += n;
      cp_input_num.value = num_second;
    }
  };
};
// 리턴되는 함수가 쳐다볼 수 있는 범위가 상위 함수까지로 확장됨!
// 


// closure : 1. 함수, 2. 리턴되는 함수가 쳐다볼 수 있는 변수의 범위


// until 이벤트 강의 9:50까지!