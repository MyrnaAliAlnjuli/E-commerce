import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const url ='https://fakestoreapi.com/products';
function Products (){
    
    const [products,setProducts]=useState([]);
    const[categories,setCategries]=useState([])
const getProducts =()=>{
    fetch(url).then((res)=>res.json()).then((data)=>setProducts(data));}
const getCategries =()=>{
    fetch(`${url}/categories`)
    .then(res=>res.json())
    .then((data)=>setCategries(data));
}
const getSpacificCat =(catName)=>{
    fetch(`${url}/category/${catName}`)
            .then(res=>res.json())
            .then((data)=>setProducts(data)
        
        )
}
useEffect(()=>{
    getProducts();
    getCategries();
    getSpacificCat(); },[])

    return(
        <>
          <button className="btn btn-primary m-2" onClick={()=>{
    getProducts()
  }}> All</button>
{categories.map((cat)=>{
return(

    <>
    <div className="container">
     <div className="row">
  <button className="btn btn-primary m-2" onClick={()=>{
    getSpacificCat(cat)
  }}  key={cat}>{cat}</button>
        </div>
  
    </div>
  
    </>
)
    })
}
{products.map((product)=>{
return(
    
<div className="card" key={product.id}>
  <img src={product.image} className="card-img-top" alt={product.title}/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <Link to={`/details/${product.id}`} className="btn btn-primary">Details</Link>
  </div>
    </div>
)
    })}


        </>
    )
}
export default Products;