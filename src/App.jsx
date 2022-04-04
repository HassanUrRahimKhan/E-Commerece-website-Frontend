import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import styled from "styled-components"; 



const Container = styled.div`
      height: 60px;
    
`


const App = () => {
  return <div>
    <Container>
      <Home></Home>
      
    </Container>
  
  </div>;
};

export default App;