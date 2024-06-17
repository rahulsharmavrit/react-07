import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalData } from './App'
//image , heading, description,

const Card = ({image,heading,description,id}) => {
    let mystore = useContext(GlobalData)
    
  return (<>

        <div className="card" style={{width : 300}}>
            <div className="card-header">
            {mystore.test}
               <span className="text-danger">{`(${id})`}</span> <span>{heading}</span> 
            </div>

            <div className="card-body">
                <img src={image} alt="img" style={{height : 250 , width : "100%"}} />
                <p>{description}</p>
            </div>
            <div className="card-footer">
               <NavLink to={`/products/${id}`}> <button>Read more</button></NavLink>
            </div>
        </div>

    </>)
}

export default Card