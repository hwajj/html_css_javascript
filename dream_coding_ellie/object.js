const obj1 = {} //object literal syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const st = {name: 'ellie', age:4};
print(st);
//인자가 많아지면 추가해야할것들이 많아져서 오브젝트를 쓴다
/*이렇게 오브젝트를 만들면 
const name = 'ellie';
const age = 5;
function print(name, age) {
    console.log(name); //'ellie
    console.log(age);  //5
}
print(name,age);
이렇게 할필요 없이
print(person)으로 쉽게 호출하S고,
오브젝트의 요소들도 쉽게 관리할수 있다.

*/

st.hasJob=true;
console.log(st.hasJob);
delete st.hasJob;
//2.Computed properites

console.log(st.name);    
//.key : 정확히 이 key에 해당하는 값 받아오고싶을때
console.log(st['name']); 
//정확히 어떤 키가 필요한지 모를때 ?런타임시 배열로 가져올수있음
st['hasJob']=true;       //배열로 지정할수도있음
console.log(st.hasJob);



/*function printVaule(obj,key) {
    console.log(obj.key);
}
printVaule(st, 'name'); //undefined
function printValue의 obj에는 key에 관한 value가 없으므로 undefined뜸
*/
function printVaule(obj,key) {
    console.log(obj[key]);
}
// 펑션 안에는 key에 상응하는 값이 없지만
//문서 전체안에는 st의 name 있으므로..
printVaule(st, 'name'); 

function printDotValue(obj,key) {
    obj ={name: key};
    console.log(obj.name);
}

printDotValue(st,'hjhj')

//3.Property value shorthand

const person1 = {name:'bob', age:2};
const person2 = {name:'steve', age:3};
const person3 = {name:'dave ', age:4};
console.log(person1);
console.log(person2);
console.log(person3);

/*키와 밸류의 이름 동일하면 생략가능
function makePerson (name, age) {
    return {name:name, age:age}
}
*/
//makePerson 이 오브젝트를 생성하는 클래스역할
function makePerson (name, age) {
    return {name, age}
}
const person4 = makePerson('jane',3);
console.log(person4);


//4.Constructor Function
//순수하게 오브젝트 만드는 함수는 대문자, return대신 this,,

function Person(name,age){
    //this ={}
    this.name = name;
    this.age = age;
}
const person5 = new Person('amy',5);
console.log(person5);

//5.in operator : property existence check(key in obj)
//해당하는 오브젝트 안에 키가 있는지 없는지
console.log('name' in st); //true
console.log('age' in person5); //true
console.log('address' in person5); //false
console.log(person5.address); //undefined

//6. for ..in  vs for ..of
console.clear(); //이전의 콘솔삭제
//for ..in
for(key in st) {
    console.log(key);
}

//for ..of
const array = [1,2,4,5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}//출력되나 귀찮음

for(value of array) {
    console.log(value);
}

//7.fun cloning
//Object.assign(dest, [obj1,obj2,obj3...])
const user = {name:'ellie', age:'20'};
const user2 = user;