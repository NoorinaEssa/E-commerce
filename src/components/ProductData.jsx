import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const dataFetch = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setLoader(false);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setLoader(false);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    
    <div className="container mx-auto p-4">
    
      {loader ? <h1>Loading</h1> : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col rounded overflow-hidden shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.category}</p>
            </div>
            <div className="px-6 pt-4 pb-5 mt-auto">
              <Link to={`/products/${item.id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                ${item.price}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
