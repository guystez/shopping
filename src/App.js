
import './App.css';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import logo from './pexels-felix-mittermeier-956981.jpg'
import NotFoundPage from './components/404';
import { Link } from "react-router-dom"
import LoginPage from './components/LoginPage';





// import Spline from '@splinetool/react-spline';



function App() {


  
  const [cart,setCart]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/product/cart/')
    .then((response)=> setCart((response.data) ? response.data:[]))
  },[])

  const [product,setProduct]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/product/products/')
    .then((response)=> setProduct((response.data) ? response.data:[]))
  },[])




   // this function logs the user in
   const [session, setSession] = useState(localStorage.getItem('session'))
  
   function login(user, pass) {
    console.log(user, pass)
    axios.post('http://localhost:8000/login/', {
        username: user,
        password: pass,
    })
        .then(response => {
            console.log(response.data);
            setSession('logged-in')
            localStorage.setItem('session', 'logged-in')
            localStorage.setItem('username',user)
        })
        .catch(error => {
            console.log(error);
            let status = error.message
               switch (error.code) {case "ERR_BAD_REQUEST":
               status = "username or password not correct plese try again"
               break
           case "ERR_NETWORK":
               status = "could not reach the server. check if the server is down!"
               break
           case "ERR_BAD_RESPONSE":
               status = "server is up. but had an error. you can try again in a fews seconds"
               break
           default:
               break
       }
       alert("something went wrong: " + status)


        });
}

function logout() {
  axios.get("http://localhost:8000/logout/")
  setSession(null)
  localStorage.removeItem('session')
  localStorage.removeItem('username')
}

  return (
    
    <BrowserRouter>
    <Navbar logout={logout}></Navbar>


    <div style={{
      // backgroundImage:`url(${logo})`,
      // 'backgroundSize':"cover",
      // position:'absolute',
      // width:'110%',
      // minHeight:"100vh"
     

    }} className="App" >
      
      <Routes>
     {/* <Route path = '/'></Route>    */}
     <Route path='/login' element={<LoginPage login={login}></LoginPage>}></Route>
     <Route path='/product' element={<Products product={product}cart={cart} ></Products>}></Route>
     <Route path='/cart' element={<Cart product={product}cart={cart}setCart={setCart} ></Cart>}></Route>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='*'element={<NotFoundPage/>}></Route>
     
     
     
     
     
     </Routes>
    </div>
    {/* <Spline scene="https://prod.spline.design/7Rg0kQk8zc2pADx0/scene.splinecode"/> */}
    </BrowserRouter>
  );
}

export default App;
