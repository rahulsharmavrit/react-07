import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
// import About from './About';
import Product from './Product';
// import SingleProduct from './SingleProduct';
// import Contact from './Contact';

let profile = {
  name : "Rahul Sharma",
  age : "00",
  address  : "damak"
}
let skills = ["node","react","sql"];
let callNotification = () => alert("called ok");

export const GlobalData = createContext();

const App = () => {
  let [count,setCount] = useState(0);

  return (<>
    <GlobalData.Provider value={{profile,skills,callNotification,count,setCount}} >
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/products' element={<Product />}  />

        </Routes>
        </GlobalData.Provider>


   </>)
}

export default App