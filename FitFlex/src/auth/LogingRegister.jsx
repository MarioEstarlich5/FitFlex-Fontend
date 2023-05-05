import React, { useState } from 'react'
import { Login } from './Login'
import { Register } from './Register'
export const LoginRegister = () => {
    let [isLogin, setLogin] = useState(true);
        
    return (
        <div className='bodyLoginRegister'>
            {isLogin? <Login setCanvi={setLogin}/> : <Register setCanvi={setLogin}/>}
        </div>
    )
}