//async, await, callbacks and promises
/* const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"},
];

function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)

}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("something went wrong")
            }
        }, 2000)
    })
}

/*
createPost({
    title: "post three", body: "this is post three"
})
    .then(getPosts)
    .catch(err => console.log(err))
    */


//async await
/* async function init(){
    await createPost({
        title: "post three", body: "this is post three"
    })
    getPosts()
}
init()
*/




/*
//async await with fetch ()
async function fetchUsers () {
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users')

    const data = await res.json()
    console.log(data)
}

fetchUsers()
*/



//Promise.all
/*
const promise1 = Promise.resolve('hello from promise');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 1000, "goodbye"));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4]).then((values
) => console.log(values))
*/

