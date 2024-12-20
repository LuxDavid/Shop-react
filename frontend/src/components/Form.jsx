import React from 'react';
import { useForm } from "../hooks/useForm.jsx"
import { Global } from '../helpers/Global.jsx';

import google from "../assets/images/google.png";
import git from "../assets/images/Git.jpg";

import Swal from 'sweetalert2';

import useAuth from '../hooks/useAuth.jsx';

const Form = () => {

  const { form, changed } = useForm({});
  const { auth, setAuth } = useAuth();

  const loggin = async (e) => {

    e.preventDefault();

    let userLogin = form;

    const { email, password } = userLogin

    //------------------------------------------------------------------------------------------

    const response = await fetch(`${Global.url}session/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),  // Envío del email y password como JSON
    });

    const data = await response.json();

    console.log(data);

    if (data.result === true) {

      await Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }

    //------------------------------------------------------------------------------------------

    const responseTwo = await fetch(`${Global.url}session/current`, {
      method: 'GET',
      credentials: 'include'
    });

    const dataUser = await responseTwo.json();

    console.log(dataUser);


    //Setear el estado de auth
    setAuth(dataUser);

  }

  return (
    <div className='login-Container'>

      <h1>Inicio de session</h1>

      <div id='formContact'>

        <form className='contact-areas' onSubmit={loggin}>

          <label htmlFor="email">Email</label>
          <input type='email' name='email' placeholder='Escribe tu email' onChange={changed} />

          <label htmlFor="password">Password</label>
          <input type='password' name='password' onChange={changed} />

          <input type="submit" value="Enviar" />

          <div id='login-butons'>

            <a href="#">
              <img src={google} alt="" />
            </a>

            <a href="#">
              <img src={git} alt="" />
            </a>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Form