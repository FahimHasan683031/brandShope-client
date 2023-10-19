import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../MainLayout/MainLayout";
import AddProduct from "../Pages/AddProduct";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivetRout from "../Components/Privet/PrivetRout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/addProduct",
          element:<PrivetRout><AddProduct></AddProduct></PrivetRout>
        },
        {
          path:'/cart',
          element:<PrivetRout><Cart></Cart></PrivetRout>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        }
      ]
    },
  ]);

export default router;