var body = document.body;
//numList에서 numArray만드는 코드
var numList;
var numArray;

function selectNum() {
    numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numArray = [];
    for (let index = 0; index < 4; index++) {
        var selectedNum = numList.splice(Math.random() * (numList.length), 1);
        //splice자체가 배열을 반환하므로 이걸 그대로 넣으면 numArray는 배열을 담은 배열이 되어버린다
        numArray.push(selectedNum[0]); //selectedNum은 numArray에 넣기위해 잠깐 사용하는 변수니까 지역변수로 for안에 넣음
    }
}
selectNum();
console.log('랜덤뽑기로 만든 정답 numArray ' + numArray);

var result = document.createElement('h1');
var form = document.createElement('form');
var input = document.createElement('input');
input.type = 'text';
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력';


document.body.append(result);
document.body.append(form);
form.append(input);
form.append(button);

result.textContent = '게임이 시작됩니다.';
var wrongTimes = 0;
//이벤트리스너로 반복문 대체
form.addEventListener('submit', function async (e) {
    e.preventDefault();
    var answer = input.value;
    console.log("내가 입력한답 " + answer);

    if (answer === numArray.join('')) { //numArray 배열을 string으로, answer는 string(통으로 비교가능)
        result.textContent = '홈런';
        //홈런을 하면 처음부터 다시 시작해야하니까 numList에서 numArray만드는 코드 중복시킴
        input.value = "";
        input.focus();
        selectNum();
        wrongTimes = 0;
    } else { //답이틀리면
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongTimes += 1;
        if (wrongTimes > 10) { //틀린횟수 10번 넘긴경우

            result.textContent = '10번 넘게 틀려서 실패, 답은 ' + numArray.join() + '이었습니다. 바로 다음게임이 시작됩니다.';
            input.value = "";
            input.focus();
            selectNum();
            wrongTimes = 0;
        } else {
            console.log('답이 틀리면');
            for (let i = 0; i < 4; i++) {
                if (numArray[i] === Number(answerArray[i])) {
                    console.log('같은자리?');
                    strike += 1;
                } else if (numArray.indexOf(Number(answerArray[i])) > -1) {
                    ball += 1;
                    console.log(i + '번째에 겹치는 숫자?');
                }
            }

            result.textContent = wrongTimes + '번째 게임 ' + strike + '스트라이크, ' + ball + '볼 입니다. 남은 기회는 ' + (10 - wrongTimes) + '번';
            input.value = "";
            input.focus();
        }
    }

})