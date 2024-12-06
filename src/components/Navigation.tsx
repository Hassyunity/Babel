import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Info, Home } from 'lucide-react';
import logo from '../../public/assets/BG.webp';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Babel Goods Logo" className="h-8 w-8 rounded-full" />
            <span className="ml-2 text-xl font-bold text-gray-900">Babel Goods</span>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/') 
                  ? 'text-custom-blue border-b-2 border-custom-blue' // Changer ici
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link
              to="/about"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/about') 
                  ? 'text-custom-blue border-b-2 border-custom-blue' // Changer ici
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Info className="h-4 w-4 mr-2" />
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
