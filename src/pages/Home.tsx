import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { CartButton } from '../components/CartButton';
import { Navigation } from '../components/Navigation';

export const Home: React.FC = () => {
  const categories = ['all', 'fashion', 'misc', 'music'] as const;
  const [selectedCategory, setSelectedCategory] = React.useState<typeof categories[number]>('all');

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <CartButton />
    </div>
  );
};