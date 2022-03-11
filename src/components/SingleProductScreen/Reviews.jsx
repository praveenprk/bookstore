import { Divider, Rating } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
// import '../../styles/Reviews.css'

const Reviews = () => {
    
    const [stars, setStars] = React.useState(0)

    return (
        <Box component="card"
        sx={{
            width: 300,
            height: 300
          }}>
            <sup>4.6</sup>
                &nbsp;
                <sub>/5</sub>
                &nbsp;
                <p>Based on 120 Reviews</p>
            <Divider/>
                <Rating
                    name="simple-controlled"
                    value={stars}
                    onChange={(event, newStars) => {
                    console.log(newStars)
                    setStars(newStars)
                }}
            />
                <Link to='/add-review'>Add Review</Link>
        </Box>
    )
}

export default Reviews
