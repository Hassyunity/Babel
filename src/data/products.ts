import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Electric Guitar',
    price: 799.99,
    description: 'Professional electric guitar with amazing sound quality and premium craftsmanship. Features include a mahogany body, rosewood fingerboard, and high-output pickups.',
    category: 'music',
    images: [
      'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f',
      'https://images.unsplash.com/photo-1550985616-10810253b84d',
      'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02',
    ],
    options: {
      color: ['Black', 'Sunburst', 'Cherry Red'],
    },
  },
  {
    id: '2',
    name: 'Leather Jacket',
    price: 199.99,
    description: 'Classic leather jacket with modern style. Made from genuine leather with a comfortable fit and durable construction.',
    category: 'fashion',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2',
    ],
    options: {
      size: ['S', 'M', 'L', 'XL'],
      color: ['Black', 'Brown'],
    },
  },
  {
    id: '3',
    name: 'Acoustic Guitar',
    price: 499.99,
    description: 'Beautiful acoustic guitar with warm, rich tone. Perfect for both beginners and experienced players.',
    category: 'music',
    images: [
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1',
      'https://images.unsplash.com/photo-1555221573-85b450126d6c',
    ],
    options: {
      type: ['Dreadnought', 'Concert', 'Grand Auditorium'],
    },
  },
  {
    id: '4',
    name: 'Denim Jacket',
    price: 89.99,
    description: 'Timeless denim jacket that never goes out of style. Features premium denim and classic detailing.',
    category: 'fashion',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d',
      'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d',
    ],
    options: {
      size: ['XS', 'S', 'M', 'L', 'XL'],
      wash: ['Light', 'Medium', 'Dark'],
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