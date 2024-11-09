import React from 'react';
import { useEffect, useState } from 'react';
import { Global } from '../helpers/Global.jsx';
import Layout from '../components/layout/Layout.jsx';
import { useNavigate}from 'react-router-dom';

//Components
import CardProduct from '../components/CardProduct.jsx';

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const navigate= useNavigate();

  const productsFetch = async (e) => {

    const userIdentifided= await authUser();

    if(userIdentifided === false){
      return navigate("/");
    }

    const productList = await fetch(`${Global.url}products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // credentials: 'include'
    });

    const data = await productList.json();

    setProducts(data.products);

  }

   const authUser = async () => {
        //Sacar datos usuario identificado del localStorage

    const response = await fetch(`${Global.url}session/current`, {
        method: 'GET',
        credentials: 'include'
    });

    const dataUser = await response.json();

    console.log(dataUser);
    

  }

  useEffect(() => {

    productsFetch();
    

  }, [])


  return (

    <Layout>
      <div className="container-products">

        {products.map(prod => <CardProduct product={prod} key={prod._id} />)}

      </div>
    </Layout>
  )
}

export default ProductList