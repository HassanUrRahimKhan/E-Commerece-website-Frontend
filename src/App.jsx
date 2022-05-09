import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import styled from "styled-components"; 
import ProductList from "./Components/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart"
import {
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Success from "./Pages/Success";


const Container = styled.div`
      height: 60px;
    
`


const App = () => {
  const user = true;
  return <div>
    <Container>
      <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/products" element={<ProductList/>}/>
        <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:Id" element={<Product/>}/>
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>

      </Routes>
    
    
      
    </Container>
  
  </div>;
};

export default App;