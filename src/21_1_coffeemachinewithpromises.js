function startMachine() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1. Machine Started');
            resolve();
        }, 2000)
    })
}

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. Water Boiled');
            resolve();
        }, 2000)
    })
}

function addCoffeeWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. Coffee Powder added');
            callback();

        }, 4000);
    })
}

function pourInCup(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4. Poured in cup');
            callback();

        }, 2000);
    })
}

function serveCoffee(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('5. Coffee is served');
            callback();
        }, 1000);
    })
}

//this is the better version
startMachine()
    .then(() => boilWater())
    .then(() => addCoffeeWater())
    .then(() => pourInCup())
    .then(() => serveCoffee())
    .then(() => console.log('Your coffee is ready....enjoy it..!!'))
    .catch((error) => console.log(error))