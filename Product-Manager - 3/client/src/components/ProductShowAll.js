//import useEffect for reloads
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Form from "./Form";
import ProductList from "./ProductList";

const ProductShowAll =(props)=>{
   
    const [productData, setProductData]  = useState([]);
    
    return (
    <>
        <Form productData={productData} setProductData={setProductData}/>
        <hr></hr>
        <ProductList productData={productData} setProductData={setProductData}/>
    </>
        );
};

export default ProductShowAll;