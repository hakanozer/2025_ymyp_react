import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const fncLogin = (evt: React.FormEvent) => {
    evt.preventDefault() // form submit cancel
    if(email === 'ali@mail.com' || password === '12345') {
      navigate('/products', { replace: true })
    }
  }

  return (
    <>
      <div className='row'>
        <div className='col-12  col-md-3 col-lg-4'></div>
        <div className='col-12  col-md-6 col-lg-4'>
          <h2>User Login</h2>
          <form onSubmit={fncLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input onChange={(evt) => setEmail(evt.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input onChange={(evt) => setPassword(evt.target.value)} required type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className='d-flex justify-content-between'>
              <button type="submit" className="btn btn-primary">Login</button>
              <NavLink to='/register' className="btn btn-success">Register</NavLink>
            </div>
          </form>

        </div>
        <div className='col-12  col-md-3 col-lg-4'></div>
      </div>
    </>
  )
}

export default Login