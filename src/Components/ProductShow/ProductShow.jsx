import { useLoaderData } from "react-router-dom";
import ProductSingle from "./ProductSingle";
import ImageCurosle from "../ImageCurosle";




const ProductShow = () => {
    const products = useLoaderData()

    return (
        <div className="">
            <div>
                <ImageCurosle></ImageCurosle>
                <div className="grid grid-cols-1 mt-14 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto my-16 px-6">
                    {
                        products?.map(product => <ProductSingle key={product._id} product={product}></ProductSingle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductShow;