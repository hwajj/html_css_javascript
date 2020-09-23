var div = document.createElement('div');
var form = document.createElement('form');
var input = document.createElement('input');
var button = document.createElement('button');
var result = document.createElement('div');

document.body.append(div);
document.body.append(form);
form.append(input);
form.append(button);
document.body.append(result);



var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
button.textContent = '입력';
div.textContent = `${num1} * ${num2}는 얼마게요? `

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (Number(input.value) === num1 * num2) {
        result.textContent = '딩동댕!!!!'; //textContent와 value를 헷갈리지 말자
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        div.textContent = `${num1} * ${num2}는 얼마게요? `
        input.value = "";
        input.focus();
    } else {
        result.textContent = '땡!!!!'; //textContent와 value를 헷갈리지 말자
        input.value = "";
        input.focus();
    }
})