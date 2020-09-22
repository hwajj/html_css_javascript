console.log('hi');
//끝말잇기
//별찍기
for (var star = 1; star <= 9; star += 2) {
    console.log(" ".repeat((9 - star) / 2) + "*".repeat(star) + " ".repeat((9 - star) / 2));
}
for (var star = 9; star >= 1; star -= 2) {
    console.log(" ".repeat((9 - star) / 2) + "*".repeat(star) + " ".repeat((9 - star) / 2));
}

for (let star = 4; star >= -4; star -= 2) {
    console.log(" ".repeat(Math.abs(star) / 2) + "*".repeat(5 - Math.abs(star) + " ".repeat(Math.abs(star) / 2)));
    //  1. = 5 - 4 의 절대값
    //  3. = 5 - 2의 절대값
    //  5  = 5 - 0의 절대값
    //  3. = 5 - -2의 절대값
    //  1. = 5 - -4의 절대값 

}



let word = '화정';
// while(true) {
//     let nextWord = prompt(word);
//     if(word[word.length-1] === nextWord[0]) {
//         word = nextWord;
//     } else if( nextWord == 0) {
//             break;

//     } else {
//         alert("끝말잇기란 말이예요!");
//     }

// }

var 네로 = {
    이름: '네로',
    키: 160,
    몸무게: 52,
}
console.log(네로);

console.log(네로.이름);
//console.log(네로[이름]); //undefined

//대괄호 안에는 변수를 쓸수 있지만, 
//점 뒤에는 변수를 쓸 수 없다
//null 있어야하는값인데 내가 설정안한것
//undefined 아예 없는 속성
// var ing = true;
// while(ing) {
//     var num1 = Math.ceil(Math.random()*9);
//     var num2 = Math.ceil(Math.random()*9);
//     var result = num1 * num2;
//     var flag = true;
//     while(flag){
//         var answer = prompt(String(num1) + '곱하기' + String(num2) + '는?');

//         if(answer == 0 ) {
//             ing = false;
//             flag = false;
//         } else if(result ===  Number(answer)) {
//             alert('딩동댕');
//             flag = false;
//         } else {
//             alert('땡');
//         }
//     }
// }

var bodyy = document.body;
var 단어 = document.createElement('div');
단어.textContent = '화정';
document.body.append(단어);
/*엔터를 쳐도 입력이 되게하려면
form을 넣어준것처럼 해야한다
form 을 HTML안에 넣어주는 코드 
 <form>
<input>
<button>등록</button>
   </form>
*/

var 폼 = document.createElement('form'); //html안에 form넣고
document.body.append(폼); //body밑에 넣는다
var 입력창 = document.createElement('input'); //html안에 input넣고
폼.append(입력창); //입력창은 form 밑에 넣는다
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
폼.append(버튼); //폼안에 버튼
var 결과창 = document.createElement('div');
document.body.append(결과창);

//폼 안의 인풋에서 엔터로 입력되게하는것이 submit
폼.addEventListener('submit', function 콜백함수(이벤트) { //이벤트를 매개변수로 
    //엔터를 쳤을때 새로고침이 되는것을 방지
    이벤트.preventDefault(); //submit의 기본동작인 새로고침 방지
    if (단어.textContent[단어.textContent.length - 1] === 입력창.value[0]) {
        결과창.textContent = '딩동댕'; //맞게쓰면 딩동댕
        단어.textContent = 입력창.value; //맞은 단어를 위로 올림
        입력창.value = ""; //글씨를 삭제
        입력창.focus(); //입력란에 클릭안해도 커서가 깜빡이도록
    } else {
        결과창.textContent = '땡';
        입력창.value = ""; //글씨를 삭제
        입력창.focus(); //입력란에 클릭안해도 커서가 깜빡이도록

    }
}); //function 이 콜백함수


var br = document.createElement('br');
bodyy.append(br);
var 구구단 = document.createElement('div');
var 숫자1 = Math.ceil(Math.random() * 9);
var 숫자2 = Math.ceil(Math.random() * 9);


구구단.textContent = String(숫자1) + '곱하기' + String(숫자2) + '는?';


document.body.append(구구단);

var 구구단폼 = document.createElement('form'); //html안에 form넣고
구구단.append(구구단폼); //body밑에 넣는다
var 구구단정답입력창 = document.createElement('input'); //html안에 input넣고
// 구구단정답입력창.type = 'number';
구구단폼.append(구구단정답입력창); //입력창은 form 밑에 넣는다
var 구구단정답버튼 = document.createElement('button');
구구단정답버튼.textContent = '정답입력';
구구단폼.append(구구단정답버튼); //폼안에 버튼
var 구구단결과 = document.createElement('div');
구구단.append(구구단결과);


구구단폼.addEventListener('submit', function 콜백함수(이벤트) { //이벤트를 매개변수로 
    //엔터를 쳤을때 새로고침이 되는것을 방지
    이벤트.preventDefault(); //submit의 기본동작인 새로고침 방지
    if (숫자1 * 숫자2 === Number(구구단정답입력창.value)) {
        구구단결과.textContent = '딩동댕'; //맞게쓰면 딩동댕
        구구단정답입력창.value = ""; //글씨를 삭제
        구구단정답입력창.focus(); //입력란에 클릭안해도 커서가 깜빡이도록
    } else {
        구구단결과.textContent = '땡';
        구구단정답입력창.value = ""; //글씨를 삭제
        구구단정답입력창.focus(); //입력란에 클릭안해도 커서가 깜빡이도록

    }
});