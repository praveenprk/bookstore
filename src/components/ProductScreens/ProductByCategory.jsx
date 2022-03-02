import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import LoggedInHeader from "../HomeScreen/LoggedInHeader"

const ProductByCategory = () => {

  const { cat_name } = useParams()
  const [products, setProducts] = useState([])

   
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${cat_name}`)
    .then(res => {
    setProducts(res.data)
    })
    }, [])

  return (
    <>
    <LoggedInHeader/>
    <div className="d-flex flex-column p-4">
      <h4 className="text-center pb-5"><b>{cat_name.toUpperCase()}</b></h4>
      <ul className="pb-5">
        {
          products.map((product, i) => {
            //can write nested return in React.
            return(
            <>
            <Link to={`/product/${product.id}`}>
            <li key={i} className="orders-card" key={i}>
                <div className="d-flex flex-row justify-content-center">
                <img width={50} height={50} src={product.image}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <p>{product.title}</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                <p>${product.price}</p>
                <p>Rating</p>
                </div>
            </li>
            </Link>
            </>
            )
          })
        }
      </ul>
    </div>
    </>
  )
}

export default ProductByCategory