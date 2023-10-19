import { useLoaderData, useParams } from "react-router-dom";


const ProductShow = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            this is product show page
        </div>
    );
};

export default ProductShow;