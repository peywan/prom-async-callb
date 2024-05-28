/*
function getName(callback) {
    let name;
    setTimeout(function() {
        name = 'Jane';
        callback(name);
    }, 250);
}
function getAge(username, callback) {
    let age;
    setTimeout(function() {
        age = 30;
        callback(username, age);
    }, 2050);
}

getName(function(username) {
    getAge(username, function(username, age) {
        console.log(`Name: ${username}, Age: ${age}`);
    });
});
*/


// timeout functions:
/*
let i = 0;
function func() {
    i = 2;
    console.log(`${i} which is the inside console.log of the function func. `);
}
setTimeout(func, 0);
console.log(`${i} which is the outside call of the function.`);
*/

//callback function

function welcomeUser(username) {
    console.log(`Welcome ${username}`);
}
function getName(callback) {
    let name;
    setTimeout(function() {
        name = 'Jane';
        callback(name);
    }, 500);
}
getName(name);
