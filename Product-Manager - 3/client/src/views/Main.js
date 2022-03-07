import React, { useState } from 'react'
import axios from 'axios';
import ProductList from '../components/ProductList';
import Form from '../components/Form';
const Main = (props) => {
    
    const [productData, setProductData] = useState([]);
    const removeFromDom = (id) => {
        setProductData(productData.filter((product) => product._id !== id)); //We could also write this in our PersonList component
    }
    return (
        <div>
    	
           <Form productData={productData} setProductData={setProductData} />
            <hr/>
           <ProductList removeFromDom={removeFromDom} productData={productData} setProductData={setProductData} />
        </div>
    )
}
export default Main;