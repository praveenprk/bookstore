import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Card, Col, Container, Row, Badge, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
// import { useParams } from "react-router"
// import { Link } from "react-router-dom"
import LoggedInHeader from "../HomeScreen/LoggedInHeader"

const ViewAllProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/products/all')
    .then(res => {
    setProducts(res.data)
    })
    }, [])

  return (
    <>
    <LoggedInHeader/>
     <Container>
        <h1 className="text-center mb-5">All Products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} md={4} sm={6} xs={6}>
                    <Card style={{padding:'2em'}}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description.substring(0, 250)}...
                                <Link to={`/product/${product._id}`}>Read More</Link>
                            </Card.Text>
                            <Card.Text>
                            <Badge className="mt-3 mb-3" bg="primary">{`$${product.price}`}</Badge>
                            </Card.Text>
                            <Link to={`/product/${product._id}`}>
                            <Button>Buy</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
     </Container>
    </>
  )
}

export default ViewAllProducts