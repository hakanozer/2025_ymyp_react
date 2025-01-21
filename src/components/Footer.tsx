import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
                <NavLink to={'/products'} className="nav-link px-2 text-body-secondary">Product</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={'/likes'} className="nav-link px-2 text-body-secondary">Likes</NavLink>
            </li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
    </>
  )
}

export default Footer