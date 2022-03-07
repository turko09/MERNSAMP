//import useEffect for reloads
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import ProductDelete from "./ProductDelete";
const ProductShowOne =(props)=>{

    const {id} = props;
    const [productData, setProductData]  = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/"+id)
        .then((response)=>{
            console.log("Workingx",response.data);
            setProductData(response.data);
            
        })
        .catch((err)=>{
            console.log("FAILED",err.response);
        })
        
    }, []);
    return (
        <div>
           <p style={{fontWeight:'bold',fontSize:"30px"}}>Title: {productData.title}</p> 
           <p style={{fontweight:"bold",fontSize:"25px"}}>Price: {productData.price}</p> 
           <p style={{fontweight:"bold",fontSize:"25px"}}>Description: {productData.description}</p> 
           <ProductDelete productData={productData} setProductData={setProductData} id={productData._id}/> 
        </div>
    )
};

export default ProductShowOne;