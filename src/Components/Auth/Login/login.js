import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../../../Config/AuthContext'

import './login.css';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, googleSignIn } = useAuth();
    const history = useHistory();

    const handleGoogleLogin = async () => {
        try {
            setLoading(true)
            await googleSignIn();
            history.push('/')
        } catch {
            alert("error signing in with google")
        }
        setLoading(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            await login(email, password)
            history.push('/')
        } catch {
            alert("Cannot login")
        }
        setLoading(false)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='login-card'>
                    <h3>EDULICIOUS</h3>
                    <img className='login-logo' src="https://i.imgur.com/xAq0OkP.png" alt="logo" />
                    <form onSubmit={handleSubmit}>
                        <div className='inputs'>
                            <input type="email" value={email} onChange={event => setEmail(event.target.value)} id='email' placeholder={'Email Address'} autoComplete='off' required/>
                            <input type="password" value={password} onChange={event => setPassword(event.target.value)} id='password' placeholder={'Password'} autoComplete='off' required />
                            <button disabled={loading} className="login-button">Login</button>
                        </div>
                        <p className='login-help'>Don't have an account? <Link to="/register">Sign Up</Link><br></br><span className='login-help-or'>Or</span></p>
                        <hr className='login-hr'></hr>
                        <img className='google-login' onClick={() => handleGoogleLogin()} src="https://i.imgur.com/Sq1XeQZ.png" alt='google-login-icon'></img>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default Login;