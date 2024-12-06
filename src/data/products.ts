import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classique Guitar',
    price: 200000,
    description: 'Guitare classique avec un style moderne. Fabriqué en bois de qualité avec une finition durable.',
    category: 'music',
    images: [
      '../../../public/assets/GB.jpeg',
      '../../../public/assets/GN.jpeg',
    ],
    options: {
      color: ['Black', 'Wood'],
    },
  },
  {
    id: '2',
    name: 'Leather Jacket',
    price: 150000.99,
    description: 'Classic leather jacket with modern style. Made from genuine leather with a comfortable fit and durable construction.',
    category: 'fashion',
    images: [
      '../../../public/assets/SB.jpeg',
      '../../../public/assets/SN.jpeg',
    ],
    options: {
      // size: ['S', 'M', 'L', 'XL'],
      color: ['Black', 'white'],
    },
  },
  {
    id: '4',
    name: 'Denim Jacket',
    price: 89.99,
    description: 'Timeless denim jacket that never goes out of style. Features premium denim and classic detailing.',
    category: 'fashion',
    images: [
      '../../../public/assets/PB.jpeg',
      '../../../public/assets/PM.jpeg',
      '../../../public/assets/PJ.jpeg',
      '../../../public/assets/PG.jpeg',
    ],
    options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      wash: ['Blanc', 'Marron', 'Gris', 'Jaune'],
    },
  },
  {
    id: '5',
    name: 'Vintage Record Player',
    price: 299.99,
    description: 'Classic record player with modern features. Includes built-in speakers and Bluetooth connectivity.',
    category: 'misc',
    images: [
      'https://images.unsplash.com/photo-1542728928-1413d1894ed1',
      'https://images.unsplash.com/photo-1461360228754-6e81c478b882',
    ],
    options: {
      color: ['Walnut', 'Black', 'Natural'],
    },
  },
];