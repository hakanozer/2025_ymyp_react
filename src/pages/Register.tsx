import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userRegister } from '../services/userService'

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const fncRegister = ( evt: React.FormEvent ) => {
    evt.preventDefault()
    if (name === '') {
      alert('Please enter your name')
    }else if( email === '') {
      alert('Please enter your email')
    }else if( password === '') {
      alert('Please enter your password')
    }else if( confirmPassword !== password ) {
      alert('Password does not match')
    }else{
      
      userRegister(name, email, password).then( res => {
          const status = res.status
          const data = res.data
          if (status === 201) { 
              navigate('/')
          }else {
            //const message = data.errors?.email?.[0]
            console.log(data.errors)
            alert('User already exists')
          }
      }).catch( err => {
          console.log(err)
          alert(err.message)
      })
      
    }

  }

  return (
    <>
      <div className='row'>
        <div className='col-12  col-md-3 col-lg-4'></div>
        <div className='col-12  col-md-6 col-lg-4'>
          <h2>User Register</h2>
          <form onSubmit={fncRegister}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input onChange={(evt) => setName(evt.target.value)} required type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onChange={(evt) => setEmail(evt.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onChange={(evt) => setPassword(evt.target.value)} required type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
              <input onChange={(evt) => setConfirmPassword(evt.target.value)} required type="password" className="form-control" id="exampleInputPassword2" />
            </div>
            <div className='d-flex justify-content-between'>
              <button type="submit" className="btn btn-primary">Register</button>
              <NavLink to="/" className="btn btn-danger">Login</NavLink>
            </div>
          </form>
        </div>
        <div className='col-12  col-md-3 col-lg-4'></div>
      </div>
    </>
  )
}

export default Register
