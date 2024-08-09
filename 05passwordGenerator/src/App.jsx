import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [length,setLegnth]=useState(8);
 const [numberAllowed,setNumberAllowed]=useState(false);
 const [charAllowed,setCharAllowerd]=useState(false);
 const [passowrd,setPassword]=useState("");

 const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="";
      


 }, [length,numberAllowed,charAllowed,setPassword])


  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
