import { useState, useEffect } from "react"

function Home() {
  const [hungry, setHungry] = useState(false)
  let handleClick = () =>{
    setHungry(!hungry)
  }
useEffect(() =>{
  document.title =Math.random().toString(16)
},[hungry])
  return (
    <>
      <h1 onClick={handleClick}>HOME PAGE</h1>
      <p>Are you {hungry ? "really": "not"} hungry?</p>
    </>
  )
}

async function start(){
  const  response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  createBreedList(data.message)
}

start()

function createBreedList(breedList){
  document.getElementById("breed").innerHTML = `
  <select onchange="loadByBreed(this.value)">
      <option>Choose a Dog breed</option>
      ${Object.keys(breedList).map(function(breed){
          return `<option>${breed}</option>`
      }).join('')}
      </select>
  `
 }

async function loadByBreed(breed){
if(breed != " Choose a Dog breed"){
  const response = await fetch (`https://dog.ceo/api/breed/${breed}/images`)
  const data = await response.json()
  createSlideShow(data.message)
}
}

function createSlideShow(images){
console.log(images)
}


export default Home