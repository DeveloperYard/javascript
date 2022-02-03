const a = Array(10).fill(0);
// 초기화 되지 않은 채우는 메서드


console.log(a);

const b = a.map((_elem, _idx)=>{ // 지역변수이므로 _를 붙임!
  return _idx+1;
});
console.log(a); // a는 그대로!
console.log(b);