'use strict';



/*1.state
pending -> fulfilled or rejected

1.Producer 

*/
const promise = new Promise((resolve, reject) => {
    //네트워크통신, 파일등을 비동기적으로 처리
    console.log('doing something..');
    setTimeout(() => { //resolve('ellie');        
        reject(new Error('no network'));
    }, 2000);
});
/*promise 만드는 순간 executer가 실행됨
사용자 요구 있을때만 네트워크 요청 해야하는데 promise쓰면 
불필요한 네트워크 통신 있게 됨
*/


/*2.Consumers : then, catch, finally 이용해 값 받아올수
 */

promise.then(value => { //promise가 정상적으로 수행된다면 resolve를 통해 전달되어온 값을
        console.log(value); //값을 콘솔에 출력한다
    })
    .catch(error => {
        console.log(error);
    }) //promise ~ then호출~ promise 리턴~ 리턴된 promise 에 catch등록하는것
    .finally(() => {
        console.log('finalliy');
    }); //finally 는 성공 실패에 상관없이 무조건 수행됨

//3. Promise chaining 

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})
//then은 바로 전달하거나 비동기적으로 전달할수
fetchNumber
    .then(num => num * 2) //1*2 = 2
    .then(num => num * 3) //2*3 = 6
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000); //6-1

        });
    })
    .then(num => console.log(num)); //5추력

//4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('HEN'), 1000);
});
// const getEgg = hen => new Promise ((resolve,reject )=>{
//     setTimeout(()=> resolve(`${hen}=>  EGG`),1000);
// });
const getEgg = hen => new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error ! ${hen} =>  EGG`)), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> EGGFRIES`), 1000);
});

// getHen() 
// .then(result => getEgg(result))
// .then(result => cook(result))
// .then(r => console.log(r));
//위에 코드를 깔끔하게
getHen()
    .then(getEgg)
    .catch(error => {
        return 'bread';
    }) //에러처리 ,계란받아오는것에 문제생겨도 빵을 리턴하여 전달
    .then(cook)
    .then(console.log)
    .catch(console.log); //발생한 에러를 catch



const newbee = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('newbee dev'), 100);
});


newbee().then(console.log);