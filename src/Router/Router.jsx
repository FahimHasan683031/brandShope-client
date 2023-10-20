import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../MainLayout/MainLayout";
import AddProduct from "../Pages/AddProduct";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivetRout from "../Components/Privet/PrivetRout";
import ProductShow from "../Components/ProductShow/ProductShow";
import ProductDetails from "../Components/ProductShow/ProductDetails";
import ProductUpdate from "../Pages/ProductUpdate";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          element:<PrivetRout><Cart></Cart></PrivetRout>,
          loader:()=>fetch('https://brand-shope.vercel.app/cart')
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
          element:<PrivetRout><ProductShow></ProductShow></PrivetRout>,
          loader:({params})=>fetch(`https://brand-shope.vercel.app/products/${params.category}`)
        },
        {
          path:'/product/:id',
          element:<ProductDetails></ProductDetails>,
          loader:({params})=>fetch(`https://brand-shope.vercel.app/product/${params.id}`)
        },
        {
          path:'/productUpdate/:id',
          element:<ProductUpdate></ProductUpdate>,
          loader:({params})=>fetch(`https://brand-shope.vercel.app/product/${params.id}`)
        }
      ]
    },
  ]);

export default router;