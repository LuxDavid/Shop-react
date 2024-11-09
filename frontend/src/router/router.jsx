import {createBrowserRouter} from "react-router-dom";

import App from "../App.jsx"
import ProductList from "../views/ProductList.jsx";
import ProductDetail from "../views/ProductDetail.jsx";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import Profile from "../views/Profile.jsx";

    const router= createBrowserRouter([
    {
        path:"/",
        element: <App/>
    },
    {
        path:"/products",
        element:<ProductList/>
    },
    {
        path:"/product/:productId",
        element:<ProductDetail/>
    },
    {
        path:"/loggin",
        element:<Login/>,
    },
    {
        path:"/register",
        element:<Register/>,
    },
    {
        path:"/profile",
        element:<Profile/>,
    },
    {
        path:"*",
        element:<h1>Error 404styles</h1>,
    }

]);

export default router