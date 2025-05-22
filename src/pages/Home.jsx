// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesBar from '../components/FeaturesBar';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/constants';
import { useWishlist } from '../hooks/useWishlist';

const Home = ({ onProductClick }) => {
  const { wishlist, toggleWishlist, isWishlisted } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header wishlistCount={wishlist.length} />
      <HeroSection />
      <FeaturesBar />
      
      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600">Discover our hand-picked selection of amazing deals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={toggleWishlist}
                isWishlisted={isWishlisted(product.id)}
                onClick={() => onProductClick(product)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;