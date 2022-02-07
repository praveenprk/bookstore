import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../../styles/ReviewScreenStyles/ReviewTitle.css'

const ReviewTitle = () => {
    return(
        <div className='review-form'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>Title for your review</b></Form.Label>
                <Form.Control className='frm-field' type="text" placeholder="Summarize review..." />
                <span className='footer-note'>100 characters left</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><b>What did you like or dislike?</b></Form.Label>
                <Form.Control className='frm-field' as='textarea' type="text" placeholder="What should shoppers knows before they buy?" />
                <span className='footer-note'>3000 characters left</span>
            </Form.Group>
            <Button className='submit-review' variant="primary" type="submit">Submit Review</Button>         
        </Form><br/>
    </div>
    )
}

export default ReviewTitle
