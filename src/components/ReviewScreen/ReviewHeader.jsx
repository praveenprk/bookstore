import React from 'react'
import '../../styles/ReviewScreenStyles/Header.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router';

const ReviewHeader = () => {
    const navigate = useNavigate()
    return (
        <div className='review-header'>
            <ChevronLeftIcon onClick={() => navigate(-1)}/>
            <p>Add Review</p>
        </div>
    )
}

export default ReviewHeader
