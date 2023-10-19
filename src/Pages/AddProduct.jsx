

const AddProduct = () => {
    const formHandle = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const imageUrl = form.image.value;
        const brandName = form.brand.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const product = {name,imageUrl,brandName,productType,price,rating,description}
        console.log(product)

        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            form.reset()
        })
    }
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <form className="max-w-3xl mx-auto bg-purple-200 drop-shadow-lg my-24 px-6 py-8 rounded-lg text-base text-black" onSubmit={formHandle} action="">
                
                <h1 className="text-center text-purple-700 mb-12 md:text-5xl text-3xl font-bold">Add Product</h1>    

                <div className="flex gap-5">
                    <div className=" w-full">
                        <label>
                            Product Name
                        </label>
                        <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " placeholder="Enter Product Name" type="text" name="name" id="" />
                    </div>

                    <div className="w-full">
                        <label >
                            Image URL
                        </label>
                        <input required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" placeholder="Enter Product Image url" type="url" name="image" id="" />

                    </div>
                </div>

                <div className="flex gap-5">
                    <div className=" w-full">
                        <label>
                            Brand Name
                        </label>
                        <select required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  text-[#a3a9b5]  " name="brand" id="">
                            <option selected disabled value="">Select Brand Name</option>
                            <option value="samsung">Samsung</option>
                            <option value="apple">Apple</option>
                            <option value="google">Google</option>
                            <option value="oneplus">One Plus</option>
                            <option value="hp">hp</option>
                            <option value="dell">Dell</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label >
                            Product Type
                        </label>
                        <select required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4 text-[#a3a9b5]" placeholder="" name="productType" id="">
                            <option selected disabled>Select Product Type</option>
                            <option value="mobile">Mobile</option>
                            <option value="headphone">Headphone</option>
                            <option value="airpod">Airpod</option>
                            <option value="tablate">Tablate</option>
                            <option value="laptop">Laptop</option>
                            <option value="computer">Computer</option>
                            <option value="printer">Printer</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className=" w-full">
                        <label>
                            price
                        </label>
                        <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " type="text" name="price" placeholder="Enter Product Price" id="" />
                    </div>

                    <div className="w-full">
                        <label >
                            Rating
                        </label>
                        <input required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" type="number" name="rating" placeholder="Enter Product Rating" max={5} min={1} defaultValue={0} id="" />
                    </div>
                </div>

                <textarea required className="w-full my-6 drop-shadow-lg p-3 rounded " name="description" placeholder="Enter Product Description" id="" cols="30" rows="5"></textarea>
                <input className="w-full font-bold my-5 cursor-pointer py-3 rounded-md text-white bg-purple-700" type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default AddProduct;