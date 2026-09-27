// static in classes

class Employee {

    static compName = 'Google';


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

    static billing(){
        console.log('Static: billing method');

    }
}

let emp = new Employee ('Tom','30','12.33',true)
console.log(emp.name,emp.age, emp.salary,emp.isActive);

console.log(Employee.compName);//static property should be called through class name only

let emp2 = new Employee ('Ravi','30','12.33',true)
let emp3 = new Employee ('Peter','30','12.33',true) 

Employee.compName = 'IBM'
console.log(Employee.compName);//static variable can be updated

Employee.billing();//static method also will be called through class name
