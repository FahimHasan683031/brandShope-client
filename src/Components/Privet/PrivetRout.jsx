import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import {Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading){
        return  (<div className="flex justify-center items-center h-[100vh]"><span className="loading loading-spinner text-purple-700  w-12"></span></div>)
    } else if (user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRout;