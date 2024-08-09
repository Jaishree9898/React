import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"Jaishree",
    age: 21
  }

  let newArr=[1,2,3]

  return (
    <>      
    {/* <></>  //fragments */}
    <h1 className='bg-green-400 test-black p-4 rounded-xl'>Tailwind Test</h1>
    <Card username="jaishree"   btnText="Click me"/>
    <Card username="Kushwah" />
    
     
    </>
  )
}

export default App
