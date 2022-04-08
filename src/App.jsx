import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import styled from "styled-components"; 
import ProductList from "./Components/ProductList";



const Container = styled.div`
      height: 60px;
    
`


const App = () => {
  return <div>
    <Container>
     <ProductList/>
      
    </Container>
  
  </div>;
};

export default App;