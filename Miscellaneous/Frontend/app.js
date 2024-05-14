let arr = [1,2,3,4];
arr.say = ()=>{
    console.log("hello india");
};
function hello(){
    console.log('help');
}
// function personMaker(name,age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi,my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// function Person(name,age)
// {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = ()=>{console.log(`Hi,my name is ${this.name}`)};
// let p1 = new Person('adam',25);
// let p2 = new Person('eve',25);

// class in java script

// class person {
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }
//     talk()
//     {
//         console.log(`Hi,this is me ${this.name}`);
//         console.log(this);
//     }
// }
// let p1 = new person('ibrahim',25);

// inheritance example

class Person {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    talk()
    {
        console.log(`Hi,this is me ${this.name}`);
        console.log(this);
    }
}
class Student extends Person {
    constructor(name,age,marks)
    {
        super(name,age);
        this.marks = marks;       
    }
}
let stud = new Student('ibrahim',25,98);

class Mammal {
    constructor(name)
    {
        this.name = name;
        this.type = "Warm-Blooded";
    }
    eat()
    {
        console.log("I am eating");
    }
}

class dog extends Mammal {
    constructor(name)
    {
        super(name);
    }
    bark()
    {
        console.log('Woff...');
    }
}
class cat extends Mammal {
    constructor(name)
    {
        super(name);
    }
    meow()
    {
        console.log('Meow...');
    }
}