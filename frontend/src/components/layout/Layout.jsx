import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div id='layout'>
            <Header/>
            <div id='content'>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout