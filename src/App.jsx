import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import SingleProduct from './SingleProduct';
import Contact from './Contact';

const App = () => {

  return (<>

        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/products' element={<Product />}  />
         


          <Route path='/products/:id' element={<SingleProduct />}  />

          <Route path='/contact' element={<Contact />}  />

        </Routes>
    
   </>)
}

export default App