import React, { useContext } from 'react'
import { GlobalData } from './App'

const Home = () => {
  let data =  useContext(GlobalData);
  console.log(data , 'data')
  return (<>
          <ul className="list-unstyled">
            <li>Name : {data.profile.name} </li>
            <li>Age : {data.profile.age} </li>
            <li>Address :  {data.profile.address}</li>
            <li>Slikks:  {data.skills.map((item ,index)=> `${item} ${data.skills.length-1>index ? "," : ""}` )} </li>
            <li> <button onClick={data.callNotification}>Hire me</button> </li>

            <li> count : {data.count}  , <button onClick={()=> data.setCount((prev) => prev+1)} >+</button> </li>
          </ul>
      </>)
}

export default Home;


let testfun = () => "hello";
let testmyfun = () => {  return "hello" };
