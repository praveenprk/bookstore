import React from 'react'
import { Card, CardGroup, Row, Col, Container } from 'react-bootstrap';
import '../../styles/HomeScreen/ProductCards.css'

function ProductCards() {
    
    const newArrivals = [
      {
        id: 1,
        product_title: "Nike Booster",
        price: 500,
        image: 'https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png'
      },
      {
        id: 2,
        product_title: "Nike Kids",
        price: 600,
        image: 'https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png'
      },
      {
        id: 3,
        product_title: "Nike Casual",
        price: 700,
        image: 'https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png'
      },
      {
        id: 4,
        product_title: "Nike Sports",
        price: 800,
        image: 'https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png'
      },
      {
        id: 5,
        product_title: "Nike Fashion",
        price: 900,
        image: 'https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png'
      }
    ];

    return(
      newArrivals.map(product => {
        return(
          <Col md={4} sm={2}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.product_title}</Card.Title>
                <Card.Text>
                  {product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })
    )

}
  
export default ProductCards