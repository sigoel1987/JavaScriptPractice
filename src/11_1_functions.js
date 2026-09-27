//1. zero input parameter, no return (void)

function test (){   //function will be created inside heap memory but function calling will be stored in stack memory
    console.log('hello test'); 
}

// calling function
test();
console.log('bye!');


function click () {
    console.log('click on the element');
}

click();


// 2. zero input but some return;
// zero input param; return type: number
function getNumber(){
    console.log('getting some number');
    return 100;
}

console.log(getNumber()); //it is not a good practice to print the return value directly
let result = getNumber(); //storing function retrun in variable and use it - best practice
console.log(result);
console.log(result+100);

// name: launchBrowser, type: boolean; param:0
function launchBrowser(){
    console.log('launching chrome');
    return true;
}
let isLaunched = launchBrowser();
console.log(isLaunched);

if (isLaunched){
    console.log('enter the url: https://www.google.com');
}
else {
    console.log('no need to enter url');
}


function getTrainerName(){
    return 'Naveen';
}

let name = getTrainerName();
console.log(name);
console.log(getTrainerName);
console.log(typeof getTrainerName); //function


//3. some input param and some return:
//input params: 2; return type: any
function add (x, y) {
    console.log('Adding two numbers');
    let z = x+y;
    return z;
}

let m1 = add(10,2);
console.log(m1);

let m2 = add(100, 'shraddha')
console.log(m2);

let m3 = add('Hello', 'World!')
console.log(m3);

//
function calculateBilling(foodBill, drinksBill, tax){
    console.log('Calculating te billing amount....');
    return foodBill + drinksBill + tax;
}

let totalAmount = calculateBilling (1000, 500,50);
console.log(totalAmount);

totalAmount = calculateBilling(1000, 500,0);
console.log(totalAmount);

totalAmount = calculateBilling (5000, 1000)
console.log(totalAmount); //NaN because we are not passing 3rd parameter here


console.log('-------------------------------');

//WAF: AC
// launch a browser:
// input params: (browserName): firefox, chrome, safari
// return: true
//print: Browser is launched successfully
// return: true/false (boolean)
// wrong broserName: print : invalid browser, return: false

/**
 * 
 * @param {string} browserName 
 * @returns 
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

let isBrowserLaunched = launchBrowser(' Chrome ');
console.log(isBrowserLaunched);
if(isBrowserLaunched){
console.log('enter the url : https://www.nal.com');
}


function printing (){           //JS doesn't support function overloading/ duplicate function
    console.log('printing 1');
}

function printing (name){
    console.log('printing 2');
    console.log('bye');
}

function printing (name, age){
    console.log('printing 2');
    console.log('bye');
}

printing('naveen'); //SyntaxError: Identifier 'printing' has already been declared