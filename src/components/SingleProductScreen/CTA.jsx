import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/CTA.css'

const CTA = () => {
    return (
        <div className='cta-area'>
            <div className='unit-price'>
                <p>$1000</p>
                <span>Unit Price</span>    
            </div>
            <div className='cta-buy'>
                <Link to='/buy/:pid'><p>Buy Now</p></Link>
                </div>
        </div>
    )
}

export default CTA
