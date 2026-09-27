let x = 10;
console.log(x);


console.log(typeof x);

let y = 12.33;
console.log(y);
console.log(typeof y);

let i = -100;
console.log(i);
console.log(typeof i);

let name= 'Shraddha';
console.log(name);
console.log(typeof name);

let msg = 'Welcome to NAL';
console.log(msg);
console.log(typeof msg);

let m1 = '$';
console.log(m1);
console.log(typeof m1);

let m2 = '1000';
console.log(typeof m2);

let m3 = 1000;
console.log(typeof m3);

let test = 'I love JavaScript';
console.log(test);
console.log(typeof test);

let p;
console.log(p);//undefined
console.log(typeof p);//undefined

let flag = true;
console.log(flag)
console.log(typeof flag);

let isElementExist = false;
console.log(isElementExist);

let firstName = undefined;
console.log(firstName);
console.log(typeof firstName);

firstName = 'Shraddha';
console.log(firstName);
console.log(typeof firstName);

let obj = null;
console.log(obj);
console.log(typeof obj);//object--existing bug in JS..legacy bug..null is not an object but it is showing as object in typeof operator

// Re-initialization
let c = 10;
c = 20;
console.log(c);


var x = 10;//old way of declaring the variable before ES6
var x = 20;
console.log(i);//not giving error because of var keyword

let b = 20;
let b = 30; //syntax error because of let keyword
console.log(b);

const pi = 3.14;
console.log(pi);
console.log(typeof pi);

const title;
console.log(title);//error - Missing initializer in const declaration

var top = 20;
let top = 10;
console.log(top);//error - Identifier 'top' has already been declared

// Q20. Write a small code to declare one variable with var, one with let, and one with const. Print all three.
var a = 10;
let b = 20;
const c = 30;

console.log(a,b,c);

//Hoisting : when we try to access a variable before its declaration

console.log(m);
// let m = 10; //ReferenceError: Cannot access 'm' before initialization

var m = 10; //undefined --hoisting is allowed with var

// var : allowed - undefined - no error
// let: not allowed
// const : not allowed