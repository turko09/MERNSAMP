import React, {useState, useEffect} from 'react'
import { Link } from "@reach/router";
import { navigate } from '@reach/router';
import ProductDelete from './ProductDelete';
import axios from "axios";
const ProductList = (props)=>{

    const {removeFromDom, productData, setProductData}= props;
    
    
    const deleteFilter=(id)=>{
        let newList = productData.filter((product)=>product._id !==id);
        setProductData(newList);
    }



    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((response)=>{
            console.log("Working",response.data);
            setProductData(response.data.theProducts);
            console.log(productData);
        })
        .catch((err)=>{
            console.log("FAILED",err.response);
        })
        
    }, []);

    return (
        <table align="center">
            <thead>
                <tr>
                    <th style={{fontSize:'45px'}}>All Products</th>
                </tr>
            </thead>
            <tbody>
                {productData.map((datax,index)=>{
                   return <tr  key={index}>
                       <td ><Link style={{color:'black', fontWeight:'bold'}} to={`/api/product/${datax._id}`}>{datax.title}</Link> </td>
                       <td ><Link to={`/api/product/edit/${datax._id}`}><button>EDIT</button> </Link></td>
                       <td ><ProductDelete removeFromDom={removeFromDom} productData={productData} setProductData={setProductData} id={datax._id}/>     </td>
                   </tr>
                })}
            </tbody>
        </table>
    )
}

export default ProductList;



