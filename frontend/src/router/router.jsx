import {createBrowserRouter} from "react-router-dom";

// import App from "../App.jsx"
import ProductList from "../views/ProductList.jsx";
import ProductDetail from "../views/ProductDetail.jsx";
import Login from "../views/Login.jsx";
import Register from "../views/Register.jsx";
import Profile from "../views/Profile.jsx";
import PrivateLayout from "../components/privateLayout/Layout.jsx";
import PublicLayout from "../components/publicLayout/Layout.jsx"

    const router= createBrowserRouter([
    {
        path:"/",
        element:<PublicLayout/>,
        children:[
            {
                path:"/register",
                element:<Register/>,
            },
            {
                path:"/login",
                element:<Login/>,
            }
        ]
    },
    {
        path:"/shop",
        element:<PrivateLayout/>,
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