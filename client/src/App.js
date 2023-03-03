
import { Routes,Route } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
 <NavBar/>
<Routes>
  <Route path="/addProduct" element={<AddProduct/>}/>
  <Route path="/" element={ <ProductList/>}/>
  <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
</Routes>
      
    
     
      
    </div>
  );
}

export default App;
