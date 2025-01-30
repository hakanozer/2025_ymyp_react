import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleProduct } from '../services/productService'
import { Product } from '../models/IProduct'

function ProductDetail() {

  const [bigImage, setBigImage] = useState('')  
  const [item, setItem] = useState<Product>()  
  const params = useParams()

  useEffect(() => {
      const pid = params.pid
      if (pid) {
        singleProduct(pid).then(res => {
          setItem(res.data.data)
          setBigImage(res.data.data.images[0])
        })
      }
  }, [])

  return (
    <>
        { item && 
            <div className='row'>
                <div className='col-sm-6'>
                    <h3>{item.title}</h3>
                </div>
                <div className='col-sm-6'>
                    <img src={bigImage} className="img-fluid" />
                    { item.images.map( (image, index) => 
                        <img onClick={() => setBigImage(image) } role='button' key={index} src={image} className='img-thumbnail me-2' width={120} />
                    )}
                </div>
            </div>
        }
    </>
  )
}

export default ProductDetail