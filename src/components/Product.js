import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from 'axios';

function Product({product,setCartlist,setProduct}) {
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/product/products/')
    .then((response)=> setProduct((response.data) ? response.data:[]))
  },[])


  function AddToCart(productId) {
    const product = { product: productId, quantity: 1, user:'username'}
    axios.post(`http://127.0.0.1:8000/product/cart/`, product
      
    )
      .then(response => {
        setCartlist(data => [...data, product])
        
        alert('Successes');
       

      })
      .catch(error => {
       
        alert('Successes');

      });
  }



    return (
      
      <div >
        
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://127.0.0.1:8000/static${product.image}`} alt={product.name} style={{height:300,width:'100%'}} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        ID : {product.id}<br></br>
        , {product.description}-<br></br>
        Price : {product.price}<br></br>
        </Card.Text>
        <Button variant="primary" onClick ={()=>AddToCart(product.id)}>Add To Cart</Button>
        
      </Card.Body>
    </Card>
         
         
      </div>
    )
  }
  
  
export default Product