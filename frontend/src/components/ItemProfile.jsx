import React from 'react'

const ItemProfile = ({infoUser}) => {

  const {user} = infoUser
  
  return (
    <div className='container-profile'>
        <h1>Nombre: {user.name}</h1>
        <h2>Apellidos: {user.last_name}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Role: {user.role}</h2>
    </div>
  )
}


export default ItemProfile