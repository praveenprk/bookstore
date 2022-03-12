import { useContext } from 'react'
import { productContext } from '../../pages/SingleProductPage'
import '../../styles/ProductSingle.css'

const ProductSingle = () => {

  const productImage = useContext(productContext)
  
  return (
    <>
    <div className="product-single-image">
       <img
       className='product-image'
       src={`${productImage.image}`}
       alt=""/>
    </div>
    </>
  );
}

export default ProductSingle
