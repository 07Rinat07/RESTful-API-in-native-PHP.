

async function getPosts(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await res.json();

    console.log(posts);
}
