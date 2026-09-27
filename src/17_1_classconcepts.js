
export class Employee {

    //class variables: global variables
    name;
    age;
    salary;
    isActive;

    // constructor: help us to create the object and init the global variables
    // only one constructor is allowed
    constructor(name, age, salary, isActive) {
        // this.global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }


    // actions : methods
    coding() {
        console.log(this.name, ' is coding...simple function no return');
    }

    reading() {
        console.log(this.name + ' is reading....simple function having return');
        return 100;
    }

    running = function () {
        console.log(this.name + ' is running....anonymous function');
    }

    printing = () => {
        console.log(this.name + ' is printing...arrow function');
    }

    add = (a, b) => { //arrow function with parameters
        return a + b;
    }

};

// create the object of the class using new keyword
// never create object of the class inside the class
// create the object----> constructor will be called

let emp = new Employee('Shraddha', '36','23.33',true); //reference variable emp will be stored in stack memory
console.log(emp.name, emp.age, emp.salary, emp.isActive);
emp.coding();
emp.running();
let t1 = emp.add(11,200);
console.log(t1);


// console.log(emp);
console.log('--------------------------------------');
let emp1 = new Employee();
// console.log(emp1.name, emp1.age, emp1.salary, emp1.isActive);///undefined
console.log('--------------------------------------');


// Another object of the class

let emp2 = new Employee ('Tom',30)
console.log(emp2.name, emp2.age, emp2.isActive, emp2.salary);

console.log('--------------------------------------');


let emp3 = new Employee('Peter', '36','23.33',false);
emp3 = null;

// console.log(emp3.name);