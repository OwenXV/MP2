import {useEffect} from 'react'
const key = process.env.REACT_APP_API_KEY

async function getData(){
    const response = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_6cccph9a')
    const data = await response.json()
    return data
}
getData().then((data)=>{
 console.log(data)
 useEffect(()=>{getData()})
 })


 

