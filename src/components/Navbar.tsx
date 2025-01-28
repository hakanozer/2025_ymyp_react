import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { userProfile } from '../services/userService'

function Navbar() {

    const [name, setName] = useState('')

    useEffect( () => {
        const jwt = localStorage.getItem('token')
        if (jwt === null) {
            window.location.href = '/'
        }else {
            userProfile(jwt).then( res => {
                const userData = res.data
                if (userData) {
                    setName( userData.data.name )
                }
            }).catch( err => {
                localStorage.clear()
                window.location.href = '/'
            })
        }
    }, [] )


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Pro App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink to={'/products'} className="nav-link">Products</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={'/likes'} className="nav-link">Likes</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">{name}</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar