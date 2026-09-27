


const PI = 3.14;

function driving() {
    console.log('driver is driving');
}

function print() {
    console.log('printing');

}

//default export concept : default never participate in object destructuring
//we can have only one default function in JS file
//usecase: logo function
// export default function coding() {
//     console.log('coding');
// }
let username = 'shraddha'
export default username; //SyntaxError: Duplicate export of 'default'
export { PI, driving, print }

