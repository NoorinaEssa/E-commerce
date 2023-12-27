import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const params = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const add = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const sub = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full md:w-1/2 p-4">
        {product && (
          <img src={product.image} alt="Product Image" className="w-full h-[70vh] rounded-lg" />
        )}
      </div>
      <div className="w-full md:w-1/2 p-4">
        {product && (
          <>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <h3 className="text-xl font-bold mb-4">${product.price}</h3>
            <div className="flex items-center mb-4">
              <button onClick={sub} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-l">
                -
              </button>
              <h1 className="text-xl px-4">{count}</h1>
              <button onClick={add} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r">
                +
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
