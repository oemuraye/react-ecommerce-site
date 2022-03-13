import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()

        
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    navigate('/')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + ':' + errorMessage);
            });
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='logo'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signin}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login