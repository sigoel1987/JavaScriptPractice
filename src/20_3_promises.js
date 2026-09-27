

//promise:
//1. Pending
//2. resolve -- fulfillment --return the resource (data)
//3. rejected -- reason (error reason)


//create a Promise: using promise

let pizzaPromise = new Promise((resolve, reject) => {

    //do something here....
    let success = true;
    if (success) {
        resolve('return: Pizza');
    }
    else {
        reject('reason: Delivery boy is not available...')
    }
});

pizzaPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log('close the app....'))

//
function getUserInfo(userId) {

    return new Promise((resolve, reject) => {
        console.log('Fetching user data for ......', userId);
        setTimeout(() => {
            if (userId <= 0) {
                reject('Invalid user ID...')
            } else {
                let user = {
                    id: userId,
                    name: 'Shipra',
                    city: 'Pune'
                };
                resolve(user);
            }

        }, 5000)
    })
}

getUserInfo(101)
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('close the DB connection'));
