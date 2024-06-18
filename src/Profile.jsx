import React from 'react'

const Profile = ({children}) => {
  return (
    <div>
    <div className="text-danger">This is my navbar code</div>
    {children}
    <div className="text-danger">This is my footer code</div>
    
    </div>
  )
}

export default Profile