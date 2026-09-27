let emp = {
    name : 'Shree',
    age : 30,
    salary : 12.33,
    coding() {
        console.log(this.name + ' is coding');
    },
    testing(){
        console.log(emp.name + ' is testing');
    },
    print(x,y){
        return x + y;
    },

    data : function (){
        console.log('anonymous function', this.name);
    },

    arrow : () => {
        console.log('arrow function', emp.name);
        // console.log('arrow function', this.name); //error - with arrow function this keyword cannot be used

    }
}

console.log(emp.name, emp.age, emp.salary);
emp.coding();
emp.testing();
let x1 = emp.print(20, 30);
console.log(x1);

emp.data();
emp.arrow();

//Use case in POM

let loginPage = {
    username : '#username',
    password: '#password',
    loginBtn: '#loginBtn',
    doLogin(appUser, appPwd){

    },
    forgotPwd(){

    },
    getFooters(){

    }
}


//object destructuring

let user = {
    name : 'Tom',
    age: 30,
    address: {
        flat: 'D',
        apartment: 11,
        city: 'Mumbai',
        location: {
            lat: 12.33,
            long: 45.66
        }
    }
}

// let {name, age, address:{unit,city}} = user ;//how to read: give me only name from user
// console.log(name, age, unit, city);

let {name, address: {location:{lat, long}}, address:{flat}} = user
console.log(lat, long, flat);



//assignment - create objetFunctions
//login page, more      