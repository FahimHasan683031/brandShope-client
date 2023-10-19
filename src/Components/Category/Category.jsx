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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categorys?.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default Category;