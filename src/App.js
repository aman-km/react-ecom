import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import SingleProduct from './components/SingleProduct';
import AllProducts from './components/AllProducts';
import SearchQuery from './components/SearchQuery';
import ProductPage from './components/ProductPage';
import SearchResultSingle from './components/SearchResultSingle';
import Cart from './components/Cart';
import About from './components/About';


function App() {


  const [product, setProduct] = useState([]);


  const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const json = await data.json();

    setProduct(json.products)
    
  };

  useEffect(() => {
    fetchData();
  }, []);


  

  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Header />
        <Routes>
          <Route path='/' element={<Home products={product}/>} />
          <Route path='/single' element={<SingleProduct/>} />
          <Route path='/products' element={<AllProducts all={product}/>}/>
          <Route path='/search' element={<SearchQuery />} />
          <Route path='/product/:id' element={<ProductPage product={product} />}/>
          <Route path='/products/searchs' element={<SearchResultSingle/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <footer>
          <h5 style={{textAlign:'center', marginTop:'50px', borderTop:'1px solid black'}}>&copy; All rights reserved 2024-27</h5>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
