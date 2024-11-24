import React from 'react';
import Layout from '../components/privateLayout/Layout.jsx';
import ItemProfile from '../components/ItemProfile.jsx';
import useAuth from '../hooks/useAuth.jsx';

const Profile = () => {

  const {auth} = useAuth();


  return (

      <ItemProfile infoUser={auth}/>

  )
}

export default Profile