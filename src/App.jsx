import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import styled from "styled-components"; 
import ProductList from "./Components/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart"



const Container = styled.div`
      height: 60px;
    
`


const App = () => {
  return <div>
    <Container>
    <Cart/>
      
    </Container>
  
  </div>;
};

export default App;