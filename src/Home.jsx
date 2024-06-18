import React, { useContext, useEffect, useState } from 'react'
import { GlobalData } from './App'
import Profile from './Profile';
import axios from 'axios';
import Card from './Card';


const Home = () => {

  let [products,setProducts] = useState([]);

  let callme =  async () => {
   let response = await axios.get("https://jsonplaceholder.typicode.com/photos?_start=1&_limit=100");
   setProducts(()=>response.data);
  };

  
  useEffect(()=> {
    callme()
  }, [])

  return (<>
      <div className="row">
      {
        products.map((item,index)=> <div className="col-4 my-3">
        <Card key={index}  id={item.id} image={item.
thumbnailUrl
}  heading={item.title} description={item.url} /> 
        </div> )
      }
      </div>
      </>)
}

export default Home;
