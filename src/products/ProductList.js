import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../productcard/ProductCard';

const ProductList = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px', paddingLeft: '1rem', marginBottom: '1rem' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onClick={handleProductClick} />
      ))}
    </div>
  );
};

export default ProductList;
