// Q1. make a string out of an array

    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result); 


// Q2. make an array out of a string
{

    const fruits = 'apple, banana, orange';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    console.clear();
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // 5,4,3,2,1
    console.log(array); //5,4,3,2,1

}
 
// Q4. make new array without the first two elements
{
    //어레이자체를 변형하는 스플라이스 사용하면 안된다,
    //스플라이스는 배열을 건들고, 슬라이스는 배열을 놔두고 꺼내오기..
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0,2); //배열 자체에서 삭제해서 슬라이스해서 새로 만든다
    console.log(array); //3,4,5
    console.log(result);//1,2
    

}

{
    //앞의 2개는 제거한 새로운 배열을 만들어라~
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5); //배열은 그대로 놔두고 만든다
    console.log(array); //1,2,3,4,5
    console.log(result);//3,4,5
    
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 90),
]; 
{
    // const result = students.find(function(student,index) {return student.score===90;
    // });
    const result = students.find((student) =>student.score===90);
    console.log(result);
    // Q5. find a student with the score 90
}
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    }
// Q6. make an array of enrolled students
{
const result = students.map((student)=> student.score);
console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{

    const result = students.some((student)=> student.score<80);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.every((student)=> student.score <100);
    console.log(result);
     
}

// Q9. compute students' average score
//reduce : 누적할때 쓰는것
{
    const result = students.reduce((pre,cur) => pre + cur.score,0);
    console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{

    const result = students
    .map((student) => student.score)
    .join();
    console.log(result);  //'45, 80, 90, 66, 88'
}

{
//50점이상
    const result = students
    .map((student) => student.score)
    .filter((score) => score>=50) 
    .join();
    console.log(result);  //'80, 90, 66, 88'
}


 
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{

    const result = students
    .map((student)=> student.score)
    .sort((a,b) => a-b) //b가 a 보다 크면 -값이니까 우리가 원하는대로 뒤로갈수록 값이 커지게 sorting
    .join(); //sorting 된것을 스트링으로 만들어서 출력
    console.log(result); 
}

const arr = [0,3,4,6];

let squaredArr = arr.map(function(element, index, array){
    console.log(array+" 의 "+index +"번째 인자"+ `${element}`);
    return element * element;
});
/*
0,1,2,3의 0번째 인자 : 0
0,1,2,3의 1번째 인자 : 1
0,1,2,3의 2번째 인자 : 2
0,1,2,3의 3번째 인자 : 3
*/

console.log(squaredArr); // [ 0, 1, 4, 9 ]

window.addEventListener('keydown',function(e){
    console.log(e.keyCode);
})


console.clear();

function myFunction() {
    document.querySelector("h2[class=example2]").style.backgroundColor = "red";
    let h2 = document.querySelector('h2');
    h2.innerHTML = '바뀜';
    h2.className='example3';
    console.log(h2);
    document.querySelector("h2[class=example3]").style.backgroundColor = "blue";
  }