'use strict';

//Javascript is sychronous
//정해진순서에 맞게 실행되는것

console.log('1');
setTimeout(() => console.log('2'),1000);                    //브라우저API니까 나중에 실행하도록 함
console.log('3');           

//1,3,2~ 비동기적으로 실행


function printImmediately(print) {
    print();
}

printImmediately(()=> console.log('hello')); 

// 1,3,hello,2


//비동기 콜백

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}//전달받은 함수와 딜레이하고싶은 시간을 받아서 setTimeout에 넣음

printWithDelay(()=> console.log('async callback'), 2000);

// 1,3,hello,2(2초뒤),async callback

class UserStorage{
    loginUser(id,password,onSuccess,onError) {
        setTimeout(()=> {
            if( 
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user,onSuccess , onError) {
        setTimeout(()=>{
            if (user === 'ellie') {
                onSuccess({name : 'ellie', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }, 
            error=>{console.log(error);} );

    },
    error => {console.log(error);}
);