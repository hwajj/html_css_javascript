'use strict';
//logical operators: ||, &&, !
const value1 = false;
const value2 = 4<2; //false;

// || : 셋중 하나만 트루면 트루
console.log(`or : ${value1 || value2 || check() }`) //심플한걸 앞에 놓기

function check() {
    for (let i = 0; i<10; i++) {
        //wasting time
        console.log('');
    }
    return true;
}
// && : 셋 다 트루여도 트루
// ~&& ~&& ~ 면 앞에가 false면 뒤엔 계산도 안됨. 심플한것을 앞에 놓기

// == loose equality : 값이 같으면 같다고 본다
// === strict equlity : 타입을 신경써서 안의 값이 같아도 타입이 다르면 다르다
const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); //true
console.log(stringFive === numberFive); //false


//오브젝트는 레퍼런스 형태로 저장된다. (primitive는 값이 저장되고 object는 reference가 저장)

const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //ellie1 ,ellie2는 각각 다른 레퍼런스 저장 ~ 서로 다름
console.log(ellie1 === ellie2); //레퍼런스가 달라서 false
console.log(ellie1 === ellie3); //1과 3은 같은 레퍼런스 //true


//헷갈리는 equility

console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null == undefined); //false

// if
const name = 'coder';
if(name === 'coder') {
    console.log('hello, coder');
} else if (name === 'hwajj') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// Ternary operator : ?
// condition ? value1 : value2
console.log(name === 'coder'? 'yes' : 'no');

//switch(else if 반복되는 경우 사용하면 효과적)
//타입스크립트에서 정해진 타입 검사하거나 이넘 비슷한 아이를 검사할때???
const brower = 'IE';
switch(brower) {
    case 'IE':
        console.log('go away');
        break;
    case 'chrome':
    case 'Firefox':
        console.log('I love you');
        break;
    default:
        console.log('same all');
        break;

}
//while
let i = 3;
while (i>0) {
    console.log(`while: ${i}`);
    i--;
}

//do while (위의 while문 에서 i 가 0된상황에서 do 한번 실행해서 0출력하고 멈춤 )
do {
    console.log(`do while: ${i}`);
    i--;
} while(i >0); 


//for(begin; condition; step)
for(i = 3; i > 0; i--){ //let i = 3 이라고 써서 내부에 변수 선언할수
    console.log(`for: ${i}`)
}

//nested loops
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i} j: ${j}`)
    } 
}    
//  빅오가 n의 2승 ~cpu에 좋지않아 피하는것이 좋다

//break, continue
//continue로 짝수만 출력
for(let i = 0; i <11; i++){
    if(i%2 != 0) {
        continue;
    } 
    console.log(`${i}`);
    
}
 
//break 으로 8까지 출력
for(let i = 0; i <11; i++){
    if (i > 8) {
        break;
    }
    console.log(`${i}`);
}
 
//5강

//1.function
//변수가 복잡하면 기능을 분리할수있는지 본다

function printHello() {
    console.log('hello World');
}
printHello();

//매개변수를 받는게 좋다
function log(message) {
    console.log(message);
}
log('hellohello');

//타입스크립트는 파라미터의 타입 , 리턴타입 정의함
//슥봐도 멀받아 뭘 리턴하는지 확인가능해서 좋다
//타입스크립트 예제
// function log(message: string) : number{
//     console.log(message);
//     return 0;
// }

//2. Parameters

function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
console.log(ellie); //{name : 'ellie'} 출력
changeName(ellie);  //name을 coder로 저장
console.log(ellie); //{name : 'coder'} 출력


//3.Default Parameters (es6에서 추가)
function showMessage(message, from='unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4.Rest Parameters (+es6)
//...가 배열형태로 전달한다는 뜻
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    } 
    for(const arg of args) {
        console.log(arg);
    }
    args.forEach((arg)=> console.log(arg));
}
printAll('dream', 'coding', 'ellie'); 
//인자를 3개 넣었으니 드림,코딩,엘리가 담긴 배열형태로 함수에 전달
//세가지방법 모두 같이 배열

//5. local scope    
let globalMessage='global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
   //console.log(childMessage); //밖에선 안을 볼수 없어 unde fined
}
printMessage();

//6.retrun value

function sum(a,b) {
    return a+b;
}

const result = sum(1,2);

//7. Early return, early exit 리턴을 앞쪽에 써야
//bad , {} 안에서 로직작성하면 가독성 떨어진다
function upgradeUser(user) {
    if(user.point >10) {
        //long upgrade logic
    }
}

//good , 조건이 안맞을때는 빨리 return하고 나와서 로직 쓰는게 맞다
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic
}

//First-class function
//hoisting 이 됨
//변수에 할당, 파라미터로 전달, 리턴

const print = function(){
    console.log('print');
}; 
print();
const printAgain = print; //함수를 변수에 할당
printAgain(); // print출력
const sumAgain = sum;
console.log(sumAgain(1,3));

//2.callback function using function expression
//printYes, printNo함수가 매개변수로 들어감
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'I love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes!');
};

const printNo = function() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('I love you', printYes, printNo);


//Arrow Function
//always anonymous

// const simplePrint = function (){
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
// const add = function (a,b) {
//     return a+b;
// }
// 이것보다 훨씬 갈결하다

const simpleMultify = (a, b) => {
    //do something more
    return a + b;
;}
//블록을 씌우면 return써줘야 

//IIFE Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();