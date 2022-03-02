import React from 'react';
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../src/App.css'
import CTA from '../components/SingleProductScreen/CTA';
import Header from '../components/SingleProductScreen/Header';
import ProductSingle from '../components/SingleProductScreen/ProductSingle';
import ProductTitle from '../components/SingleProductScreen/ProductTitle';
import StockReview from '../components/SingleProductScreen/StockReview';
import ProductInfoAccordion  from '../components/SingleProductScreen/ProductInfoAccordion';
import Reviews from '../components/SingleProductScreen/Reviews';
import ProductDetails from '../components/SingleProductScreen/ProductDetails'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export const productContext = React.createContext()

const SingleProductPage = (props) => {
  
  let {id} = useParams()
  const [product, getProduct] = useState({})

  useEffect(()=> {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>getProduct(res.data))
  }, [])


  return (<div>
    <productContext.Provider value={product}>
     <Header/>
     <h1 className='text-center'>Now showing {id}</h1><br/>
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
