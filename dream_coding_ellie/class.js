'use strict';
//1. 클래스 선언
class Person{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} : hello`);
    }
}

const ellie = new Person ('ellie', 20);
console.log(ellie.name); //ellie
ellie.speak(); //ellie: hello!

//2.getter setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value< 0? 0 : value;

    }
}

const user1 = new User('Steve', 'Job' -1);
console.log(user1.age);


//3. Field (public, private) 

class Experiment{
    publicField = 2;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
//console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

//5.Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log()
    }
    getArea() {
        return (this.width * this.height)/2;
    }

}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true
console.log(triangle.toString());


