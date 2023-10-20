import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram,AiFillLinkedin,AiOutlineTwitter} from "react-icons/ai";
const Footer = () => {
   
    return (
        <div data-aos="zoom-in" className="bg-neutral mt-28 ">
            
                <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 p-10 max-w-screen-xl mx-auto  text-neutral-content">

                
            <nav className="flex justify-center mt-10">
                <div>
                <img className="w-28 h-28" src="https://i.ibb.co/PFb49Mp/Date-2-removebg-preview.png" alt="" />
                    <div className="flex justify-center gap-2 md:gap-5 my-3">
                    <FaFacebookF className="text-3xl p-1 text-white rounded-full bg-purple-700"></FaFacebookF>
                    <AiFillInstagram className="text-3xl p-1 text-white rounded-full bg-purple-700"></AiFillInstagram>
                    <AiFillLinkedin className="text-3xl p-1 text-white rounded-full bg-purple-700"></AiFillLinkedin>
                    <AiOutlineTwitter className="text-3xl p-1 text-white rounded-full bg-purple-700"></AiOutlineTwitter>
                </div>
                </div>
                    
                    
                </nav>
                <nav className="flex flex-col gap-1 md:gap-3">
                    <header className="font-bold text-lg text-purple-500">Brands</header>
                    <a className="link link-hover">Google</a>
                    <a className="link link-hover">Samsung</a>
                    <a className="link link-hover">Apple</a>
                    <a className="link link-hover">One Plus</a>
                    <a className="link link-hover">Dell</a>
                </nav>
                <nav className="flex flex-col gap-1 md:gap-3">
                    <header className="font-bold text-lg text-purple-500">Company</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Add Product</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">About Us</a>
                </nav>
                <nav className="flex flex-col gap-1 md:gap-3">
                    <header className="font-bold text-lg text-purple-500">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                </div>
           
        </div>

    );
};

export default Footer;