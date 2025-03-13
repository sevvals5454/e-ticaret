import { useEffect, useState } from 'react';
import Title from './ui/Title';
import Products from '../api/products.json'; 
import ProductItem from './ui/ProductItem';

export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <Title>Favorilerim</Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 rounded-lg overflow-hidden">
        {Products.length > 0 && products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
