//Mutator Methods
//1. adding element at the end of the array --push() returns the length of the new array
let num = [1, 2, 3, 4, 5];
console.log(num.length);
let push = num.push(100)
console.log(push); //[ 1, 2, 3, 4, 5, 100 ]
console.log(num.length); //6 --push changes the existing array

//2. removing last element--pop() returns the removed element

let num = [1, 3, 5, 7]
let pop = num.pop();
console.log(pop);

//3. adding element at the beginning of the array - unshift()-returns the length of the new array

let product = ['imac', 'samsung', 'iphone', 'macbook']
let unshift = product.unshift('iphone5');
console.log(product);
console.log(unshift);

//4. removing the 1st element shift() - returns the removed element
let product = ['imac', 'samsung', 'iphone', 'macbook']
let shift = product.shift();
console.log(product);
console.log(shift);

//5. splice() - add, remove, replace value --returns new array
// splice (startIndex, deleteCount, item(s))
let cart = ['imac', 'samsung', 'iphone', 'macbook']
cart.splice(0, 0, 'mouse') //start from 0th element, don't delete anything, add the element at 0th position
console.log(cart); //[ 'mouse', 'imac', 'samsung', 'iphone', 'macbook' ]

cart.splice(1, 0, 'keyboard') //start from 1st element, don't delete anything, add the element at 1st location
console.log(cart);[ 'mouse', 'keyboard','imac', 'samsung', 'iphone', 'macbook' ]

// cart.splice(0, cart.length,)//start from 0, delete till the length (6)
// console.log(cart);//[]

cart.splice(0,1,'canon')//start from oth position, delete 1 element and add canon
console.log(cart);//['canon','keyboard','imac', 'samsung', 'iphone', 'macbook']

cart.splice(cart.length-1,1,'table')
console.log(cart);//['canon','keyboard','imac', 'samsung', 'iphone', 'table']


// 6. Slice() - 









//10. join(): join all elements into a string with a separator
let arr = ['naveen', 'automation', 'labs'];
let newArr = arr.join('|')
console.log(newArr);


//11.   toString() - 
let arr = ['naveen', 'automation', 'labs'];
console.log(arr.toString());

//12. at: element at a ggiven index.. supports -ve index also
let num = [1, 2, 3, 4, 5];
console.log(num.at(0)); //1
console.log(num.at(-1)); //5
console.log(num.at[1]); //undefined

//13. forEach() method : iterate all the elements of an array
let cart = ['imac', 'samsung', 'iphone', 'macbook']
cart.forEach((e) => console.log(e.toUpperCase()));
cart.forEach((e)=>console.log(e.length));

let num = [1, 2, 3, 4, 5];
num.forEach((e)=> console.log(e*2));