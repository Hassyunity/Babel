import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageGallery } from '../components/ImageGallery';
import { CartButton } from '../components/CartButton';
import { products } from '../data/products';
import { useCartStore } from '../store/cart';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    {}
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addItem({
      product,
      quantity,
      selectedOptions,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <ImageGallery images={product.images} />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <p className="mt-3 text-3xl tracking-tight text-gray-900">
              ${product.price}
            </p>
            <div className="mt-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
            {product.options && (
              <div className="mt-8">
                {Object.entries(product.options).map(([option, values]) => (
                  <div key={option} className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
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
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <CartButton />
    </div>
  );
};