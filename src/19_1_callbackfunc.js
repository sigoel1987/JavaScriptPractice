
function testing(callback) {
    console.log("Hello Testing Function");
    callback();
}

function print() {
    console.log("Print function");
}

// 1. calling part: call by passing the function

testing(print);


//
let coding = function doCoding() {
    console.log("I am coding....");
}

// 2. calling testing function by passing coding function: coding is callback
testing(coding);

// 3. calling testing function by passing anonymous function - no need to give function name
testing(function () {
    console.log('I am running');
})

//4. calling testing function by passing arrow function
testing(() => {
    console.log('Hello arrow JS');
})

// let num = [1, 2, 3, 4]
// num.map((n) => n * 2)


//internal features of calculator
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

// generic function : helper function: utility function
// user facing function
function calculator(callback, a, b) {
    console.log('Doing the Calculation');
    return callback(a, b);
}

// user wants to use this calculator:

let r1 = calculator(add, 10, 20)
console.log(r1);

r1 = calculator(sub, 100, 20)
console.log(r1);

r1 = calculator(mul, 100, 20)
console.log(r1);

r1 = calculator(div, 100, 20)
console.log(r1);



//

function printing(callback1, callback2,num1,num2,num3) {
    console.log('hello printing');
    callback1(num1);
    callback2(num2, num3);
}
// printing((num1) => {
//     console.log('hello number: ', num1);
// },()=>{},100,200,300)

printing(()=>{},(num2, num3) => {
    console.log('hello addition', num2 + num3);
},100,200,300)


function finding(callback1, callback2) {

}

//
function click(element) {
    console.log('click on ', element);
}
function performAction(callbackAction, element) {
    console.log('Do this action');
    callbackAction(element);
}

performAction(click,'loginButton')

//
function getUserDetails(callback, userObj){
    console.log('Getting user details...');
    callback
}

