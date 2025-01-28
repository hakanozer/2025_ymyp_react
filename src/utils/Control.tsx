import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Navigate } from 'react-router-dom'

function Control( props: { item: JSX.Element } ) {

  const jwt = localStorage.getItem('token')

  return (
    <>
      {  jwt === null && <Navigate to={'/'} /> }
      {  jwt !== null && 
        <>
          <Navbar />
            <div style={{ minHeight: '50vh'}}>{ props.item }</div>
          <Footer />
        </> 
      }
    </>
  )
}

export default Control