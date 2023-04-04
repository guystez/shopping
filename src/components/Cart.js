import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from 'axios';
import Cartlist from './Cartlist';
import { useEffect } from 'react';

function Cart({product,cart,setCart}) {
  useEffect(() => {
    axios.get('https://shopping-django-guy-last.onrender.com/product/cart/')
    .then((response)=> setCart((response.data) ? response.data:[]))
  },[])

  function calculateTotalPrice(cart) {
        let total = 0;
        cart.map(product => {
          total += product.price;
          console.log(total)
        });
        return total
      }
      
      
  
  


    const cardListStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '0.1rem',
        width:'80%',
    };

    
    function Checkout(){
        alert('Thank you for your purchase!');
        axios.post(`https://shopping-django-guy-last.onrender.com/product/checkout/`,
        {
           cart:cart
            
        })
        console.log();
    }
    
        

        return (
            <>
            
            <div style={cardListStyle}>
            
            {cart.map(product => <Cartlist key={product.id} product={product} cart={cart}setCart={setCart}/>)}
            </div>
        
      <div>
        <Button class="bottom-button2" variant="danger" onClick ={()=>Checkout()}>Checkout</Button>
        {/* <Button class="bottom-button2" variant="danger" onClick ={()=>calculateTotalPrice()}>total price</Button> */}
        {/* <calculateTotalPrice></calculateTotalPrice> */}
        
        </div>
        </>
        
        )
    }
  
  
export default Cart