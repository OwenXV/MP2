async function getData(){
    let response = await fetch("https://dummyjson.com/products/1")
    return response.json()
}

getData()
.then(jsonData => console.log(jsonData))
