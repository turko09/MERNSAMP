import { useState } from "react";
import axios from "axios";
const Form =(props)=>{
    const {productData, setProductData}= props;
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [errorsx,setErrorsx] = useState({});

    const handleFormSubmit = (e) =>{
            e.preventDefault();
            console.log("inside the form handler");
            //1 pack data to object
            //2 axios post
            axios.post("http://localhost:8000/api/product",{
                title:title,
                price:price,
                description:description
            })
            .then((response)=>{
                console.log("SUCCESS",response);
                setProductData([...productData, response.data]);
            })
            .catch((err)=>{
                console.log(err.response.data.err.errors);
              setErrorsx(err.response.data.err.errors);
            });

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                <form onSubmit={handleFormSubmit}>
                <div>
                        <label htmlFor="title" className="form-label">TITLE</label>
                        <input type="text" onChange={(e)=>setTitle(e.target.value)} id="name" className="form-control"></input> 
                        {errorsx.title && <p className="error-text" >{errorsx.title.message}</p>}
                 </div>
                 <div>
                        <label htmlFor="price" className="form-label">PRICE</label>
                        <input type="text" onChange={(e)=>setPrice(e.target.value)} id="price" className="form-control"></input> 
                        {errorsx.price && <p className="error-text" >{errorsx.price.message}</p>}
                 </div>
                 <div>
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" onChange={(e)=>setDescription(e.target.value)}  id="description" className="form-control"></input> 
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
       
    );

};

export default Form;
