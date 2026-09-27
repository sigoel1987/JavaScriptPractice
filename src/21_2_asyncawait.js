


//async await : just a syntax on top of JS promises to improve the callback hell and promises
//to avoid the pyramid of doom...

//async with function -> It will always return a promise 
//await with steps


async function print() {
    console.log('hello print');
}

print();

async function getNumber() {
    return 100;
}

getNumber().then(t1 => console.log(t1));///1st way

let t1 = await getNumber(); //2nd way
console.log(t1);


function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Tom', age: 30 })
        }, 2000);
    })
}

let user = await getUser()
console.log(user);








//async await ------
//1. if a function is written with async --- always return a promise ---> call it using with await
//2. if a function is returning a promise (resolve, rejet)---call it with using await
//3. we cannot write await without async function
//4. async function --- its not mandatory to have await step ---> will always return promise
//5. if in a function, you have await steps then function should be async



async function pop() {
    console.log('Helllo world..!!');
    
}
