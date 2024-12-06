import React, { useState } from 'react';
import { ImageGallery } from './ImageGallery';
import { useCartStore } from '../store/cart';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    {}
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({
      product,
      quantity,
      selectedOptions,
    });
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <ImageGallery images={product.images} />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="text-lg font-bold text-gray-900">{product.price} Ar</p>
        </div>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>

        {product.options && (
          <div className="space-y-3 mb-4">
            {Object.entries(product.options).map(([option, values]) => (
              <div key={option}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
                <select
                  value={selectedOptions[option] || ''}
                  onChange={(e) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      [option]: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select {option}</option>
                  {values.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-4 mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Quantity:
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
            className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};