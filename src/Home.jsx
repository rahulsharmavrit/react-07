import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  return (<>
      Welcome Home
      {Navbar()}
  </>)
}

export default Home