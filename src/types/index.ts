export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'fashion' | 'misc' | 'music';
  images: string[];
  options?: {
    [key: string]: string[];
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOptions?: {
    [key: string]: string;
  };
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  deliveryDate: string;
}