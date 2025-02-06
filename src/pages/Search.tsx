import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { productSearch } from '../services/productService'
import { Product } from '../models/IProduct'
import { getSingleLikes } from '../utils/store'

function Search() {

  const [arr, setArr] = useState<Product[]>([])
  const [params, setParams] = useSearchParams()
  const [q, setq] = useState('')
  useEffect(() => {
      const q = params.get('q')
      if (q) {
          setq(q)
          productSearch(q).then(res => {
              setArr(res.data)
          }).catch(err => {
              setq(q + ' not found')
          })
      }
  },[])

  return (
    <>
        <h2>Search - {q} - ({arr.length})</h2>
        <div className='row'>
        { arr.map( (item, index) => 
          <div key={index} className='col-sm-4'>
            <div className="card">
              <img src={item.images[0]} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.price}₺</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <NavLink to={'/productDetail/'+item.id} className='btn btn-warning' >Detail</NavLink>
                  <i className={ getSingleLikes(item.id.toString()) === false ? 'bi bi-suit-heart fs-2' : 'bi bi-suit-heart-fill fs-2 text-danger' }></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Search