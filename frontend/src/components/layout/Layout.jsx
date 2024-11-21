import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.jsx';

const Layout = () => {

    const {auth}= useAuth();

    return (
        <div id='layout'>
            <Header/>
            <div id='content'>
                {auth.result ? <Outlet/> : <Navigate to="/"/>}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout