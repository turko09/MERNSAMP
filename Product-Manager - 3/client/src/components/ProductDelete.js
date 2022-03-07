import React, {useState, useEffect} from 'react'
import { Link, navigate } from "@reach/router";
import axios from "axios";
const ProductDelete = (props)=>{

    const {id,removeFromDom, productData, setProductData} = props;
    const [oneproductData, setoneProductData]  = useState({});
    const {triggerRequest, setTriggerRequest} = useState(false);


    const deleteFilter=(id)=>{
        let newList = productData.filter((product)=>product._id !==id);
        setProductData(newList);
    }

    const deleteHandler =(e)=>{
        axios.delete("http://localhost:8000/api/product/delete/"+id)
        .then((response)=>{
            console.log("Workingx",response.data);
                removeFromDom(id);
                navigate('/api/product');
        
        })
        .catch((err)=>{
            console.log("FAILED",err.response);
        })
    }
  return(
      <div>
          <button onClick={deleteHandler}>DELETE</button>
      </div>
  )

}

export default ProductDelete;



