// src/pages/ProductPage.jsx
import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ product, onBack }) => {
  return <ProductDetails product={product} onBack={onBack} />;
};

export default ProductPage;