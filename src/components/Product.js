import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({product}) {
    return (
      <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://127.0.0.1:8000/static${product.image}`} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        {product.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
         
        
         
         
      </div>
    )
  }
  
 

export default Product