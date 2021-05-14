import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../../Config/AuthContext'

import './register.css';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const { signUp, googleSignIn } = useAuth();
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

        if (password !== confirmPassword) {
            return alert("Password do not match!!!")
        }

        try {
            setLoading(true)
            await signUp(email, password).then(res => {
                history.push('/login')
            }).catch(error => {
                alert(error.message)
            })
        } catch {
            alert("cannot create account")
        }
        setLoading(false)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='register-card'>
                    <h3>EDULICIOUS</h3>
                    <img className='register-logo' src="https://i.imgur.com/xAq0OkP.png" alt="logo" />
                    <form onSubmit={handleSubmit}>
                        <div className='inputs'>
                            <input type="email" id='email' value={email} onChange={event => setEmail(event.target.value)} placeholder={'Email Address'} autoComplete='off' required/>
                            <input type="password" id='password' value={password} onChange={event => setPassword(event.target.value)} placeholder={'Password'} autoComplete='off' required />
                            <input type="password" id='confirm-password' value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} placeholder={'Confirm Password'} autoComplete='off' required />
                            <button disabled={loading} className="register-button">Register</button>
                        </div>
                        <p className='register-help'>Already have an account? <Link to="/login">Sign In</Link><br></br><span className='register-help-or'>Or</span></p>
                        <hr className='register-hr'></hr>
                        <img className='google-register' onClick={handleGoogleLogin} src="https://i.imgur.com/Sq1XeQZ.png" alt='google-register-icon'></img>
                    </form>
                </div> 
            </div>
        </div>
    )
}

export default Register;