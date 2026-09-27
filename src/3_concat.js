let x = 100;
let y = 200;

let a = 'selenium';
let b = 'playwright';

console.log(x + y);//300
console.log(a + b);//seleniumplaywright

console.log(x + a);//100selenium
console.log(x + y + a + b);//300seleniumplaywright
console.log(a + b + x + y);//seleniumplaywright100200

console.log(a + b + (x + y));//seleniumplaywright300
console.log(x + y + a + b + x + y);//300seleniumplaywright100200

console.log(1 + "1");//11
console.log("1" + 1);//11
console.log(1 + 1);//2
console.log("1" + "1");//11

console.log("---------------------------------");

console.log(1 - "1");//1-1=0 with minus - operator any number in double quotes will be first converted into number
console.log("5" - 2);//3
console.log("5" + 2); // + operator is concatenation with strings
console.log("10" - "4");//6
console.log("hello" - 2); //NaN
console.log(10 - "Naveen");//NaN

console.log("-----------------------------");
console.log(10 / "2");//5
console.log("20" / "5");//4
console.log("20" / "testing");//NaN

console.log("------------------------------");
console.log(10 * "2");//5
console.log(10 * "hello");//NaN

//2^3 = 8---exponential **
console.log(2 ** 3);//8
console.log("2" ** 3);//8

//Unary Plus (+): converts to a number
console.log(+"42");//42
console.log(+"42" + 5);//47

let d = "45";
console.log(+d + 10);//55

let totalAmount = "2000"; //---use case: if we get value fromUI as string and we want to perform mathematical operation on it
//first  convert that into number using unary operator
console.log(totalAmount + 200);//   2000200
console.log(+totalAmount + 200);//2200

//Unary Negation (-):
console.log("42");//42
console.log("42" + 100);//42100
console.log(+"42"+100);//142

console.log(-"42" + 100); //-42 +100 = 58
console.log(-"130" - 20); //-150