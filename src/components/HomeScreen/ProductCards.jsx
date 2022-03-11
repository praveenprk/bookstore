import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import productSlice, { setProductData } from "../../features/products/productSlice";
import "../../styles/HomeScreen/ProductCards.css"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import { Chip, Grid } from "@mui/material";

const ProductCards = () => {

  const [newArrivals, setNewArrivals] = React.useState([])
  const dispatch = useDispatch()

  useEffect(async () => {
    await axios.get('https://fakestoreapi.com/products?limit=6')
    // await axios.get('/products/all')
    .then(
      res => {
        setNewArrivals(res.data)
        dispatch(setProductData(res.data))
        
      }
    )
  },[])

/* <Row>
        {newArrivals.map((product, i) => {
          return (
            <Col key={i} md={4} sm={6} xs={6}>
              <Link to={`/product/${product.id}`}>
                <Card>
                  <Card.Img src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    {product.quantity === 0 ? <Badge bg='danger'>Sold Out</Badge> : null}
                    <hr/>
                    <Card.Text>{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
  </Row> */

  return (
  <Container>
    <Grid container spacing={2}>
    {
      newArrivals.map((product,i) => (
        <Grid item xs={6} sm={4} lg={3}>
        <Card sx={{ maxWidth: 345 }} key={i}>
          <CardMedia
            component="img"
            height="140"
            alt={product.name}
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions display='inline' ml='10'>
            <Button size="small" color="primary">
              <Link to={`/products/${product.id}`}>View</Link>
              <Chip padding={2} label={`$${product.price}`} variant="outlined"/>
            </Button>
          </CardActions>
        </Card>
        </Grid>
      ))
    }
    </Grid>
  </Container>
  )
  
}

export default ProductCards;