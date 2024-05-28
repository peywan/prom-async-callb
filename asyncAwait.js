function welcomeUser(username) {
    console.log(`Welcome ${username}`);
}
function getName() {
    let name;
    setTimeout(function() {
        name = 'Jane';
    }, 500);
    return name;
}
const result = getName();
welcomeUser(result);
