import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://nameless-ridge-66648.herokuapp.com/product/${productKey}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  console.log({ productKey }, { product });
  return (
    <div>
      <h1>Your Product Details.</h1>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
