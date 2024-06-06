import React from 'react';
import mainImage from "./assets/images/abc.png";


const App = () => {
  return (<>  
  <img src="src\assets\images\abc.png" alt="" />
  <img src="../src/assets/images/abc.png" alt="" />
  <img src={mainImage} alt="" />

  </>)
}

export default App