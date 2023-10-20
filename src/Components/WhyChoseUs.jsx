import { GiDividedSquare } from "react-icons/gi";

const WhyChoseUs = () => {

    return (
        <div className="max-w-screen-xl px-6 mx-auto my-20 grid grid-cols-1  lg:grid-cols-2 gap-4">
            <div data-aos="fade-left" className="text-center lg:text-left">
                <p className="text-lg font-medium  py-3">Our advantages</p>
                <h1 className="text-4xl font-bold text-purple-700 leading-[50px]">Why do people trust <br /> our company?</h1>
                <p className="text-base font-medium pr-6 text-gray-500 leading-8 my-3">We are sealing world most popular brands produces. We seal Google, Apple, Samsung, One Plus etc lots of populer brand products. We provide 100% authentic and official products.</p>
                <button className="px-3 py-2 text-white font-medium bg-purple-700 rounded my-3">View More</button>
            </div>
            <div >
                <div className="flex gap-2 items-center mb-4">
                    <GiDividedSquare className="text-2xl text-purple-700"></GiDividedSquare>
                    <h1 className="text-2xl font-bold">Our Popularity.</h1>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <GiDividedSquare className="text-2xl text-purple-700"></GiDividedSquare>
                    <h1 className="text-2xl font-bold">Trusted Shop.</h1>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <GiDividedSquare className="text-2xl text-purple-700"></GiDividedSquare>
                    <h1 className="text-2xl font-bold">100% Authentic Product.</h1>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <GiDividedSquare className="text-2xl text-purple-700"></GiDividedSquare>
                    <h1 className="text-2xl font-bold">Official Product.</h1>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <GiDividedSquare className="text-2xl text-purple-700"></GiDividedSquare>
                    <h1 className="text-2xl font-bold">Goode Communication.</h1>
                </div>
                <div className="flex gap-2 items-center mb-4">
                    <GiDividedSquare className="text-2xl text-purple-700"></GiDividedSquare>
                    <h1 className="text-2xl font-bold">100% Client Satisfaction.</h1>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;