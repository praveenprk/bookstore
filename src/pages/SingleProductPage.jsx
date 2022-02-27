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

const SingleProductPage = (props) => {
  let {id} = useParams()
  return <div>
     <Header/>
     <h1 className='text-center'>Now showing {id}</h1><br/>
      <ProductSingle/>
      <ProductTitle/>
      <StockReview/>
      <ProductDetails/>
      <ProductInfoAccordion/>
      <Reviews/>
      <CTA/>
  </div>
}

export default SingleProductPage;
