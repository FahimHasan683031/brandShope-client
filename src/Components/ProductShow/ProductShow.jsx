import { useLoaderData, useParams } from "react-router-dom";
import ProductSingle from "./ProductSingle";



const ProductShow = () => {
    const products = useLoaderData()
    return (
        <div className="max-w-screen-xl mx-auto my-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                  products?.map(product=><ProductSingle key={product._id} product={product}></ProductSingle>)  
                }
            </div>
        </div>
    );
};

export default ProductShow;