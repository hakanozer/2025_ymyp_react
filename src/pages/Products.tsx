import React, { useEffect, useState } from 'react'
import { allProduct } from '../services/productService'
import { Product } from '../models/IProduct'
import { NavLink } from 'react-router-dom'

function Products() {

  const [arr, setArr] = useState<Product[]>([])
  useEffect(() => {
    allProduct('1', '10').then(res => {
      setArr(res.data.data)
    })
  }, [])

  return (
    <>
      <h2>Products</h2>
      <div className='row'>
        { arr.map( (item, index) => 
          <div key={index} className='col-sm-4'>
            <div className="card">
              <img src={item.images[0]} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}₺</p>
                <NavLink to={'/productDetail/'+item.id} className='btn btn-warning' >Detail</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Products