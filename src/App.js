
import './App.css';
import Products from './components/Products';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


function App() {

  const [product,setProduct]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
    .then((response)=> setProduct((response.data) ? response.data:[]))
  },[])

  return (
    <div className="App">
     <Products product={product} ></Products>

    </div>
  );
}

export default App;
