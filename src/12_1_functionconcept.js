/**
 * This function is used to add two numbers
 * @param {number} x //* instead of number means anytype
 * @param {number} y 
 * @returns it returns addition of two numbers
 */
function addition (x, y){
    return x + y;

}

let m1 = addition (10, 20)
console.log(m1);

let m2 = addition ('Shraddha', 100)
console.log(m2);

let m3 = addition ('Hello',' Shraddha!')
console.log(m3);

let t1 = addition(20,40);
console.log(t1);

let t2 = addition('Hello',' Tom!');
console.log(t2); //Hello Tom!

/**
 * this function is used to launch selected browser
 * @param {string} browserName  
 * @returns true if correct browser is launched otherwise returns false.
 */

function launchBrowser(browserName){
    console.log('launching the browser....' + browserName);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log(browserName + 'browser is launched successfully');
            return true;
        case 'safari':
            console.log(browserName + 'browser is launched successfully');
            return true;
        case 'firefox':
            console.log(browserName + 'browser is launched successfully');
            return true;
        case 'edge':
            console.log(browserName + 'browser is launched successfully');
            return true;
        default:
            console.log('Invalid browser: ' + browserName);
            console.log('Please pass the valid browser name: chrome, firefox, safari, edge');
            return false;
    }
}

launchBrowser('chrome') // calling the function (calling stored in stack memory)--call stack




//these below functions will go inside heap if I am not calling them
// calling m1 will store inside stack. stack works on LIFO concept during deallocation
function m1(){
    console.log('m1 function');
    m2();
}

function m2(){
    console.log('m2 function');
    m3();
}

function m3(){
    console.log('m3 function');
}

m1();


//function calliing itself : recursive function (recursion concept)
// function test(){
//     console.log("calling recursive function - test");
//     test();
// }

// test();

// function with param:

function calculateBilling(amount, tax){
    let totalAmt = amount + tax;
    return totalAmt;
}

//call by value
let totalAmount = calculateBilling(2000,50); //calling function by passing value/arguments

console.log(totalAmount);

let cart = 
function addToCart(product) { 
    console.log('add to cart', product); 
    return true; }

    console.log(cart);

let cart = 
function addToCart(product){
    console.log(product , 'product is added to the cart');
    return true;
}
console.log(cart);

let obj = { 
    greet() { 
        console.log('hello');
    }
}

let loginPage = {
    username : 'Shraddha',
    password : 'password',
    login () {
        console.log(this.username);
    }
};

let page = {
    login(){
        console.log('this is login method');
    },
    logout(){
        console.log('this is logout method');
        this.login()

    }
}

page.logout()

let cart = function addToCart(){

};
console.log(cart.name); // 'addToCart
