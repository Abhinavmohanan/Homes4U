import React from 'react'
import { useState } from 'react';
import './Signup.css'
const Signup = (props) => {
  const {current,setCurrent,switchToLogIn,switchLogIn}=props;
  const [passowrd,setPassword] = useState();
  const [confirm,setConfirm] = useState();
  const verify = () =>{
    if(passowrd===confirm)
    {
      return;
    }
    else
    {
      alert("Password must be same on both boxes")
    }
  }
  return (
    <form className='sign-up-form'>
        <input className='input-pet' placeholder='First Name' type='text' required/>
        <input className='input-pet' placeholder='Last Name' type='text' required/>
        <input className='input-pet' placeholder='Email Id' type='email' required/>
        <input className='input-pet' placeholder='Password' type='password' required onChange={(event)=>setPassword(event.target.value)}/>
        <input className='input-pet' placeholder='Confirm Password' type='password' required onChange={(event)=>setConfirm(event.target.value)}/>
        <div className='agree'>
            <input type='checkbox' required/>
            <div className='agree-text'>
                I agree to the terms and conditions
            </div>
        </div>
        <input onClick={()=>verify()} type='submit' value='Sign Up' />
        <div className='info'>
            Already have an account?<span onClick={()=>switchToLogIn()}> Log In</span> 
        </div>
    </form>
  )
}

export default Signup
