import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from 'axios';

function Product({product,setCartlist,setProduct}) {
  
  useEffect(() => {
    axios.get('https://shopping-django-guy-last.onrender.com/product/products/')
    .then((response)=> setProduct((response.data) ? response.data:[]))
  },[])


  function AddToCart(productId) {
    const product = { product: productId, quantity: 1, user:1}
    console.log(product);
    axios.post(`https://shopping-django-guy-last.onrender.com/product/cart/`, product)
      .then(response => {
        setCartlist(data => [...data, product])
        
        alert('Successes');
       

      })
      .catch(error => {
       
        alert('Error');

      });
  }



    return (
      
      <div >

         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`https://shopping-django-guy-last.onrender.com/static${product.image}`} alt={product.name} style={{height:300,width:'100%'}} />
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