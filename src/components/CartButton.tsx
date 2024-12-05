import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { Link } from 'react-router-dom';

export const CartButton: React.FC = () => {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link
      to="/cart"
      className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg flex items-center space-x-2"
    >
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="bg-white text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
          {itemCount}
        </span>
      )}
    </Link>
  );
};