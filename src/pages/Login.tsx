import React from 'react'

function Login() {
  return (
    <>
      <div className='row'>
        <div className='col-12  col-md-3 col-lg-4'></div>
        <div className='col-12  col-md-6 col-lg-4'>
          <h2>User Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className='col-12  col-md-3 col-lg-4'></div>
      </div>
    </>
  )
}

export default Login