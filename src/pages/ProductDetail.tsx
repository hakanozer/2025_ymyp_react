import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleProduct } from '../services/productService'
import { Product } from '../models/IProduct'
import { getAllLikes, getSingleLikes, isLikesControl } from '../utils/store'
import { useDispatch } from 'react-redux'
import { ILikesAction } from '../useRedux/likesReducer'

function ProductDetail() {

  const [isLike, setIsLike] = useState(false)  
  const [bigImage, setBigImage] = useState('')  
  const [item, setItem] = useState<Product>()  
  const params = useParams()

  /*
  useEffect(() => {
    const pid = params.pid
    if (item && pid) {
        console.log(isLike, pid)
    }
  }, [isLike])
  */

  // reduxa datayı gönderme
  const dispatch = useDispatch()
  const likesControl = () => {
    const likesStatus = !isLike
    setIsLike(likesStatus)
    const pid = params.pid
    if (item && pid) {
        isLikesControl(pid)
    }
    const arr = getAllLikes()
    const sendObj:ILikesAction = {
        type: 'ALL_LIKES',
        payload: arr
    } 
    dispatch(sendObj)
  }

  useEffect(() => {
      const pid = params.pid
      if (pid) {
        setIsLike(getSingleLikes(pid))
        singleProduct(pid).then(res => {
          setItem(res.data.data)
          setBigImage(res.data.data.images[0])
        })
      }
  }, [])





  return (
    <>
        { item && 
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3 className='text-primary'>{item.title}</h3>
                        <p className='text-muted'>{item.description}</p>
                        <p>
                            <i onClick={ likesControl } role='button' className={ isLike === false ? 'bi bi-suit-heart fs-2' : 'bi bi-suit-heart-fill fs-2 text-danger' }></i>
                        </p>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Price:</strong> <span className='text-success'>${item.price}</span></p>
                        <p><strong>Discount:</strong> <span className='text-danger'>{item.discountPercentage}%</span></p>
                        <p><strong>Rating:</strong> {item.rating}</p>
                        <p><strong>Stock:</strong> {item.stock}</p>
                        <p><strong>Brand:</strong> {item.brand}</p>
                        <p><strong>SKU:</strong> {item.sku}</p>
                        <p><strong>Minimum Order Quantity:</strong> {item.minimumOrderQuantity}</p>
                        <p><strong>Tags:</strong> {item.tags.join(', ')}</p>
                    </div>
                    <div className='col-md-6'>
                        <img src={bigImage} className="img-fluid rounded shadow-sm mb-3" />
                        <div className='d-flex flex-wrap'>
                            { item.images.map( (image, index) => 
                                <img onClick={() => setBigImage(image) } role='button' key={index} src={image} className='img-thumbnail me-2 mb-2' width={120} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default ProductDetail