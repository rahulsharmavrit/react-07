import React, { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import SingleProduct from './SingleProduct';
import Contact from './Contact';

export const GlobalData = createContext();

const App = () => {

  return (<>
    <GlobalData.Provider value={{test : "ok tested" , data : "ok data"}} >
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/products' element={<Product />}  />
         

          <Route path='/products/:id' element={<SingleProduct />}  />
         

          <Route path='/contact' element={<Contact />}  />

        </Routes>
        </GlobalData.Provider>


   </>)
}

export default App