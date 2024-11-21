import {createBrowserRouter} from "react-router-dom";

// import App from "../App.jsx"
import ProductList from "../views/ProductList.jsx";
import ProductDetail from "../views/ProductDetail.jsx";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import Profile from "../views/Profile.jsx";
import Layout from "../components/layout/Layout.jsx";

    const router= createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        children:[
            {
                path:"/register",
                element:<Register/>,
            }
        ]
    },
    {
        path:"/shop",
        element:<Layout/>,
        children:[
            {
                path:"products",
                element:<ProductList/>
            },
            {
                path:"product/:productId",
                element:<ProductDetail/>
            },
            {
                path:"profile",
                element:<Profile/>,
            },
        ]
    },
    {
        path:"*",
        element:<h1>Error 404styles</h1>,
    }

]);

export default router