// src/App.jsx
import React, { useState } from 'react';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { products } from './utils/constants';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const goToProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const goHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
  };

  if (currentPage === 'product' && selectedProduct) {
    return <ProductPage product={selectedProduct} onBack={goHome} />;
  }

  return <Home onProductClick={goToProduct} />;
};

export default App;