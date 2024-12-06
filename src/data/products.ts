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
    name: 'Stanley',
    price: 150000.99,
    description: 'Gourde durable et pratique, conçue pour contenir de l\'eau. Parfaite pour les activités en extérieur, elle garde votre boisson fraîche pendant des heures grâce à son isolation thermique.',
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
    name: 'Manfinity',
    price: 89.99,
    description: 'Capuche moderne et confortable, Conçue pour un ajustement parfait et un confort optimal.',
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