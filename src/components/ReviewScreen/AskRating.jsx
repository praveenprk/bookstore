import '../../styles/ReviewScreenStyles/AskRating.css'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Box } from '@mui/material';


function AskRating() {

    const [stars, giveStars] = useState(2);


    return (
        <Box
    sx={{
        mt: "2rem",
        textAlign: "center",
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
      component="h3"
      sx={{
        fontWeight: "bold"
      }}>Rate this product</Typography>
       <Rating
        name="simple-controlled"
        value={stars}
        onChange={(event, newValue) => {
          giveStars(newValue);
        }}
        precision={0.5}
      />
    </Box>
    ) 
}

export default AskRating
