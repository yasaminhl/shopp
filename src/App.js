import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Container } from 'react-bootstrap';
import Shop from './pages/shop';
import {CartProvider} from "../src/context/cartContext"
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <CartProvider>
    <Container>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop/>}/>
      </Routes>
      </BrowserRouter>
    </Container>
    </CartProvider>
  );
}

export default App;
