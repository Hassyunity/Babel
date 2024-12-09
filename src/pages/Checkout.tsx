import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cart';
import { CheckoutForm } from '../types';
import { ArrowLeft } from 'lucide-react';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    deliveryDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    clearCart();
    navigate('/order-confirmation');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/cart')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Cart
          </button>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
          Checkout
        </h1>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-start">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="h-16 w-16 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.product.name}
                  </h3>
                  <h3 className="text-sm font-medium text-gray-900">
                    ${item.product.price.toFixed(2)}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Quantité: {item.quantity}
                  </p>
                  {item.selectedOptions && (
                    <p className="mt-1 text-sm text-gray-500">
                      {Object.entries(item.selectedOptions).map(
                        ([option, value], index, arr) => (
                          <span key={option}>
                            {option}: {value}
                            {index < arr.length - 1 ? ', ' : ''}
                          </span>
                        )
                      )}
                    </p>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="border-t border-gray-200 pt-4 flex justify-between">
              <span className="text-base font-medium text-gray-900">Total</span>
              <span className="text-base font-medium text-gray-900">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Prenom
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Numero de téléphone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address de livraison
            </label>
            <textarea
              name="address"
              id="address"
              required
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="deliveryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Date de livraison souhaitée
            </label>
            <input
              type="date"
              name="deliveryDate"
              id="deliveryDate"
              required
              value={formData.deliveryDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#007BFF] focus:ring-[#007BFF] sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#007BFF] py-3 px-8 text-base font-medium text-white hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:ring-offset-2"
          >
            Envoyer la commande
          </button>
        </form>
      </div>
    </div>
  );
};
