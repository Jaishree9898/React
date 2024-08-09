import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
//import {jsx as _jsx} from "react/jsx-dev-runtime.js"


function MyApp(){
    return (
    <>
    <div>
      <h1>Custom App || Jaisu</h1>
    </div>
    </>
  )
}

const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit Google</a>
)


const anotherUser="React and JS"

const reactElement=(
  'a',
  {href: "https://google.com", target: '_blank'},
  'click me to visit google',
  anotherElement  
)



ReactDOM.createRoot(document.getElementById('root')).
render
(
  reactElementreact-devtools


)