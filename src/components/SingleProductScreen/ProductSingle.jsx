import { useContext } from 'react';
import { productContext } from '../../pages/SingleProductPage';
import '../../styles/ProductSingle.css'

const ProductSingle = () => {
  const productImage = useContext(productContext)
  
  return (
      <>
    <div className="product-single-image">
      {/* <img className='product-image' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt=""/>
       */}
       <img
       className='product-image'
       src={`${productImage.image}`}
       alt=""/>
    </div>
    </>
  );
}

export default ProductSingle;
