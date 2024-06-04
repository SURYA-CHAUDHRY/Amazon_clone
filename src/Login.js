import React from 'react';
import "./Login.css";
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e =>{
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))

        //Firebase Login
    }
    const signUp = e =>{
        e.preventDefault()
        //firebase Signup
        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            console.log(auth);
            if(auth){
              navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
      <Link to = '/'>
      <img 
      className='login__logo' 
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
      />
      </Link>

      <div className='login__container'>
        <h1 className='login__signIn'>Sign-in</h1>
        <form>
            <h5 className='login__email' >E-mail</h5>
            <input className='login__input' type='text' value = {email} onChange = {e => setEmail(e.target.value)} />

            <h5 className='login__password' >Password</h5>
            <input className='login__input' value = {password} onChange={e => setPassword(e.target.value)}  type='password' />

            <button className='login__signInButton' onClick={signIn} >Sign In</button>
        </form>
        <p  className='login__pTag'>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button  onClick={signUp}  className='login__signUpButton' >Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
