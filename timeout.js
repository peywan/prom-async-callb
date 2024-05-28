
//setTimeout(callback, delay);
/*function sayHello(message) {
    window.alert("hello")
}
setTimeout(sayHello, 2000);
*/

/*
//anonymous function

setTimeout(function(){
    window.alert("hello")
}, 3000)
*/


//timeout with arrow function
/*
setTimeout(() => window.alert("hello"), 2000)
*/

// clearTimeout function but we need to pass in an timeoutId
/*
const timeoutId = setTimeout(() => window.alert("hello"), 2000)

clearTimeout(timeoutId)
*/

//create button when we click we will set a timeout to display the word hello!


function startTimer() {
    setTimeout(() => window.alert("hello"), 2000)
}
