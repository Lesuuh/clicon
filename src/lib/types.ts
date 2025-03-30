export interface ProductTypes {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  brand: string;
  rating: number;
  reviews: { user: string; comment: string; rating: number }[];
  stock: number;
  images: string[];
  variants: { color: string; storage: string; price: number }[];
  shipping: {
    weight: string;
    dimensions: { width: string; height: string; depth: string };
    availableRegions: string[];
  };
  seller: { id: number; storeName: string; location: string };
  bestDeals: boolean;
  featured: boolean;
  hot: boolean;
  soldOut: boolean;
}

export interface CategoriesTypes {
  id: number;
  slug: string;
  name: string;
  image: string;
}

export interface UserTypes {
  id: number;
  name: string;
  email: string;
  password: string;
  cart: CartItemTypes[];
  wishlist: WishlistItemTypes[];
  orders: OrderTypes[];
}

export interface CartItemTypes {
  productId: number;
  quantity: number;
}

export interface WishlistItemTypes {
  productId: number;
}

export interface OrderTypes {
  orderId: number;
  date: string;
  totalAmount: number;
  items: OrderItemTypes;
}

export interface OrderItemTypes {
  productId: number;
  quantity: number;
  price: number;
}
