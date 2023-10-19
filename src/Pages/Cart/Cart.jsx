import { useLoaderData } from "react-router-dom";
import CartSingle from "./CartSingle";
import { useState } from "react";


const Cart = () => {
     const LoadProducts = useLoaderData()
     const [products, setProducts] =useState(LoadProducts)
     const deleteHandle = (name)=>{
        fetch(`http://localhost:5000/cart/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(LoadProducts.filter(product=>product.name != name))
        console.log(data);
      });
     }
    return (
        <div className="max-w-screen-xl mx-auto my-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                  products?.map(product=><CartSingle key={product._id} product={product} deleteHandle={deleteHandle}></CartSingle>)  
                }
            </div>
        </div>
    );
};

export default Cart;