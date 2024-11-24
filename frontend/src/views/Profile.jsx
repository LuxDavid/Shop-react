import React, { useEffect } from 'react';
import ItemProfile from '../components/ItemProfile.jsx';
import useAuth from '../hooks/useAuth.jsx';

const Profile = () => {

  const {auth, authSession} = useAuth();

  useEffect(()=> {
    authSession();
  },[])


  return (

      <ItemProfile infoUser={auth}/>

  )
}

export default Profile