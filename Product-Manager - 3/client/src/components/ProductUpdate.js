import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const ProductUpdate = (props) => {
    const { id } = props; //this process is identical to the one we used with our Details.js component
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [errorsx,setErrorsx] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err))
    }, [])
    
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/edit/' + id, {
            title:title,
            price:price,
            description:description  
            // this is shortcut syntax for firstName: firstName,
            // this is shortcut syntax for lastName: lastName
        })
            .then((res) => {
                console.log(res);
                navigate("/api/product");
            }).catch((err)=>{
                setErrorsx(err.response.data.err.errors);   
            });
    }
    return (
        <div>

<div className="container">
            <div className="row">
                <div className="col-6">
                <form onSubmit={updateProduct}>
                <div>
                        <label htmlFor="title" className="form-label">TITLE</label>
                        <input type="text"value={title} 
                    onChange={(e)=>setTitle(e.target.value)} id="name" className="form-control"></input> 
                        {errorsx.title && <p className="error-text" >{errorsx.title.message}</p>}
                 </div>
                 <div>
                        <label htmlFor="price" className="form-label">PRICE</label>
                        <input type="text" value={price}  onChange={(e)=>setPrice(e.target.value)} id="price" className="form-control"></input> 
                        {errorsx.price && <p className="error-text" >{errorsx.price.message}</p>}
                 </div>
                 <div>
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" value={description}  onChange={(e)=>setDescription(e.target.value)}  id="description" className="form-control"></input> 
                        {errorsx.description && <p className="error-text" >{errorsx.description.message}</p>}
                 </div>
                 <div>
                     <button className="btn btn-primary">Submit</button>
                 </div>
                 </form>
                 {/*errorsx && Object.keys(errorsx).map((errKey,index)=>{
                            return (<p className="error-text" key={index}>
                                {errorsx[errKey].message}
                            </p>)
                        })*/ }
                </div>

            </div>
       
        </div>

           
        </div>
    )
}
export default ProductUpdate;