
// Encapsulation:
// variable with # --private

class Employee {

    name;
    age;
    #salary; //private variable of the class

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
    }



    // public getter and setter

    getSalary() {
        this.#salary = salary;
    }

    setSalary() {
        return this.#salary;
    }
}

//create object of the class and call private variables

let emp = new Employee('Tom', 30, 15000)
console.log(emp.name, emp.age);








class LoginPage{
    #username;
    #password;

    constructor (username, password){
        this.#username = username;
        this.#password = password;
    }

    // create getter for private variables to call them outside the class
    // without getter we cannot access the private property of the class
    getUsername (){
        return this.#username;
    }

    getPassword (){
        return this.#password;
    }

    // suppose you want to change user name and pwd - private properties of the class
    // create setter : to update the credentials

    setUsername (username){
        this.#username = username;
    }
    setPassword (password){
        this.#password = password;
    }

}

let lp = new LoginPage('abc@gmail.com','admin@123');
// console.log(lp.#username); //SyntaxError: Private field '#username' must be declared in an enclosing class

console.log(lp.getUsername(), lp.getPassword());

// print the updated username and password
console.log("updating username and password..........");
lp.setUsername ('shraddha@gmail.com');
lp.setPassword ('pwd');

console.log(lp.getUsername(), lp.getPassword());








class User {

    name;
    #age;
    #salary;

    constructor(name, age, salary){

        this.name = name;

        if (age>=18){
            this.#age = age;
        }

        if (salary >= 10){
            this.#salary = salary;
        }
        else{
            console.log("Age mmust be greater than or equal to 18");
        }
    }

    setAge(age){
        if (age >= 18){
        this.#age = age;}
    }

    getAge (){
        return this.#age;
    }
}


let obj = new User('Tom', 10, 5)
let t1 = obj.getAge();
console.log(t1);//undefined






class Browser {
    launchBrowser(){
        console.log("launching the browser");
        this.#checkOSCompatible();
        this.#checkRAMSize();
        this.#checkUpgrade();
    }

    #checkOSCompatible(){
        console.log("checkOSCompatible");
    }
    
    #checkRAMSize(){
        console.log("checkRAMSize");
    }

    #checkUpgrade(){
        console.log("checkUpgrade");
    }
   
}

let obj = new Browser();
obj.launchBrowser();