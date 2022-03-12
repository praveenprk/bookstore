import { Rating, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { display } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
// import '../../styles/Reviews.css'

const Reviews = () => {
    
    const [stars, setStars] = React.useState(4.5)

    return (
    <Box
    sx={{
        mt: "2rem",
        textAlign: "center",
        bgcolor: "#f2f2f2f2",
        p: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)",
        maxWidth: "30rem",
        mx: "auto",
        mb: "2rem",
        mt: "2rem",
        fontSize: "1.5rem",
        color: "text.primary",
        border: "1px solid transparent",
      }}>
      <Typography
      sx={{
        fontSize: "1.5rem",
      }}>Reviews</Typography>
      <div style={{display:'inline-flex'}}>
        <Typography variant='h3'>4.5</Typography>
        <Typography variant='p'>/5</Typography>
      </div>
      <div style={{display: 'block'}}>
       <Rating
        name="read-only"
        value={stars}
        readOnly
        onChange={(event, newValue) => {
          setStars(newValue);
        }}
        precision={0.5}
      />
      </div>
      <Typography sx={{fontSize: '1rem'}} variant='p'>
        <Link to='/add-review/1'>Submit Review</Link>
    </Typography>
            
    </Box>
    )
}

export default Reviews
