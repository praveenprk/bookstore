import React from 'react'
import { useContext } from 'react'
import { productContext } from '../../pages/SingleProductPage'
import '../../styles/ProductDetails.css'


function  ProductDetails() {
    const product = useContext(productContext)
    // console.log(product.description)
    return (
        <div className='product-info'>
            <h3>Product Info</h3>
            <p>{product.description}</p>
            {/* <button className='btn btn-success'>Button</button> */}
        </div>
    )
}

export default  ProductDetails
