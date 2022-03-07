import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';

import ProductShowAll from './components/ProductShowAll';
import ProductShowOne from './components/ProductShowOne';
import ProductUpdate from './components/ProductUpdate';
import Main from './views/Main';


function App() {
  return (
   <div className="App">
      <Router>
        <Main path="/api/product"></Main>
        <ProductShowOne path="/api/product/:id"/>
        <ProductUpdate path="/api/product/edit/:id"/>
        {/*<ProductShowAll path="/api/product"/>
        <ProductUpdate path="/api/product/edit/:id"/>*/}
      </Router>
      

      
   </div>
    

  );
}

export default App;
