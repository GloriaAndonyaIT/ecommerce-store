// src/components/ProductCard.jsx
import React from 'react';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({ product, onWishlistToggle, isWishlisted, onClick }) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer overflow-hidden">
      <div className="relative p-6 text-center" onClick={onClick}>
        <div className="h-32 w-32 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NCA2NEw2NCA0NEw0NCA2NEw2NCA4NEw4NCA2NFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
            }}
          />
        </div>
        
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </div>
        )}
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle(product.id);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-red-50 transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-400'
            }`}
          />
        </button>

        <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center space-x-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? 'fill-current' : ''
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {product.freeShipping && (
          <div className="text-sm text-green-600 font-medium mb-4">
            ✓ Free Shipping
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;