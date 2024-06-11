import React from 'react'
//image , heading, description,

const Card = (props) => {
  return (<>

        <div className="card" style={{width : 300}}>
            <div className="card-header">
                <span>{props.heading}</span>
            </div>

            <div className="card-body">
                <img src={props.image} alt="img" style={{height : 250 , width : "100%"}} />
                <p>{props.description}</p>
            </div>
            <div className="card-footer">
                <button>Read more</button>
            </div>
        </div>
    
    </>)
}

export default Card