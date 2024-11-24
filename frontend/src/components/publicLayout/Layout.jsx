import React from 'react';
import Footer from './Footer.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';

const Layout = () => {

    const {auth}= useAuth();

    return (
        <div id='layout'>
            <div id='content'>
                {
                !auth.result ? <Outlet/> : <Navigate to="/shop/products" />
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Layout