import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='Contactcontainer'>
        <h1 className='contactHeading'>Sign Up</h1>
        <input type={"text"} className = "contactinput" placeholder={"Username"}></input>
        <input type={"email"} className = "contactinput" name="" placeholder='Email'></input>
        <input type={"password"} className = "contactinput" name="" placeholder='Password'></input>
        <input type={"password"} className = "contactinput" name="" placeholder='Confirm password'></input>
        <button className='signButton' type='submit'>SignUp</button>
      </div>
    </div>
  )
}

export default Contact
