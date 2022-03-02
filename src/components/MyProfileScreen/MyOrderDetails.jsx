import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import LoggedInHeader from "../HomeScreen/LoggedInHeader"

const MyOrderDetails = () => {

  let { orderid } = useParams()

  const [orderDetails, setOrderDetails] = useState({})


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${orderid}`)
    .then(res => {
      // console.log(res.data)
      setOrderDetails(res.data)
    })
  }, [])
  
return (
    <>
      <LoggedInHeader/>
      <h4 className="text-center">Order Details</h4>
      <div className="d-flex flex-column p-4">
        <div className="d-flex flex-row">
          <img width={50} height={50} src={orderDetails.image}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p>{orderDetails.title}</p>
        </div>&nbsp;
        <div className="d-flex flex-row">
        <p>Price: {orderDetails.price}</p>
        </div>&nbsp;
        <div className="d-flex flex-row">
          <Link to={`/category/${orderDetails.category}`}><p>Category: {orderDetails.category}</p></Link>
        </div>
        {/* <div className="d-flex flex-row">
          <p>{orderDetails.rating.rate}</p>
        </div> */}
        </div>
    </>
  )
}

export default MyOrderDetails