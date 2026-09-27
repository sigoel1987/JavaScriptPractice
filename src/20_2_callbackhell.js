//callback hell - pyramid of doom....

function startMachine(callback) {
    setTimeout(() => {
        console.log('1. Machine Started');
        callback();
    }, 2000);
}

function boilWater(callback) {
    setTimeout(() => {
        console.log('2. Water Boiled');
        callback();
    }, 3000);
}

function addCoffeeWater(callback) {
    setTimeout(() => {
        console.log('3. Coffee Powder added');
        callback();

    }, 4000);
}

function pourInCup(callback) {
    setTimeout(() => {
        console.log('4. Poured in cup');
        callback();

    }, 2000);
}

function serveCoffee(callback) {
    setTimeout(() => {
        console.log('5. Coffee is served');
        callback();
    }, 1000);
}

//Start the coffee preparation: callback chain:
//callback hell -- pyramid of doom...

startMachine(() => {
    boilWater(() => {
        addCoffeeWater(() => {
            pourInCup(() => {
                serveCoffee(() => {
                    console.log('Your coffee is ready....enjoy it..!!');
                })
            })
        })
    })
})

//give me the user information after 4 secs
//return proper user object
function getUserData(callback){
    console.log('fetching user from server/db....');

    setTimeout(()=>{
        console.log('set time out function');
        let user = {
            id : 101,
            name: 'Tom',
            email: 'tom@gmail.com',
            role: 'SDET3',
            city: 'Delhi'
        };
        callback(user);
    }, 4000)
   
}

getUserData((user)=>{
    console.log('user received....');
    console.log(user);
    console.log(user.id, user.name);
})






//callback with promises....
