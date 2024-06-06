import React from 'react'
import { useState } from 'react'

const App = () => {
    let [isOpen, setisOpen] = useState(true);
  return (<>
  <button onClick={()=>setisOpen((prev)=> !prev)}>

  {isOpen===true ? "Close x" : "Open +" } {/* ternary operator */}
  
  </button>
   {isOpen && <h1>Hello world</h1>}
  </>)
}

export default App