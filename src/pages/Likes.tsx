import React, { useEffect, useState } from 'react'
import { getAllLikes, getSingleLikes, isLikesControl } from '../utils/store'
import { singleProduct } from '../services/productService'
import { Product } from '../models/IProduct'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ILikesAction } from '../useRedux/likesReducer'

function Likes() {

  const [arr, setArr] = useState<Product[]>([])
  
  useEffect(() => {
    likesRefresh()
  }, [])

  const fncIsLike = (pid: number) => {
    isLikesControl(pid.toString())
    likesRefresh()
  }

  // reduxa datayı gönderme
  const dispatch = useDispatch()
  const likesRefresh = () => {
    const arrIds = getAllLikes()
    const sendObj:ILikesAction = {
        type: 'ALL_LIKES',
        payload: arrIds
    } 
    dispatch(sendObj)
    const arrProduct: Product[] = []
    axios.all(arrIds.map(id => singleProduct(id))).then(res => {
      res.map(r => {
        arrProduct.push(r.data.data)
      })
      setArr(arrProduct)
    })
  }
  

  return (
    <>
      <h2>Likes</h2>
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
                  <i role='button' onClick={() => fncIsLike(item.id) } className={ getSingleLikes(item.id.toString()) === false ? 'bi bi-suit-heart fs-2' : 'bi bi-suit-heart-fill fs-2 text-danger' }></i>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Likes