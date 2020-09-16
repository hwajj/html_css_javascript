//JS object Notation

//1. stringfy objet를 JSON으로
let json = JSON.stringify(true);
console.log; //true

json = JSON.stringify(['apple','banana']);
console.log(json); //["apple","banana"] json의 양식으로 

//2.JSON to Object

const rabbit = {
    name: 'tori',
    color:'white',
    size: null,
    birthDate : new Date(),
    jump: () => {
        console.log(`${name} can jump`);
    },

};
console.log(rabbit);
//{name: "tori", color: "white", size: null,
// birthDate: Tue Sep 15 2020 01:58:43 GMT+0900 (대한민국 표준시), 
//jump: ƒ}

json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","color":"white",
// "size":null,
// "birthDate":"2020-09-14T16:59:48.889Z"}
//json으로 전환되면서 birthDate가 String 형태로.


json = JSON.stringify(rabbit, ['name']);//내가 원하는 property만 ..
console.log(json); //{"name":"tori"}

//replacer로 키와 밸류대신에 콜백함수를
json = JSON.stringify(rabbit, (key,value) =>{
    console.log(`key: ${key} , value : ${value}`)
    return value ;

});
//최상의 키와 밸류는 오브재트

json = JSON.stringify(rabbit, (key,value) =>{
    console.log(`key: ${key} , value : ${value}`)
    return key==='name'? 'ellie': value ;

});
//이름을 엘리로 수정가능~ 세밀하게 통제간으


//2. JSON to Object

json = JSON.stringify(rabbit); 
const obj = JSON.parse(json);

//이미 제이슨으로 만들어져서 birthDate가 String인것을
//다시 오브젝트로 만들어도 birthDate는 String
console.log(obj);
rabbit.jump(); //can jump
//rabbit은 함수있지만
//json으로 바꿀땐 함수 포함되지 않았으므로
//object로 전환후에도 함수는 출력되지 않음
//obj.jump(); //에러

console.log(rabbit.birthDate.getDate()); //오늘날짜출력
//console.log(obj.birthDate.getDate()); //에러
//이때의 obj.birthDate는 String이 할당된 상태이고 오브젝트가 아님
//그래서 String 그자체이므로 날짜가 출력안됨
console.log(obj.birthDate); // 2020-09-14T17:08:23.555Z

const obj2 = JSON.parse(json, (key,value)=>{
    return key ==='birthDate'? new Date(value): value;

});
console.log(obj2.birthDate.getDate());

/*유용한 웹사이트
JSON DIff.com
JSON Beautifier
JSON parser
JSON Validator
*/