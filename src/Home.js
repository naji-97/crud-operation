import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
 const counter = useSelector((state) =>state.counter.value)
  return (
    <div>Home
    <h1>Home {counter} </h1>


    
    </div>
  )
}

export default Home