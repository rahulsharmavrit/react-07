import React, { useEffect, useState } from 'react';

const App = () => {
    let [count , setCount] = useState(0);

function countUp() {
    setCount(  (prev)=> prev + 1   );
};

let a =2;
/* use Effect hook */

    useEffect(()=> {
        countUp();
    } , [] )

  return ( <>
    <h1>count   - {count}  </h1>
    <button  onClick={ ()=> countUp() } >click me</button>
    </> )
}

export default App;
