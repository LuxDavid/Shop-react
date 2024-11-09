import React from 'react'
import {NavLink} from "react-router-dom" 

const Nav = () => {
  return (
    <div id='navContainer'>
        <ul id='menu'>
            <li><NavLink to="/products">Inicio</NavLink></li>
            <li><NavLink to="/profile">Perfil</NavLink></li>
            <li><NavLink to="/">carrito</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav