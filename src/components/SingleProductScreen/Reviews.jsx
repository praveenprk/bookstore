import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import '../../styles/Reviews.css'

const Reviews = () => {
    return (
        <Card className='review-card'>
            <div className='review-left'>
            <sup>4.6</sup>
                &nbsp;
                <sub>/5</sub>
                &nbsp;
                <p>Based on 120 Reviews</p>
                <div className='stars'>
                    <i className="bi bi-star-fill"></i>&nbsp;
                    <i className="bi bi-star-fill"></i>&nbsp;
                    <i className="bi bi-star-fill"></i>&nbsp;
                    <i className="bi bi-star-fill"></i>&nbsp;
                    <i className="bi bi-star-half"></i>
                </div>
                <Link to='/add-review'>Add Review</Link>
            </div>
            
            {/* <div className='review-right'>
                <ProgressBar variant="success" now={40} />
                <ProgressBar variant="success" now={40} />
                <ProgressBar variant="success" now={40} />
            </div> */}
        </Card>
    )
}

export default Reviews
