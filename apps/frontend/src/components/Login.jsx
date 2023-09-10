import React from 'react'
import './Login.css'
const Login = (props) => {
  const {current,setCurrent,switchToSignUp,switchSignUp} = props;      
  return (
        <form className='login-form'>
            <input className='input-pet' placeholder='Email' type='email' required/>
            <input className='input-pet' placeholder='Password' type='password' required/>
            <div className='remember-passowrd'>
                <input type='checkbox' />Remember password
            </div>
            <input type='submit' value='Log In' />
            <div className='info'>
              Don't have an account? <span onClick={()=>switchToSignUp()}>Sign Up</span> 
            </div>
        </form>
  )
}

export default Login