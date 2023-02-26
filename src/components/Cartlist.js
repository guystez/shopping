import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Product from './Product';




function Cartlist({product,cart,setCart}) {
    
    console.log(cart,"cartttttttttttttttttttttttttttttttttttt");
    const [quantity,setQuantity]=useState(product.quantity)
    function Deletefromcart(productId){
    axios.delete(`http://127.0.0.1:8000/product/deletecart/${productId}`)
    const newCart = cart.filter(item => item.product.id !== productId)
      setCart(newCart)
    console.log(productId);
}

    function updatecart(productId,quantity,cartId){
        axios.put(`http://127.0.0.1:8000/product/updatecart/${cartId}/`,
        {
            "id":cartId,
            "product":productId,
            quantity:quantity
            
        })
        //automatic update
        const autoupdate=cart.map(prod=>{
            if(prod.product.id===productId){
                return{
                    ...prod,
                    quantity:quantity,

                };
            } else{return prod};
        })
        setCart(autoupdate)
        console.log();
    }
    


    function plusclick(){
        setQuantity(quantity+1)}


    function menosclick(){
        
        setQuantity(quantity-1)}


  return (
        
    <div>
          <Card style={{ width: '18rem' }}>
            <div>
        <Card.Img className='small-image' variant="top" src={`http://127.0.0.1:8000/static${product.product.image}`} alt={product.product.name} style={{height:300,width:'100%'}} />
        </div>
        <Card.Body>
            <Card.Title>{product.product.name}</Card.Title>
            <Card.Text>
            Id: {product.product.id}<br></br>
            about: {product.product.description}<br></br>
            price: {product.product.price}<br></br>
            quantity: {product.quantity}<br></br>
            </Card.Text>
            <Button variant="danger" onClick ={()=>Deletefromcart(product.product.id)}>Delete</Button>
            <Button variant="success" onClick ={()=>updatecart(product.product.id,quantity,product.id)}>Update</Button><br></br>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Button variant="dark" onClick = {plusclick}>+</Button>
            <input type='text'value={quantity}></input>
            <Button variant="dark" onClick ={menosclick}>-</Button>
            </div>
            
        </Card.Body>
        </Card>
            
    </div>
  )
}

export default Cartlist