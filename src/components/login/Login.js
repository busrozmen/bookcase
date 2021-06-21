import React, { useState, useRef } from 'react'
import useLocalStorage from '../../useLocalStorage'
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useLocalStorage('BookCaseToken', {})
  const emailError = useRef()
  const passwordError = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!(e.target.classList.contains('was-validated'))){
      e.target.className += " was-validated"
    }
    if(emailError.current.offsetHeight <= 0 && passwordError.current.offsetHeight <= 0){
      const newToken = {
        email,
        password,
        wishs:[]
      }
      setToken(newToken)

      window.location.href='/';
      if(window.location.href=='/'){
        setEmail('')
        setPassword('')
      }
    }
  }

  return(
    <div>
      <form
        className="needs-validation login-form m-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <p className="h4 text-center mb-4">Please Login</p>
        <MDBRow>
          <MDBCol md="4">
            <MDBCol md="12">
              <MDBInput
                icon='envelope'
                value={email}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="Your Email address"
                required
              >
                <div className='invalid-feedback' ref={emailError}>
                    Please provide a email.
                </div>
                <div className='valid-feedback'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="12">
              <MDBInput
                icon='lock'
                value={password}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Password"
                minLength="6"
                required
              >
                <div className="invalid-feedback" ref={passwordError}>
                Please enter a password of more than 6 characters
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="12">
              <MDBBtn type="submit" className='login-btn w-100'>
                Login
              </MDBBtn>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </form>
    </div>
  )
}
export default Login


