//자바스크립트는 너무 유동적이어서 위험함
//1.use strict
'use strict'; 

console.log('hello');
let a = 6; //그냥 a=6 하면 선언 안한 상태라 에러 


//2.Variable

//1.function
//변수가 복잡하면 기능을 분리할수있는지 본다
//자바스트립는 펑션을 오브젝트로 쓸수

function printHello() {
    console.log('hello World');
}
printHello();