// src/components/FeaturesBar.jsx
import React from 'react';
import { Truck, Shield, MapPin } from 'lucide-react';

const FeaturesBar = () => {
  return (
    <section className="bg-white py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Truck className="h-5 w-5 text-green-600" />
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-red-600" />
            <span>Nationwide Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesBar;