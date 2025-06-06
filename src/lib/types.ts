export interface ProductTypes {
  id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  category: { id: number; name: string };
  brand: string;
  rating: number;
  reviews: { user: string; comment: string; rating: number }[];
  stock: number;
  images: string[];
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

export interface BlogsTypes {
  id: number;
  name: string;
  date: Date;
  comments: number;
  title: string;
  content: string;
  image: string;
}
