import React, { useRef, useState } from 'react'

const Contact = () => {
  let formRef = useRef();

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");

  function handelForm(event) {
    event.preventDefault();

    alert("form has been submitted..")
    formRef.current.reset();
    }



  return (<>
  

  <form ref={formRef} onSubmit={handelForm}>
<div className="">
<span>first name:</span>
<input value={firstName} onChange={(event) => { setFirstName(event.target.value) }} type="text" name="" id="" />
</div>

<div className="">
<span>last name:</span>
<input value={lastName} onChange={(event) => { setLastName(event.target.value) }} type="text" name="" id="" />
</div>


<div className="">
<span>email:</span>
<input value={email} onChange={(event) => { setEmail(event.target.value) }} type="text" name="" id="" />
</div>

<div className="">
<span>phone number:</span>
<input value={number} onChange={(event) => { setNumber(event.target.value) }} type="text" name="" id="" />
</div>

<div className="">
<input type="submit" value={"submit"} name="" id="" />
</div>



  </form>






  
  </> )
}

export default Contact