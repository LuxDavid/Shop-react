import React from 'react';
import Layout from '../components/layout/Layout';
import ItemProfile from '../components/ItemProfile.jsx';
import useAuth from '../hooks/useAuth.jsx';

const Profile = () => {

  const {auth} = useAuth();


  return (
    <Layout>
      <ItemProfile infoUser={auth}/>
    </Layout>
  )
}

export default Profile