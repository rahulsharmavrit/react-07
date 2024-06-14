import React, { useState } from 'react'

const Contact = () => {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");

  function handelForm(event) {
    event.preventDefault();

    console.log("firstName:"+firstName);
    console.log("lastName:"+lastName);
    console.log("email:"+email);
    console.log("number:"+number);
    }



  return (<>
  

  <form onSubmit={handelForm}>
<div className="">
<span>first name:</span>
<input onChange={(event) => { setFirstName(event.target.value) }} type="text" name="" id="" />
</div>

<div className="">
<span>last name:</span>
<input onChange={(event) => { setLastName(event.target.value) }} type="text" name="" id="" />
</div>


<div className="">
<span>email:</span>
<input onChange={(event) => { setEmail(event.target.value) }} type="text" name="" id="" />
</div>

<div className="">
<span>phone number:</span>
<input onChange={(event) => { setNumber(event.target.value) }} type="text" name="" id="" />
</div>

<div className="">
<input type="submit" value={"submit"} name="" id="" />
</div>



  </form>


  <div className="card">
    <div className="card-body">
      <ul className="list-unstyled">
        <li> My First Name is  : {firstName} </li>
        <li> My Last Name is  : {lastName} </li>
        <li> My Email is  : {email} </li>
        <li> My Number is  : {number} </li>

      </ul>
    </div>
  </div>



  
  </> )
}

export default Contact