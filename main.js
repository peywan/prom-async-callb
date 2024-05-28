/* function getName(callback){
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
    }, 250);
}

getName(function(username) {
    getAge(username, function(username, age) {
        console.log(`Name: ${username}, Age: ${age}`);
    });
});
*/


const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},
];

function getPosts () {
    setTimeout( ()=>{
    let output = "";
    posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)

    }


function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 2000)
}


createPost(
    {title: "post three", body: "this is post three"},

    getPosts

)
