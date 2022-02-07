import React from 'react'
import '../../styles/StockReview.css'

function StockReview() {
    return (
        <div className='stock-status-reviews'>
            <span>Currently Unavailable</span>
            <span><i className="bi bi-star"></i> 4.5 (120 Reviews)</span>
            {/* <button className='btn btn-primary'>Let's see!</button> */}
        </div>
    )
}

export default StockReview
