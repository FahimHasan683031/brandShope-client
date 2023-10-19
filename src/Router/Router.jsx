import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../MainLayout/MainLayout";
import AddProduct from "../Pages/AddProduct";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivetRout from "../Components/Privet/PrivetRout";
import ProductShow from "../Components/ProductShow/ProductShow";
import ProductDetails from "../Components/ProductShow/ProductDetails";
import ProductUpdate from "../Pages/ProductUpdate";

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
        },
        {
          path:'/products/:category',
          element:<ProductShow></ProductShow>,
          loader:({params})=>fetch(`http://localhost:5000/products/${params.category}`)
        },
        {
          path:'/product/:id',
          element:<ProductDetails></ProductDetails>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path:'/productUpdate/:id',
          element:<ProductUpdate></ProductUpdate>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        }
      ]
    },
  ]);

export default router;