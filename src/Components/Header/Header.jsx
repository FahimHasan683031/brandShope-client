
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Header = () => {

  
   
    const { user, signout } = useContext(AuthContext)
    const navigate = useNavigate()
    const logOutHandle = () => {
        signout()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div data-aos="fade-down" className="bg-white shadow-md ">
            <div className=" py-3 px-4 max-w-screen-xl mx-auto ">
                <div className=" flex justify-between items-center">
                    <div>
                        <img className="w-[80px] h-[60px]" src="https://i.ibb.co/nQppLHK/Date-2.png" alt="" />
                    </div>
                    <div className="hidden md:block">
                        <div className="text-base font-bold flex gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-purple-700" : ""
                                }
                            >
                                Cart
                            </NavLink>
                            

                        </div>
                    </div>
                    <div>


                        {
                            user ? <div className="flex gap-4 items-center">
                                {
                                    user?.photoURL ? <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" /> : <BiSolidUserCircle className="w-[50px] h-[50px]"></BiSolidUserCircle>
                                }


                                <Link onClick={logOutHandle} className="px-4 py-[6px] w-26 h-9 text-white font-medium bg-purple-700 rounded-full">Log Out</Link>
                            </div> : <div className="flex text-base font-medium text-white gap-5">
                                <Link to='/signup' className="px-4 py-[6px] bg-purple-700 rounded-full">Register</Link>
                                <Link to='/login' className="px-4 py-[6px] bg-purple-700 rounded-full">Sign In</Link>
                            </div>
                        }



                    </div>
                </div>
                <div>
                    <div className="visible md:hidden mt-4 flex  justify-center">
                        <div className="text-base font-bold flex gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-orange-500" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/services"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-orange-500" : ""
                                }
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-orange-500" : ""
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/Blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-orange-500" : ""
                                }
                            >
                                Blog
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;