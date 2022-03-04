import { Card } from 'react-bootstrap'
import '../../styles/ReviewScreenStyles/AskRating.css'

function AskRating() {
    const starArr = Array(5).fill(0)
    return (
        <div className='ask-rating'>
            <Card className='star-input-card'>
                <p>Your overall rating of this product</p>
            {
        <div className='ask-review-stars'>
         {
          starArr.map((val, i) => {
              return(
                <i key={i} className="bi bi-star">&nbsp;&nbsp;&nbsp;</i>
              )
          })
         }
        </div>
}
            </Card>
        </div>
    ) 
}

export default AskRating
