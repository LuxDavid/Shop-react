import React from 'react';
import { useEffect, useState } from 'react';
import { Global } from '../helpers/Global.jsx';

//Components
import CardProduct from '../components/CardProduct.jsx';

const ProductList = () => {

  const [products, setProducts] = useState([]);

  const productsFetch = async (e) => {

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

  useEffect(() => {

    productsFetch();
    
  }, [])


  return (

   
      <div className="container-products">

        {products.map(prod => <CardProduct product={prod} key={prod._id} />)}

      </div>
 
  )
}

export default ProductList