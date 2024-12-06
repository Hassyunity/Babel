import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full px-4 py-8 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Commande Envoyer!
        </h1>
        <p className="text-gray-600 mb-8">
          Merci pour votre commande. Nous vous contacterons bientôt par téléphone pour vous communiquer les détails de votre commande.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-[#70A0AF]"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};