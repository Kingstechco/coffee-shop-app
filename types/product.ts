export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'hot-drinks' | 'cold-drinks' | 'food';
  image: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}