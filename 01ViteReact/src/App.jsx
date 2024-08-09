import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jais from './new'




function App(){
  const username="Jaishree "
  return (
    <>
    <div>
    <Jais />
    <h1>Jaishree{username}</h1>   { /*{username}   //expression */  }
    <h2>Kushwah</h2>
    </div>
    
    </>
    
  );
}




export default App
