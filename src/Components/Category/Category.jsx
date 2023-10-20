import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const Category = () => {
    const [categorys, setCategorys] = useState([])
    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-purple-700 mb-4 text-center">OUR BRANDS</h1>
            <p className="text-center mb-11 font-bold text-gray-600 ">Most Populer</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categorys?.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default Category;