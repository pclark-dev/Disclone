import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import discloneLogo from './resources/discloneLogo.png'
import {auth, provider} from './firebase'

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src={discloneLogo} alt=""/>
        </div>

        <Button onClick={signIn}>Sign In</Button>
    </div>

    
  )
}

export default Login