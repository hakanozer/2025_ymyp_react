import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Control( props: { item: JSX.Element } ) {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '50vh'}}>{ props.item }</div>
      <Footer />
    </>
  )
}

export default Control