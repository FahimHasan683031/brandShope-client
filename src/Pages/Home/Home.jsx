import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import Reviews from "../../Components/Review/Reviews";
import WhyChoseUs from "../../Components/WhyChoseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <WhyChoseUs></WhyChoseUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;