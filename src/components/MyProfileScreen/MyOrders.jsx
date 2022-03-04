import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/MyProfileScreenStyles/MyOrders.css'

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=5`)
            .then(res => {
                setOrders(res.data)
            })
    },[])

    console.log(orders)
    
    return (
        <div className='d-flex flex-column p-4'>
            <h4><b>My Orders</b></h4>
            <ul>
             {
                orders.map((order, i) => {
                    //can write nested return in React.
                    return(
                    <>
                    <Link to={`/my-orders/${order.id}`}>
                    <li className='orders-card' key={i}>
                        <div className='d-flex flex-row'>
                        <img width={50} height={50} src={order.image} alt={`order${order.id}`}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <p>{order.title}</p>
                        </div>
                    </li>
                    </Link>
                    </>
                    )
                })
            }
            </ul>
        </div>
    )

}
export default MyOrders