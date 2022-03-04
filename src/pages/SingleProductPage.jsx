import React from 'react' 
import { useParams } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../../src/App.css'
import CTA from '../components/SingleProductScreen/CTA'
import ProductSingle from '../components/SingleProductScreen/ProductSingle'
import ProductTitle from '../components/SingleProductScreen/ProductTitle'
import StockReview from '../components/SingleProductScreen/StockReview'
import ProductInfoAccordion  from '../components/SingleProductScreen/ProductInfoAccordion'
import Reviews from '../components/SingleProductScreen/Reviews'
import ProductDetails from '../components/SingleProductScreen/ProductDetails'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import LoggedInHeader from '../components/HomeScreen/LoggedInHeader'

export const productContext = React.createContext()

const SingleProductPage = (props) => {
  
  let {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect(
    () => {
      axios.get(`/products/viewProduct/${id}`)
      .then(res => {
        // console.log(res.data)
        setProduct(res.data)
      })
    }
  , [])


  return (<div>
    <productContext.Provider value={product}>
     <LoggedInHeader/>
     <h1 className='text-center'>{product.name}</h1><br/>
      <ProductSingle/>
      <ProductTitle/>
      <StockReview/>
      <ProductDetails/>
      <ProductInfoAccordion/>
      <Reviews/>
      <CTA/>
    </productContext.Provider>
  </div>)
}

export default SingleProductPage;
