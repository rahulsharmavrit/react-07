import React from 'react'
import Card from './Card'

const App = () => {
  const date = [
    
    {
      image : "https://rukminim2.flixcart.com/image/312/312/kt0enww0/watch/g/t/3/1-sqin-t50-digital-watch-black-sqinenterprise-boys-girls-original-imag6gh722eywq7g.jpeg?q=70",
      heading :"Smart Bands",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!"
    },
    {
      image : "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/v/1/4/bolt-cycles-for-men-with-front-suspension-dual-disc-brake-mtb-original-imahyvvm9fhtmg2c.jpeg?q=70",
      heading :"bands two",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!"
    },
    {
      image : "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/v/d/5/xc-900-24-6061-alloy-frame-fully-fitted-zoom-lockout-suspension-original-imahfmsj6znxzgqz.jpeg?q=70",
      heading :"bands three",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!"
    },
    {
      image : "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/k/s/n/mutant-27-5black-steel-mtb-with-21-shimano-gear-ride-tracking-original-imahyxv8pv6avw5v.jpeg?q=70",
      heading :"bands four",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis!"
    },
  ]
  return (<>


       {
        date.map( (item,index)=>  <Card image={item.image} heading={item.heading} description={item.description} />)
       }

    
   </>)
}

export default App