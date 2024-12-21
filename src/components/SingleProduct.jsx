import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct(){
   const {id} =useParams();
   const url =`https://fakestoreapi.com/products/${id}`;
   const [product,setProduct]=useState([]);
   useEffect(()=>{
    fetch(url).then((res)=>res.json()).then((data)=>setProduct(data))
   })
    return(
        <>
<div className="card">
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.discription}</p>
  </div>
</div>
        </>
    )
}
export default SingleProduct;