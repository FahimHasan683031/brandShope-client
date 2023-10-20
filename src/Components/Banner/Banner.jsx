import { Link } from "react-router-dom";

const Banner = () => {
   
    return (
        <div  className="bg-[url('https://www.macworld.com/wp-content/uploads/2023/10/2023-Apple-Products.jpg?quality=50&strip=all&w=1024')] bg-no-repeat bg-cover  py-12 relative mb-32">
            <div className="w-full h-full absolute top-0 left-0 bg-[#0e0e0ebd]"></div>
            <div  className="z-30 relative grid grid-cols-1 lg:grid-cols-2 items-center h-full max-w-screen-xl mx-auto px-6 text-center lg:text-left gap-10">
                <div >
                    <h1 className="text-5xl text-purple-500 font-bold leading-[60px]">Welcome<span className="text-white">!</span>  </h1>
                    <h2 className="text-4xl font-bold text-white my-3"> Excellent <span className="text-purple-500">Brand Shop</span>.</h2>
                    <p className="text-base leading-7 mb-6 font-medium text-gray-300">We are sealing world most popular brands produces. We seal Google, Apple, Samsung, One Plus etc lots of populer brand products. We provide 100% authentic and official products.   </p>
                    <Link className="px-3 py-2 bg-purple-600 text-white font-medium rounded" to='/services'>Brands</Link>
                </div>
                <div  >
                    <div className="grid gap-3 bg-white p-3   grid-cols-2 ">

                        <img className="w-full h-full" src="https://www.albawaba.com/sites/default/files/styles/d08_standard/public/2022-06/shutterstock_1973343692.jpg?h=82f92a78&itok=iLp-lQku" alt="" />


                        <img className="w-full h-full" src="https://www.connection.com/~/media/images/brands/s/samsung/showcase/1805842-samsung-mobbizsol-mod.png?h=330&la=en&w=600&v=1" alt="" />

                        <img className="w-full h-full" src="https://media.currys.biz/i/currysprod/google-hero-mobile" alt="" />

                        <img className="w-full h-full" src="https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2020/01/New-Dell-and-Alienware-Products-Unveiled-at-CES-2020-Featured-image.jpg" alt="" />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;