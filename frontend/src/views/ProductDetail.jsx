import React from 'react';
import { useEffect, useState } from 'react';
import { Global } from '../helpers/Global.jsx';
import { useParams } from "react-router-dom";
import Layout from '../components/privateLayout/Layout.jsx';
import CardDetail from '../components/CartDetail.jsx';

const ProductDetail = () => {

  const params = useParams();

  const [product, setProduct] = useState({});

  const productFetch = async (e) => {

    const findProduct = await fetch(`${Global.url}products/${params.productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });

    const data = await findProduct.json();

    console.log(data.product);

    setProduct(data.product);

  }

  useEffect(() => {
    productFetch();
  }, [])

  return (
      <div id='detailContainer'>
      <CardDetail product={product}/>
      </div>
  )
}

export default ProductDetail