import React from 'react'
import { useContext } from 'react'
import { productContext } from '../../pages/SingleProductPage'
import '../../styles/ProductTitle.css'

function ProductTitle() {

    const productBasic = useContext(productContext)
    // console.log(productBasic)
    return (
        <div className='product-title-main'>
            <span className='brand-name'>Nike</span>
            <p className='product-title'>{productBasic.description}</p>
        </div>
    )
}

export default ProductTitle
