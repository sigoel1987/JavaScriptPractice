

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1000)
        }, 2000);
    })
}

function getTrainerName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tom')
        }, 3000);
    })
}

function getResposeCode() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('400 Error')
        }, 5000);
    })
}

//1. Promise.all() ----> "All or nothing"..
//waits for ALL promises to succeed. if even one fails...the whole thing fail immediately...------fail fast
//All resolved - array of all will be returned

//1. Promise.all([p1, p2, p3])
Promise.all([getNumber(), getTrainerName(), getResposeCode()])
    .then((result) => console.log('ALL Resolved: ', result))
    .catch((error) => console.log('Failed: ', error))



//2. Promise.race() ---> who is finiching the line...
Promise.race([getNumber(), getTrainerName(), getResposeCode()])
    .then((result) => console.log('ALL Resolved: ', result))
    .catch((error) => console.log('Failed: ', error))


//3. Promise.allSettled() ---> Tell me everything
//wait for all the promises to finish..either resolved or rejected...
Promise.race([getNumber(), getTrainerName(), getResposeCode()])
    .then((result) => console.log('ALL Resolved: ', result))
    .catch((error) => console.log('Failed: ', error))



//4. Promise.any() ---> " I just need one winner"--ex-anyfriend is coming to pick me up for the party
//waiting for first resolve only
//if all fails then error ---give aggregated error - ex- no one is available to pick me up
//returns the first promise which got succeed..ignore the failures...

Promise.any([getNumber(), getTrainerName(), getResposeCode()])
    .then((result) => console.log('ALL Resolved: ', result))
    .catch((error) => console.log('Failed: ', error))
