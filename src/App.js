import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductLists from './components/ProductLista';
import { Route ,Routes } from 'react-router-dom';
import About from './components/About';
import SingleProduct from './components/SingleProduct';


function App() {
  return (

    <div className="App">
    <NavBar/>
    <Hero/>
    <Routes>
      <Route path='' element={<ProductLists/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/details/:id" element={<SingleProduct />} />
      <Route/>
    </Routes>
    </div>
  );
}

export default App;
