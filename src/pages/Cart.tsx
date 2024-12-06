import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft } from 'lucide-react';
import { useCartStore } from '../store/cart';
import { Navigation } from '../components/Navigation';

export const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity } = useCartStore();
  const navigate = useNavigate();
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </button>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Shopping Cart
        </h1>
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Your cart is empty</p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#70A0AF] hover:bg-[#70A0AF]"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center space-x-4 border-b border-gray-200 pb-4"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="h-24 w-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.product.name}
                  </h3>
                  {item.selectedOptions && (
                    <div className="mt-1 text-sm text-gray-500">
                      {Object.entries(item.selectedOptions).map(
                        ([option, value]) => (
                          <span key={option} className="mr-4">
                            {option}: {value}
                          </span>
                        )
                      )}
                    </div>
                  )}
                  <div className="mt-2 flex items-center space-x-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.product.id, parseInt(e.target.value))
                      }
                      className="w-20 rounded-md border-gray-300 shadow-sm focus:border-[#70A0AF] focus:ring-[#70A0AF] sm:text-sm"
                    />
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="text-lg font-medium text-gray-900">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center border-t border-gray-200 pt-4">
              <span className="text-xl font-medium text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="mt-8">
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-[#70A0AF] py-3 px-8 text-base font-medium text-white hover:bg-[#70A0AF] focus:outline-none focus:ring-2 focus:ring-[#70A0AF] focus:ring-offset-2"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
