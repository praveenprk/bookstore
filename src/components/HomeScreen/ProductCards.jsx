import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/HomeScreen/ProductCards.css";

function ProductCards() {
  const newArrivals = [
    {
      id: 1,
      product_title: "Nike Booster",
      price: 500,
      image:
        "https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png",
    },
    {
      id: 2,
      product_title: "Nike Kids",
      price: 600,
      image:
        "https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png",
    },
    {
      id: 3,
      product_title: "Nike Casual",
      price: 700,
      image:
        "https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png",
    },
    {
      id: 4,
      product_title: "Nike Sports",
      price: 800,
      image:
        "https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png",
    },
    {
      id: 5,
      product_title: "Nike Fashion",
      price: 900,
      image:
        "https://919kicks.com/wp-content/uploads/2021/11/Yeezy-Logo-Website-e1637051091746.png",
    },
  ];

  return (
    <Container>
      <Row>
        {newArrivals.map((product, i) => {
          return (
            <Col key={i} md={4} sm={6} xs={6}>
              <Link to="/product/:id">
                <Card>
                  <Card.Img src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.product_title}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProductCards;
