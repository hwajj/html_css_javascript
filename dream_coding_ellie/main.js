//정리에 너무 매몰되지 말기
//자바스크립트는 너무 유동적이어서 위험함
//1.use strict
'use strict';
Array
console.log('hello');
let a = 6; //그냥 a=6 하면 선언 안한 상태라 에러 


//2.Variable, rw(read/write)
let globalName = 'global name'; {
    let name = 'hwajj';
    console.log(name);
    name = 'coder';
    console.log(name);
}
console.log(name); //출력되지않음
//블럭밖에서 안을 들여다보려고 하면 볼 수 없음
//전역변수(global scope)는 어디서나 접근이 가능
//~ 앱실행부터 끝까지 항상 메모리에 탑재되므로 최소한으로 써야
//가능하면 class,함수,if,for loop에서 필요한 만큼만 정의해서 쓰는것이 좋다

//var는 쓰지말고 let을 쓰자
//var hoisting: 어디에 선언했던간에 맨 위로 선언을 끌어올려주기
//(호이스팅을 통해) 선언도 하기 전에 할당해버리는 var는 쓰지말자
//var는 block scope을 무시함. {}안의 지역변수를 {}밖에서 써버릴수있음

const daysInWeek = 7;
const maxNumber = 5;
//3. Constant, r(read)
//값 변경이 불가해서 보안에 좋음
//다양한 쓰레드들이 동시에 변수에서 접근해서 값을 변경시킬 수 있는데, 이때 상수 쓰는게 좋음
//인간 실수를 줄임

//4.데이터 타입
//primitive(더이상 작은 단위로 나뉠수 x) : number, string, boolean, null, undefined
//값 value 자체가 메모리에 저장되고 값이 변할수 없음 Immutable
//object, box containter : single 아이템을 단위로 묶어 box로 관리할수있게 하는것
//오브젝트는 너무 커서 메모리에 한번이 올라갈 수 없음. 레퍼런스를 통해 오브젝트가 담겨있는 메모리를 가리키게됨
// 오브젝트는 value대신 reference가 저장. Mutable
//자바스트립는 펑션도 데이터타입중 하나. 펑션도 변수에 할당,인자로도 전달,리턴타입으로 리턴가능 ~일급객체

//c언어는 low level function. 변수 할당하며 메모리 관리 가능. 얼마나 큰 데이터를 담을지에 따라 
//js는 그냥 number , 그리고 타입을 정하지 않아도 됨

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
//나중에 DOM요소를 이용할때 연산결과가 유효한 값인지 확인한뒤 연산해야
//bigInt
const bigInt = 1234123412341234123412341234n; //큰 범위의 숫자는 숫자뒤에 n
//string
const char = 'c'; //한개글자도 string
const brendan = 'brendan';
const greeting = 'hello' + brendan; //string을 변수 brendan과 붙일수
console.log(`value: ${greeting}!, type : type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //백틱 ₩사인을 통해  + 기호 없이 만들수
console.log(`value: ${helloBob},  type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value

const canRead = true;
const test = 3 < 1;


//null
let nothing = null;

//undefined
let x = undefined;
let y //값 할당 안해도 undefined

//symbol, create unique identifiers for objects

//주어지는 스트링에 상관없이 고유한 심볼을 만듦
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false 

//Symbol .for주어진 스트링에 맞는 심볼
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`) //description으로 스트링으로 변환해서 출력해야

//5. Dynamic typing: dynamically typed languege 타입이 다이나믹해 
let text = 'hello'; //타입이 스트링
console.log(text.charAt(0)); //h
text = 1; //타입이 number
console.log(text.charAt(0)); //error ~ 타입스크립트가 등장
//but js는 브라우저가 이해할수~ 실시간으로 볼수...타입스크립트는 브라우저가 이해할수있는 js로 컴파일링되어야 
text = '7' + 5; //5를 string으로 여기고 75 가 됨
text = '8' / '2'; //스트링 안의 것을 숫자로 인지하고 4가 됨


//object 
const ellie = {
    name: 'ellie',
    age: 20
};
//ellie는 const여서 메모리의 포인터가 다른오브젝트로 할당 불가,
//object안의 name, age 변수들은 각각 포인트가 가리키는 메모리에 다른값으로 할당 가능
//ellie는 다른오브젝트로 변환불가, name age는 변환가능
ellie.age = 21; //로 변환가능