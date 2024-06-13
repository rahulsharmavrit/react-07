import React from 'react'
import { NavLink } from 'react-router-dom'
//image , heading, description,

const Card = ({image,heading,description,id}) => {

  return (<>

        <div className="card" style={{width : 300}}>
            <div className="card-header">
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