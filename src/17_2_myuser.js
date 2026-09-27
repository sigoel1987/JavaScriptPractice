class User  {

    //if we don't define global variables, then they will be called through constructor
    constructor(name, age, salary, isActive) {
        // this.global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }
}

// let objectName = new className()

let u1 = new User ('Tom','30','12.33',true)
console.log(u1.name, u1.age);
console.log(u1);

console.log('______________________________________');
class Person {
    // default constructor : having 0 parameters
    constructor(){
        console.log('Default constructor......');
    }

    constructor(name){ //SyntaxError: A class may only have one constructor 
        console.log('One Parameter constructor......', name);
    }
}
let p1 = new Person('naveen')
