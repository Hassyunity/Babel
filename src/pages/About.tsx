import React from 'react';
import { Navigation } from '../components/Navigation';
import { CartButton } from '../components/CartButton';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Store front"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">
                About Babel Goods
              </h1>
            </div> */}
          </div>

          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Welcome to Babel Goods
              </h2>
              <p className="text-gray-600 mb-8">
              Fondée en 2024, Babel Goods est votre destination idéale pour des produits de mode, de musique et de style de vie.
              Tous nos articles proviennent de Chine et sont soigneusement sélectionnés pour vous garantir une qualité supérieure à des prix raisonnables.
              Nous nous engageons à vous offrir le meilleur rapport qualité-prix pour répondre à vos attentes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Nos Valeurs</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li>✓ Qualité superieurs</li>
                    <li>✓ Service client exceptionnel</li>
                    <li>✓ Pratiques durables et éthiques</li>
                    <li>✓ Se demarque des autres</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-indigo-600" />
                      Madagascar, Antananarivo
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-2 text-indigo-600" />
                      +261 34 16 020 73
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Mail className="h-5 w-5 mr-2 text-indigo-600" />
                      contact@babelgoods.com
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                      7 jours sur 7, 24 heures sur 24
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartButton />
    </div>
  );
};