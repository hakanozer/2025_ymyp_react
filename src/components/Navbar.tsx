import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { userProfile } from '../services/userService'
import { getAllLikes } from '../utils/store'
import { useDispatch, useSelector } from 'react-redux'
import { ILikesAction } from '../useRedux/likesReducer'
import { StateType } from '../useRedux/reduxStore'

function Navbar() {

    const searchRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLAnchorElement>(null)
    const [name, setName] = useState('')

    useEffect( () => {
        if (searchRef.current) {
            searchRef.current.hidden = true
        }
        if (nameRef.current) {
            nameRef.current.hidden = true
        }
        const jwt = localStorage.getItem('token')
        if (jwt === null) {
            window.location.href = '/'
        }else {
            userProfile(jwt).then( res => {
                const userData = res.data
                if (userData) {
                    setName( userData.data.name )
                    if (searchRef.current) {
                        searchRef.current.hidden = false
                        searchRef.current.focus()
                    }
                    if (nameRef.current) {
                        nameRef.current.hidden = false
                        nameRef.current.style.color = 'red'
                    }
                }
            }).catch( err => {
                localStorage.clear()
                window.location.href = '/'
            })
        }

    }, [] )

    const logout = () => {
        localStorage.clear()
        window.location.replace('/')
    }

    // reduxa datayı gönderme
    const dispatch = useDispatch()

    // reduxtan datayı alma
    const allLikes = useSelector( (item: StateType) =>  item.likesReducer )
    useEffect(() => {
      const arr = getAllLikes()
      const sendObj:ILikesAction = {
          type: 'ALL_LIKES',
          payload: arr
      } 
      dispatch(sendObj)
    }, [])
    


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
            <NavLink to={'/likes'} className="nav-link">Likes({allLikes.length})</NavLink>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
            </a>
            <ul className="dropdown-menu">
                <li><NavLink to={'/users'} className="dropdown-item">Users</NavLink></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" role='button' onClick={logout}>Logout</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <a ref={nameRef} className="nav-link disabled" aria-disabled="true">{name}</a>
            </li>
        </ul>
        <form action='/search' className="d-flex" role="search">
            <input name='q' ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar