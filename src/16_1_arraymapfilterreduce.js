

//1. map : transform each and every element of an arrayand return new array
let num = [1, 2, 3, 4, 5];
let newNum = num.map((e) => e * 2)
console.log(newNum);

let squareNum = num.map(e => e * e)
console.log(squareNum);

let empNames = ['tom', 'siya', 'shraddha', 'ishaan'];
let nameUpper = empNames.map((e) => e.toUpperCase())
console.log(nameUpper);

//2. filter: remove from the existing array on the basis of given condition

let numbers = [10, 25, 30, 45, 50, 60];
//give me all numbers greater than 30
let greaterThan30 = numbers.filter(e => e > 30)
console.log(greaterThan30);
console.log(typeof greaterThan30); //object

let even = numbers.filter(e => e % 2 === 0);
console.log(even);

let odd = numbers.filter(e => e % 2 != 0);
console.log(odd);

let odd2 = numbers.filter(e => e % 2 === 1);
console.log(odd2);


let empNames = ['tom', 'siya', 'shraddha', 'ishaan', 'om', 'siya', 'pp'];

let longNames = empNames.filter(e => e.length > 3)
console.log(longNames);

//multiple filters comcept


//reduce: combine everything into one value ; returns single value
let numData = [10, 20, 30, 40, 50];
let finalSum = numData.reduce((sum, n) => sum = sum + n, 0)
console.log(finalSum);


let productData = ['apple macbook']