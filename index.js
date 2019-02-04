alert('Hell world!! Im JS. Im Beautiful');

console.log('Hell world!');

//const를 우선으로 쓰고 let은 필요할때만쓰자
let a=10;
let  b=a-5;
a=4;
const c=10;
console.log(b, a);

//String
const name = "hksim";
console.log(name);

//Boolean
const wat = true;

//numher
const num = 666;

//float
const fla = 5.5;

//Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true];
console.log(daysOfWeek);

//Object : Object는 Array와 달리 각 value에 이름을 줄 수 있음
const simInfo = {
  name:"SSING",
  age:100,
  gender:"Male",
  life:true
}
console.log(simInfo);
console.log(simInfo.age);
simInfo.age = 29;
console.log(simInfo.age);
