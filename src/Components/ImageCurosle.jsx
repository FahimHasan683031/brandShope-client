
const ImageCurosle = () => {
    return (
        <div className="carousel h-96 w-full">
            <div id="slide1" className="carousel-item  relative w-full">
                <img src="https://images.livemint.com/img/2022/03/05/1600x900/iPhone_13_1646469167438_1646469167644.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn bg-purple-700 text-white btn-circle">❮</a>
                    <a href="#slide2" className="btn bg-purple-700 text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/Master-banner-Horizontal.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn bg-purple-700 text-white btn-circle">❮</a>
                    <a href="#slide3" className="btn bg-purple-700 text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://soyacincau.com/wp-content/uploads/2020/05/200510-samsung-galaxy-special-offers.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn bg-purple-700 text-white btn-circle">❮</a>
                    <a href="#slide4" className="btn bg-purple-700 text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.gadgets360cdn.com/large/Amazon_onePlus_sale_1624537196873.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn bg-purple-700 text-white btn-circle">❮</a>
                    <a href="#slide1" className="btn bg-purple-700 text-white btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default ImageCurosle;