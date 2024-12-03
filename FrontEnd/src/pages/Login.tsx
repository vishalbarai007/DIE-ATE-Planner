// import React from 'react'
// import { SignupFormDemo } from '../components/AceternityComponents/main/SignUpForm'

import { useState } from "react"
import { SignupFormDemo } from "../components/AceternityComponents/main/SignUpForm"
import { SignInFormDemo } from "../components/DeveloperDefineComponents/SignInForm"

const Login = () => {

  let [Mode, setFormMode] = useState("SignUp")
  const changeMode = () => {
          setFormMode(Mode === "SignUp" ? "SignIn" : "SignUp")
        }
  
  

  if(Mode === "SignUp"){
    return (
      <>
      <div className="h-screen w-full bg-zinc-800 flex justify-center items-center">
      <SignupFormDemo/>  
      <p className='absolute left-[40%] bottom-[13%] m-3'> Didn't have Account ? <a className=' text-blue-600 cursor-pointer ' onClick={changeMode} >Sign In</a></p>

      </div>
      </>
    )
  }
  else {

    return (
      <div className="h-screen w-full bg-zinc-800 flex justify-center items-center">
      <SignInFormDemo/>  
      <p className='absolute left-[40%] bottom-[13%] m-3'> Didn't have Account ? <a className=' text-blue-600 cursor-pointer ' onClick={changeMode} >Sign up</a></p>

      </div>

    )
  
}
}

export default Login;