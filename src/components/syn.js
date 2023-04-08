async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json()
}

getData()
.then(jsonData => console.log(jsonData))

console.log(getData)

