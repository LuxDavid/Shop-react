import React from 'react'
import {NavLink} from "react-router-dom" 

const Nav = () => {
  return (
    <div id='navContainer'>
        <ul id='menu'>
            <li><NavLink to="/shop/products">Inicio</NavLink></li>
            <li><NavLink to="/shop/profile">Perfil</NavLink></li>
            {/* <li><NavLink to="/">carrito</NavLink></li> */}
        </ul>
    </div>
  )
}

export default Nav