import React from 'react'
import '../../styles/ReviewScreenStyles/ProductSnippet.css'

const ProductSnippet = () => {
    return (
        <section className='product-snippet'>
            <img
            className='product-thumb'
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt=""/>
            <div className='product-info-rev'>
            <span>Nike</span>
            <h1>Red Booster Shoes</h1>
        </div>
        </section>
    )
}

export default ProductSnippet
