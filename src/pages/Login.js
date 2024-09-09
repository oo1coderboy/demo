import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/loginImage.jpg' ;

function Login({setLoggedIn}) {
  return (
    <div className='text-white'>
      <Template
        title="Welcome Back"
        desc1="Build skills for today,tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginImage}
        formtype="login"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default Login
