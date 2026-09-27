//default param - with default value
function greet(name = 'Jack') {
    console.log('hello ' + name);
}

greet(); //hello Jack
greet('Smita'); //hello Smita


function openBrowser(browserName = 'Chrome') {
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

openBrowser();

//create above function without multiple returns.

function openBrowserWithSingleReturn(browserName) {

    console.log("Launching Browser......" + browserName);
    let isLaunched = true;
    switch (browserName.trim().toLowerCase()) {
        case "chrome":
            console.log("chrome is launched successfully");
            break;
        case "firefox":
            console.log("firefox is launched successfully");
            break;
        case "safari":
            console.log("safari is launched successfully");
            break;
        case "edge":
            console.log("edge is launched successfully");
            break;
        default:
            console.log("Invalid browser: " + browserName);
            console.log('Please pass the valid browser name: chrome, firefox, safari, edge');
            return isLaunched = false
    }
}

openBrowserWithSingleReturn('testing');

function voting(name, age = 16) {
    console.log(name, age);
}

voting('Tom');
voting('Smita', 60);


//multipledefault parameters
//can we have multiple defaults in function - Yes

function createUser(name = 'Anonymous', role = 'viewer') {
    console.log(name, role);
}

createUser(); //Anonymous viewer
createUser('Naveen', 'Admin') //Naveen Admin


function add(a, b = 10) {
    return a + b;
}
let t1 = add(5);
console.log(t1);    //15

let t2 = add(5, undefined);
console.log(t2);    //15 --undefined will also trigger default value

let t3 = add(5, null)
console.log(t3);    //5 --but null will not trigger default value

let t4 = add(4, NaN)
console.log(t4);    //NaN

