import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import '../../styles/ProductInfoAccordion.css'

const ProductInfoAccordion = () => {
    return (
        <div className='info-acc'>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><i className="bi bi-info-square"></i>&nbsp;Product Details</Accordion.Header>
    <Accordion.Body>
        <ul>
            <li><b>Launched:&nbsp;</b>2022</li>
            <li><b>Material:&nbsp;</b>Cotton</li>
            <li><b>SKU:&nbsp;</b>5872857463</li>
        </ul>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header><i className="bi bi-truck"></i>&nbsp;Shipping Information</Accordion.Header>
    <Accordion.Body>
    <ul>
            <li><i className="bi bi-truck"></i>&nbsp;Free Shipping on orders worth $2500</li>
            <li><i className="bi bi-calendar-check"></i>&nbsp;7-10 Days Delivery</li>
        </ul>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header><i className="bi bi-arrow-counterclockwise"></i>&nbsp;Returns</Accordion.Header>
    <Accordion.Body>
        <p>30 Days Return Policy</p>
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
        </div>
    )
}

export default ProductInfoAccordion