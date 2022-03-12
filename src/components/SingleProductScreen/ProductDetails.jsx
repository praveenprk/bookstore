import { cleanup } from '@testing-library/react'
import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/ProductDetails.css'


function  ProductDetails() {

    const {id} = useParams()
    const [item, itemDetails] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => itemDetails(data))
      },[])

    return (
        <div className='product-info'>
            <h3>Product Info</h3>
            <p>{item.description}</p>
        </div>
    )
}

export default ProductDetails
