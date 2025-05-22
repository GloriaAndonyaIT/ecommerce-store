// src/hooks/useWishlist.js
import { useState } from 'react';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isWishlisted = (productId) => {
    return wishlist.includes(productId);
  };

  return {
    wishlist,
    toggleWishlist,
    isWishlisted
  };
};